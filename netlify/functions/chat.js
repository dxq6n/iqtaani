/* ========================================================================
   IQ 🤖 — the IQ.T3ani smart assistant (Netlify Serverless Function)
   ------------------------------------------------------------------------
   - Talks to the Gemini API from the SERVER, so the API key never reaches
     the browser. Set it once in Netlify:
       Site settings → Environment variables → GEMINI_API_KEY = <your key>
     (free keys: https://aistudio.google.com/apikey)
   - Zero npm dependencies: uses the built-in fetch of the Node 18+ runtime,
     so it works even with drag-and-drop deploys (no build step needed).
   - Optional env var GEMINI_MODEL to pin a model (default: gemini-2.5-flash,
     with automatic fallbacks if that name isn't available for the key).
   ======================================================================== */

const API_BASE = 'https://generativelanguage.googleapis.com/v1beta';
const MODEL_CANDIDATES = [
  'gemini-flash-latest',
  'gemini-flash-lite-latest',
  'gemini-2.0-flash',
  'gemini-2.5-flash'
];

const SYSTEM_PROMPT =
  'You are IQ, the official smart assistant of the IQ.T3ani platform — a bilingual ' +
  '(Arabic/English) programming education website. You answer ANY question the user asks: ' +
  'general questions, study help, explaining programming concepts, writing complete working code, ' +
  'fixing and improving code, and building web pages. ' +
  'Detect the user\'s language (including Arabic dialects) and always reply in that same language. ' +
  'Always put code inside fenced markdown blocks with a language tag, e.g. ```python. ' +
  'Be friendly, professional and practical. Never mention which AI model powers you — ' +
  'if asked, say you are "IQ, the IQ.T3ani assistant".';

/* Small helper: consistent JSON responses */
function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store'
    },
    body: JSON.stringify(body)
  };
}

exports.handler = async function (event) {
  /* Only POST is allowed */
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: { 'Allow': 'POST' }, body: '' };
  }
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'METHOD', message: 'POST only' });
  }

  /* The key runs ONLY here, on the server (never sent to the browser).
     Priority: the Netlify env var GEMINI_API_KEY. If it isn't set, we fall
     back to the owner's key stored base64-encoded below so it isn't plainly
     readable in the source. NOTE: base64 is obfuscation, not encryption —
     for real safety set GEMINI_API_KEY in Netlify and remove this fallback. */
  const _k = 'QVEuQWI4Uk42SldRWFROZ0V3MWYtWDBZaFRLaHoxNGxtMVozeUNFQ0k0a2FZbjEtR1I1M3c=';
  const KEY = (process.env.GEMINI_API_KEY || Buffer.from(_k, 'base64').toString('utf8')).trim();
  if (!KEY) {
    return json(503, {
      error: 'NO_KEY',
      message: 'GEMINI_API_KEY is not configured on the server. ' +
        'Site owner: add it in Netlify → Site settings → Environment variables.'
    });
  }

  /* Parse + validate the request body */
  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch (e) {
    return json(400, { error: 'BAD_JSON', message: 'Invalid JSON body' });
  }
  let messages = Array.isArray(payload.messages) ? payload.messages : [];
  /* Keep the conversation bounded: last 16 turns, 8k chars each, 40k total */
  messages = messages.slice(-16)
    .filter(m => m && (m.role === 'user' || m.role === 'model') && typeof m.text === 'string')
    .map(m => ({ role: m.role, text: m.text.slice(0, 8000) }));
  const totalLen = messages.reduce((n, m) => n + m.text.length, 0);
  if (!messages.length || messages[messages.length - 1].role !== 'user') {
    return json(400, { error: 'NO_MESSAGE', message: 'Send { messages: [...] } ending with a user message' });
  }
  if (totalLen > 40000) {
    return json(413, { error: 'TOO_LONG', message: 'Conversation too long — clear the chat and retry' });
  }

  const contents = messages.map(m => ({ role: m.role, parts: [{ text: m.text }] }));

  /* Try the configured model first, then fall back down the list */
  const preferred = (process.env.GEMINI_MODEL || '').trim();
  const models = preferred
    ? [preferred, ...MODEL_CANDIDATES.filter(m => m !== preferred)]
    : MODEL_CANDIDATES;

  let lastErr = { status: 500, message: 'Unknown error' };
  for (const model of models) {
    try {
      const res = await fetch(
        `${API_BASE}/models/${model}:generateContent?key=${encodeURIComponent(KEY)}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'x-goog-api-key': KEY },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents,
            generationConfig: { temperature: 0.7, maxOutputTokens: 4096 }
          })
        }
      );
      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        const cand = data.candidates && data.candidates[0];
        const reply = cand && cand.content && cand.content.parts
          ? cand.content.parts.map(p => p.text || '').join('')
          : '';
        if (reply) return json(200, { reply, model });
        lastErr = { status: 502, message: 'Empty answer from the model' };
        continue;
      }

      const msg = (data.error && data.error.message) || `HTTP ${res.status}`;
      if (res.status === 404) { lastErr = { status: 404, message: msg }; continue; } // try next model
      if (res.status === 429) return json(429, { error: 'RATE', message: 'Rate limit reached — try again in a minute' });
      if ((res.status === 400 && /API key/i.test(msg)) || res.status === 401) {
        return json(503, { error: 'BAD_KEY', message: 'The Gemini API key is invalid — regenerate it at aistudio.google.com/apikey.' });
      }
      if (res.status === 403) {
        return json(503, { error: 'FORBIDDEN', message: 'Key rejected (403). Enable the "Generative Language API" for the key\'s Google project, or regenerate the key. Details: ' + msg });
      }
      lastErr = { status: res.status, message: msg };
    } catch (e) {
      lastErr = { status: 502, message: 'Upstream connection failed' };
    }
  }
  return json(lastErr.status >= 400 ? lastErr.status : 502, { error: 'UPSTREAM', message: lastErr.message });
};
