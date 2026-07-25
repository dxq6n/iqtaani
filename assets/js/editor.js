(function(){"use strict";var L=document.documentElement;function m(){return L.getAttribute("data-lang")==="ar"}function u(e,n){return(n||document).querySelector(e)}function f(e,n){return Array.prototype.slice.call((n||document).querySelectorAll(e))}var C=[{id:"blank-html",icon:"🌐",name:"HTML Page",nameAr:"صفحة HTML",desc:"Empty HTML5 page",descAr:"صفحة HTML5 فارغة",files:[{name:"index.html",lang:"htmlmixed",code:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Page</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    h1 { color: teal; }
  </style>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>Start coding here...</p>
</body>
</html>`}]},{id:"html-css-js",icon:"📦",name:"HTML + CSS + JS",nameAr:"HTML + CSS + JS",desc:"Multi-file web project",descAr:"مشروع ويب متعدد الملفات",files:[{name:"index.html",lang:"htmlmixed",code:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Project</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1 id="title">Hello!</h1>
    <button id="btn">Click me</button>
    <p id="output"></p>
  </div>
  <script src="script.js"><\/script>
</body>
</html>`},{name:"style.css",lang:"css",code:`* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #0f172a;
  color: #e2e8f0;
}
.container {
  text-align: center;
  padding: 40px;
}
h1 { color: #22c55e; margin-bottom: 20px; }
button {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  background: #22c55e;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
}
button:hover { filter: brightness(1.15); }
#output { margin-top: 16px; color: #94a3b8; }`},{name:"script.js",lang:"javascript",code:`let count = 0;
const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
  count++;
  output.textContent = \`Clicked \${count} time\${count > 1 ? "s" : ""}!\`;
});`}]},{id:"js-console",icon:"📜",name:"JavaScript",nameAr:"جافاسكربت",desc:"Console-only JS",descAr:"جافاسكربت بالـ console فقط",files:[{name:"main.js",lang:"javascript",code:`// JavaScript Playground
console.log("Hello from IQ.T3ani! 🚀");

const greet = (name) => \`Welcome, \${name}!\`;
console.log(greet("Sara"));

for (let i = 1; i <= 5; i++) {
  console.log(\`Count: \${i}\`);
}`}]},{id:"python",icon:"🐍",name:"Python",nameAr:"بايثون",desc:"Python with Skulpt",descAr:"بايثون مع Skulpt",files:[{name:"main.py",lang:"python",code:`# Python Playground
print("Hello from IQ.T3ani! 🐍")

def greet(name):
    return f"Welcome, {name}!"

print(greet("Sara"))

for i in range(1, 6):
    print(f"Count: {i}")`}]},{id:"landing",icon:"🎨",name:"Landing Page",nameAr:"صفحة هبوط",desc:"Beautiful landing page",descAr:"صفحة هبوط جميلة",files:[{name:"index.html",lang:"htmlmixed",code:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #e2e8f0; }
    .hero { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px; }
    h1 { font-size: 3rem; background: linear-gradient(135deg, #22c55e, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 16px; }
    p { color: #94a3b8; font-size: 1.2rem; max-width: 500px; line-height: 1.6; }
    .btn { margin-top: 24px; padding: 14px 32px; border: none; border-radius: 10px; background: #22c55e; color: #fff; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: transform .2s; }
    .btn:hover { transform: scale(1.05); }
  </style>
</head>
<body>
  <div class="hero">
    <h1>Build Something Amazing</h1>
    <p>Start your coding journey today with interactive lessons and real projects.</p>
    <button class="btn">Get Started</button>
  </div>
</body>
</html>`}]},{id:"calculator",icon:"🧮",name:"Calculator",nameAr:"آلة حاسبة",desc:"Interactive calculator",descAr:"آلة حاسبة تفاعلية",files:[{name:"index.html",lang:"htmlmixed",code:`<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Calc</title>
<style>
* { margin:0; box-sizing:border-box; }
body { display:flex; justify-content:center; align-items:center; min-height:100vh; background:#1e293b; font-family:system-ui; }
.calc { background:#0f172a; border-radius:16px; padding:20px; width:280px; box-shadow:0 8px 32px rgba(0,0,0,.4); }
.display { background:#1e293b; color:#e2e8f0; font-size:2rem; text-align:right; padding:16px; border-radius:10px; margin-bottom:12px; min-height:60px; word-break:break-all; }
.grid { display:grid; grid-template-columns:repeat(4,1fr); gap:8px; }
.grid button { padding:14px; border:none; border-radius:10px; font-size:1.1rem; cursor:pointer; background:#334155; color:#e2e8f0; transition:background .15s; }
.grid button:hover { background:#475569; }
.grid .op { background:#22c55e; color:#fff; }
.grid .op:hover { background:#16a34a; }
.grid .eq { grid-column:span 2; background:#06b6d4; color:#fff; }
</style></head><body>
<div class="calc">
  <div class="display" id="d">0</div>
  <div class="grid">
    <button onclick="cl()">C</button><button onclick="del()">&larr;</button><button onclick="ap('%')">%</button><button class="op" onclick="ap('/')">/</button>
    <button onclick="ap('7')">7</button><button onclick="ap('8')">8</button><button onclick="ap('9')">9</button><button class="op" onclick="ap('*')">x</button>
    <button onclick="ap('4')">4</button><button onclick="ap('5')">5</button><button onclick="ap('6')">6</button><button class="op" onclick="ap('-')">-</button>
    <button onclick="ap('1')">1</button><button onclick="ap('2')">2</button><button onclick="ap('3')">3</button><button class="op" onclick="ap('+')">+</button>
    <button onclick="ap('0')">0</button><button onclick="ap('.')">.</button><button class="eq" onclick="ev()">=</button>
  </div>
</div>
<script>
let s="0";const d=document.getElementById("d");
function up(){d.textContent=s||"0"}
function ap(c){if(s==="0"&&c!==".")s=c;else s+=c;up()}
function cl(){s="0";up()}
function del(){s=s.slice(0,-1)||"0";up()}
function ev(){try{s=String(eval(s))}catch(e){s="Error"}up()}
<\/script>
</body></html>`}]}],a={files:[],activeIdx:0,split:"horizontal",outTab:"preview"},T={htmlmixed:{ext:"html",icon:"🌐",label:"HTML"},css:{ext:"css",icon:"🎨",label:"CSS"},javascript:{ext:"js",icon:"📜",label:"JS"},python:{ext:"py",icon:"🐍",label:"Python"}};function W(e){var n=e.split(".").pop().toLowerCase();return n==="html"||n==="htm"?"htmlmixed":n==="css"?"css":n==="js"?"javascript":n==="py"?"python":"javascript"}function F(e){return(T[e]||{}).icon||"📄"}var v,A,b,d,g,x,S,p;function z(){var e=document.getElementById("ideWrap");if(e){v=u(".ide-tabs",e),A=u(".ide-cm-wrap",e),b=u(".ide-preview",e),d=u(".ide-console",e),g=u(".ide-console-input input",e),x=u(".ide-status-cur",e),S=u(".ide-status-lang",e),p=u(".ide-tpl-overlay");var n=!1;try{var t=localStorage.getItem("iqt_ide_project");if(t){var o=JSON.parse(t);o&&o.files&&o.files.length&&(o.files.forEach(function(r){w(r.name,r.lang,r.code,!0)}),n=!0)}}catch(r){}n||P("blank-html"),f(".ide-tbtn",e).forEach(function(r){var i=r.getAttribute("data-action");i&&r.addEventListener("click",function(){h[i]&&h[i]()})});var c=u(".ide-tab-add",e);c&&c.addEventListener("click",function(){w("untitled.js","javascript",`// new file
`),y(a.files.length-1)}),f(".ide-out-tab",e).forEach(function(r){r.addEventListener("click",function(){a.outTab=r.getAttribute("data-out"),f(".ide-out-tab",e).forEach(function(i){i.classList.toggle("active",i===r)}),b.classList.toggle("hidden",a.outTab!=="preview"),d.classList.toggle("hidden",a.outTab!=="console"),g&&g.parentNode&&(g.parentNode.style.display=a.outTab==="console"?"":"none")})}),g&&g.addEventListener("keydown",function(r){if(r.key==="Enter"){var i=g.value.trim();if(!i)return;l("> "+i,"info");try{var s=new Function("return ("+i+")")();l(String(s))}catch(k){l(String(k),"error")}g.value=""}}),p&&(O(),p.addEventListener("click",function(r){r.target===p&&p.classList.remove("open")})),document.addEventListener("keydown",function(r){(r.ctrlKey||r.metaKey)&&r.key==="s"&&(r.preventDefault(),h.save()),(r.ctrlKey||r.metaKey)&&r.key==="Enter"&&(r.preventDefault(),h.run())}),y(0)}}function w(e,n,t,o){var c=a.files.length,r=null,i=document.createElement("div");i.style.display="none",i.style.height="100%",A.appendChild(i),a.files.push({name:e,lang:n,code:t,cmDiv:i,cm:null});var s=document.createElement("button");if(s.className="ide-tab",s.innerHTML='<span class="tab-icon">'+F(n)+"</span>"+e,a.files.length>1){var k=document.createElement("span");k.className="tab-close",k.textContent="×",k.addEventListener("click",function(q){q.stopPropagation(),I(c)}),s.appendChild(k)}s.addEventListener("click",function(){y(c)});var D=v.querySelector(".ide-tab-add");D?v.insertBefore(s,D):v.appendChild(s),o||y(c)}function y(e){if(!(e<0||e>=a.files.length)){a.activeIdx=e;var n=a.files[e];!n.cm&&window.CodeMirror&&(n.cm=CodeMirror(n.cmDiv,{value:n.code,mode:n.lang,theme:L.getAttribute("data-theme")==="dark"?"material-darker":"default",lineNumbers:!0,lineWrapping:!1,matchBrackets:!0,autoCloseBrackets:!0,autoCloseTags:n.lang==="htmlmixed",indentUnit:2,tabSize:2,indentWithTabs:!1,extraKeys:{Tab:function(o){o.somethingSelected()?o.indentSelection("add"):o.replaceSelection("  ","end")},"Ctrl-Enter":function(){h.run()},"Cmd-Enter":function(){h.run()},"Ctrl-S":function(){h.save()},"Cmd-S":function(){h.save()}}}),n.cm.on("change",function(){n.code=n.cm.getValue(),j()})),a.files.forEach(function(o,c){o.cmDiv.style.display=c===e?"":"none",c===e&&o.cm&&o.cm.refresh()});var t=f(".ide-tab",v);t.forEach(function(o,c){o.classList.toggle("active",c===e)}),j()}}function I(e){if(!(a.files.length<=1)){var n=a.files[e];n.cm&&n.cm.toTextArea(),n.cmDiv.parentNode&&n.cmDiv.parentNode.removeChild(n.cmDiv),a.files.splice(e,1);var t=f(".ide-tab",v);t[e]&&t[e].remove(),a.activeIdx>=a.files.length&&(a.activeIdx=a.files.length-1),y(a.activeIdx)}}function j(){var e=a.files[a.activeIdx];if(e&&(S&&(S.textContent=(T[e.lang]||{}).label||e.lang),x&&e.cm)){var n=e.cm.getCursor();x.textContent="Ln "+(n.line+1)+", Col "+(n.ch+1)}}function l(e,n){if(d){var t=document.createElement("div");t.className="log-line"+(n?" "+n:""),t.textContent=e,d.appendChild(t),d.scrollTop=d.scrollHeight}}function E(){d&&(d.innerHTML="")}function _(){E();var e=a.files.filter(function(i){return i.lang==="htmlmixed"}),n=a.files.filter(function(i){return i.lang==="css"}),t=a.files.filter(function(i){return i.lang==="javascript"}),o=a.files.filter(function(i){return i.lang==="python"});if(o.length&&!e.length&&!t.length){B(o[0].code),a.outTab="console",f(".ide-out-tab").forEach(function(i){i.classList.toggle("active",i.getAttribute("data-out")==="console")}),b.classList.add("hidden"),d.classList.remove("hidden");return}if(t.length&&!e.length){H(t[0].code),a.outTab="console",f(".ide-out-tab").forEach(function(i){i.classList.toggle("active",i.getAttribute("data-out")==="console")}),b.classList.add("hidden"),d.classList.remove("hidden");return}if(e.length){var c=e[0].code;n.forEach(function(i){var s='<link rel="stylesheet" href="'+i.name+'">';c.indexOf(s)>-1||c.indexOf(i.name)>-1?c=c.replace(new RegExp(`<link[^>]*href=["']`+i.name.replace(".","\\.")+`["'][^>]*>`,"g"),"<style>"+i.code+"</style>"):c=c.replace("</head>","<style>"+i.code+`</style>
</head>`)}),t.forEach(function(i){var s='<script src="'+i.name+'"><\/script>';c.indexOf(i.name)>-1?c=c.replace(new RegExp(`<script[^>]*src=["']`+i.name.replace(".","\\.")+`["'][^>]*>\\s*<\\/script>`,"g"),"<script>"+i.code+"<\/script>"):c=c.replace("</body>","<script>"+i.code+`<\/script>
</body>`)});var r='<script>(function(){function _c(a,t){try{window.parent.postMessage({__ide:1,m:a,t:t||""},"*")}catch(e){}}var orig=console.log;console.log=function(){var a=Array.prototype.slice.call(arguments).map(String).join(" ");_c(a);orig.apply(console,arguments)};console.error=function(){var a=Array.prototype.slice.call(arguments).map(String).join(" ");_c(a,"error");};console.warn=function(){var a=Array.prototype.slice.call(arguments).map(String).join(" ");_c(a,"warn");};window.onerror=function(m){_c(m,"error")};})();<\/script>';c=c.replace("<head>","<head>"+r),(window.__ideMsgBound||(window.__ideMsgBound=1,window.addEventListener("message",function(e){if(e&&e.data&&e.data.__ide)l(e.data.m,e.data.t)}))),b.srcdoc=c,a.outTab="preview",f(".ide-out-tab").forEach(function(i){i.classList.toggle("active",i.getAttribute("data-out")==="preview")}),b.classList.remove("hidden"),d.classList.remove("hidden"),l("▶ "+(m()?"تم التشغيل":"Running..."),"system")}}function H(e){var n=[],t={log:function(){var o=Array.prototype.slice.call(arguments).map(String).join(" ");l(o)},error:function(){var o=Array.prototype.slice.call(arguments).map(String).join(" ");l(o,"error")},warn:function(){var o=Array.prototype.slice.call(arguments).map(String).join(" ");l(o,"warn")},info:function(){var o=Array.prototype.slice.call(arguments).map(String).join(" ");l(o,"info")}};l("▶ "+(m()?"تشغيل JavaScript":"Running JavaScript..."),"system");try{new Function("console",e)(t)}catch(o){l(String(o),"error")}}function B(e){if(l("▶ "+(m()?"تشغيل Python":"Running Python..."),"system"),!window.Sk||!Sk.importMainWithBody){l("Skulpt not loaded — Python requires Skulpt.","error");return}Sk.configure({output:function(n){l(n.replace(/\n$/,""))},read:function(n){if(Sk.builtinFiles===void 0||Sk.builtinFiles.files[n]===void 0)throw"File not found: '"+n+"'";return Sk.builtinFiles.files[n]},__future__:Sk.python3}),Sk.misceval.asyncToPromise(function(){return Sk.importMainWithBody("<stdin>",!1,e,!0)}).then(function(){l("✅ "+(m()?"انتهى التنفيذ":"Execution complete"),"system")}).catch(function(n){l(String(n),"error")})}function J(){var e={files:a.files.map(function(n){return{name:n.name,lang:n.lang,code:n.cm?n.cm.getValue():n.code}})};try{localStorage.setItem("iqt_ide_project",JSON.stringify(e))}catch(n){}l("💾 "+(m()?"تم الحفظ":"Saved!"),"system")}function N(){if(!window.JSZip){var e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js",e.onload=function(){M()},document.head.appendChild(e),l("📦 "+(m()?"جاري التحميل...":"Loading JSZip..."),"system");return}M()}function M(){var e=new JSZip;a.files.forEach(function(n){e.file(n.name,n.cm?n.cm.getValue():n.code)}),e.generateAsync({type:"blob"}).then(function(n){var t=document.createElement("a");t.href=URL.createObjectURL(n),t.download="project.zip",t.click(),l("📦 "+(m()?"تم التحميل":"Downloaded!"),"system")})}function P(e){var n=C.find(function(t){return t.id===e});n&&(a.files.forEach(function(t){if(t.cm)try{t.cm.toTextArea()}catch(o){}t.cmDiv&&t.cmDiv.parentNode&&t.cmDiv.parentNode.removeChild(t.cmDiv)}),a.files=[],f(".ide-tab",v).forEach(function(t){t.remove()}),n.files.forEach(function(t){w(t.name,t.lang,t.code,!0)}),y(0),p&&p.classList.remove("open"),E(),l("📋 "+(m()?"تم تحميل القالب: "+n.nameAr:"Template loaded: "+n.name),"system"))}function O(){var e=p.querySelector(".ide-tpl-list");e&&(e.innerHTML="",C.forEach(function(n){var t=document.createElement("div");t.className="ide-tpl-card",t.innerHTML='<span class="tpl-icon">'+n.icon+'</span><div class="tpl-name" data-ar="'+n.nameAr+'">'+n.name+'</div><div class="tpl-desc" data-ar="'+n.descAr+'">'+n.desc+"</div>",t.addEventListener("click",function(){P(n.id)}),e.appendChild(t)}))}var h={run:_,save:J,download:N,clear:E,templates:function(){p&&p.classList.add("open")},split:function(){var e=u(".ide-main");e&&(a.split=a.split==="horizontal"?"vertical":"horizontal",e.classList.toggle("vertical",a.split==="vertical"))},format:function(){var e=a.files[a.activeIdx];if(e&&e.cm){for(var n=e.cm.lineCount(),t=0;t<n;t++)e.cm.indentLine(t,"smart");l("✨ "+(m()?"تم التنسيق":"Formatted!"),"system")}}};document.addEventListener("DOMContentLoaded",z)})();
