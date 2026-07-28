window.COURSES={python:{title:{en:"Python — from zero",ar:"بايثون — من الصفر"},subtitle:{en:"Python Fundamentals — Zero to Hero",ar:"أساسيات بايثون — من الصفر للاحتراف"},icon:"🐍",level:{en:"Beginner",ar:"مبتدئ"},run:"python",duration:{en:"3 hours",ar:"3 ساعات"},requirements:{en:"No prior experience needed — just a browser!",ar:"لا تحتاج أي خبرة سابقة — فقط متصفح!"},whatYouLearn:{en:["Write Python code from scratch","Variables, data types & operators","Conditions and loops","Functions and error handling","Lists and dictionaries"],ar:["كتابة كود بايثون من الصفر","المتغيرات وأنواع البيانات والعمليات","الشروط والحلقات","الدوال ومعالجة الأخطاء","القوائم والقواميس"]},lessons:[{t:{en:"Introduction",ar:"مقدمة"},body:{en:"<p>Python is an easy-to-read, powerful language used for web, data, and AI. Your first command is <code>print()</code>, which shows text on screen.</p>",ar:"<p>بايثون لغة سهلة القراءة وقوية، تُستخدم في الويب والبيانات والذكاء الاصطناعي. أول أمر هو <code>print()</code> اللي بيطبع نص على الشاشة.</p>"},code:`print("Hello, World!")
print("I am learning Python 🐍")`,notes:{en:"<b>Key points:</b> Python was created by Guido van Rossum in 1991. It is used by Google, Netflix, NASA, and many more. <code>print()</code> is the first function every Python developer learns.",ar:"<b>النقاط الرئيسية:</b> بايثون أنشأها Guido van Rossum عام 1991. تُستخدم من Google وNetflix وNASA وغيرها. <code>print()</code> هي أول دالة يتعلمها كل مطور بايثون."},resources:[{label:"Python.org",labelAr:"موقع بايثون الرسمي",url:"https://python.org",icon:"🐍"},{label:"Python Docs",labelAr:"توثيق بايثون",url:"https://docs.python.org/3/",icon:"📖"}]},{t:{en:"Variables & types",ar:"المتغيرات والأنواع"},body:{en:'<p>A variable stores a value: <code>name = "Sara"</code>. Types: str (text), int (whole), float (decimal), bool (True/False).</p>',ar:'<p>المتغيّر بيخزّن قيمة: <code>name = "Sara"</code>. الأنواع: نص str، عدد صحيح int، عدد عشري float، ومنطقي bool.</p>'},code:`name = "Sara"
age = 20
print(name)
print(f"My name is {name} and I am {age}")`},{t:{en:"Input & output",ar:"المدخلات والمخرجات"},body:{en:"<p>Output uses <code>print()</code>; input uses <code>input()</code>. Use f-strings to insert values into text.</p>",ar:"<p>المخرجات بـ <code>print()</code> والمدخلات بـ <code>input()</code>. استخدم f-strings لإدخال القيم داخل النص.</p>"},code:`city = "Amman"
country = "Jordan"
print(f"Welcome to {city}, {country}! 🌍")`},{t:{en:"Operators",ar:"العمليات الحسابية"},body:{en:"<p>Math operators: <code>+ - * /</code>, remainder <code>%</code>, and power <code>**</code>.</p>",ar:"<p>العمليات: <code>+ - * /</code>، الباقي <code>%</code>، والأس <code>**</code>.</p>"},code:`print(10 + 3)
print(10 / 3)
print(10 % 3)
print(2 ** 8)`},{t:{en:"Conditions",ar:"الشروط"},body:{en:"<p><code>if / elif / else</code> let the program decide. The indented block runs when the condition is true. Change <code>age</code> and run again.</p>",ar:"<p><code>if / elif / else</code> بتخلّي البرنامج ياخد قرار. الكود المُزاح بينفّذ إذا الشرط صحيح. غيّر <code>age</code> وشغّل.</p>"},code:`age = 18
if age >= 18:
    print("You are an adult ✅")
elif age >= 13:
    print("Teenager")
else:
    print("Child")`},{t:{en:"Loops",ar:"الحلقات"},body:{en:"<p><code>for</code> repeats over values; <code>range(n)</code> gives 0..n-1. <code>while</code> repeats while a condition is true.</p>",ar:"<p><code>for</code> بتكرّر على قيم، و<code>range(n)</code> بتعطي 0..n-1. و<code>while</code> بتكرّر طالما الشرط صحيح.</p>"},code:`for i in range(1, 6):
    print("Number", i)

count = 3
while count > 0:
    print("Countdown:", count)
    count = count - 1
print("Go! 🚀")`},{t:{en:"Functions",ar:"الدوال"},body:{en:"<p>A function is reusable code. Define with <code>def</code>, return a value with <code>return</code>.</p>",ar:"<p>الدالة كود قابل لإعادة الاستخدام. عرّفها بـ <code>def</code> وأرجِع قيمة بـ <code>return</code>.</p>"},code:`def greet(name):
    return "Hello, " + name + "!"

def add(a, b):
    return a + b

print(greet("Sara"))
print(add(7, 5))`},{t:{en:"Lists & dicts",ar:"القوائم والقواميس"},body:{en:'<p>A list holds ordered values <code>[1,2,3]</code>. A dict holds key:value pairs <code>{"name":"Sara"}</code>.</p>',ar:'<p>القائمة بتخزّن قيم مرتّبة <code>[1,2,3]</code>. القاموس بيخزّن مفتاح:قيمة <code>{"name":"Sara"}</code>.</p>'},code:`fruits = ["apple", "banana", "cherry"]
print(fruits[0])
print(len(fruits))
for f in fruits:
    print("I like", f)

person = {"name": "Sara", "age": 20}
print(person["name"])`},{t:{en:"Error handling",ar:"معالجة الأخطاء"},body:{en:"<p>Use <code>try / except</code> to catch errors and keep the program running.</p>",ar:"<p>استخدم <code>try / except</code> عشان تمسك الأخطاء ويكمّل البرنامج.</p>"},code:`try:
    result = 10 / 0
    print(result)
except ZeroDivisionError:
    print("You can't divide by zero! ⚠️")

print("The program keeps running ✅")`},{t:{en:"Final project",ar:"المشروع النهائي"},body:{en:"<p>Combine everything into a calculator. 🏆 Finish it and get your certificate.</p>",ar:"<p>اجمع كل شي بآلة حاسبة. 🏆 خلّصها واحصل على شهادتك.</p>",cert:!0},code:`def calc(a, b, op):
    if op == "+": return a + b
    if op == "-": return a - b
    if op == "*": return a * b
    if op == "/": return a / b
    return "Unknown"

print("5 + 3 =", calc(5, 3, "+"))
print("6 * 7 =", calc(6, 7, "*"))
print("20 / 5 =", calc(20, 5, "/"))`}]},javascript:{title:{en:"JavaScript — from zero",ar:"جافاسكربت — من الصفر"},subtitle:{en:"JavaScript — Zero to Hero",ar:"جافاسكربت — من الصفر للاحتراف"},icon:"📜",level:{en:"Beginner",ar:"مبتدئ"},run:"js",lessons:[{t:{en:"Introduction",ar:"مقدمة"},body:{en:"<p>JavaScript makes web pages interactive. <code>console.log()</code> prints to the console. Press Run to see it.</p>",ar:"<p>جافاسكربت بتخلّي صفحات الويب تفاعلية. <code>console.log()</code> بتطبع للـ console. اضغط شغّل.</p>"},code:`console.log("Hello, World!");
console.log("I am learning JavaScript ⚡");`},{t:{en:"Variables & types",ar:"المتغيرات والأنواع"},body:{en:"<p>Declare with <code>let</code> (changeable) or <code>const</code> (fixed). Types: string, number, boolean.</p>",ar:"<p>عرّف بـ <code>let</code> (قابل للتغيير) أو <code>const</code> (ثابت). الأنواع: نص، رقم، منطقي.</p>"},code:'let name = "Sara";\nconst age = 20;\nconsole.log(name);\nconsole.log(`My name is ${name} and I am ${age}`);'},{t:{en:"Operators",ar:"العمليات"},body:{en:"<p>Math: <code>+ - * / %</code> and power <code>**</code>. <code>+</code> also joins strings.</p>",ar:"<p>حساب: <code>+ - * / %</code> والأس <code>**</code>. <code>+</code> بتوصل النصوص كمان.</p>"},code:`console.log(10 + 3);
console.log(10 % 3);
console.log(2 ** 8);
console.log("Iraq" + " " + "Tech");`},{t:{en:"Conditions",ar:"الشروط"},body:{en:"<p><code>if / else if / else</code> make decisions. Compare with <code>=== &gt; &lt; &gt;=</code>.</p>",ar:"<p><code>if / else if / else</code> بتاخد قرارات. قارن بـ <code>=== &gt; &lt; &gt;=</code>.</p>"},code:`let age = 18;
if (age >= 18) {
  console.log("Adult ✅");
} else {
  console.log("Minor");
}`},{t:{en:"Loops",ar:"الحلقات"},body:{en:"<p><code>for</code> repeats a fixed number of times; <code>while</code> repeats while true.</p>",ar:"<p><code>for</code> بتكرّر عدد ثابت، و<code>while</code> بتكرّر طالما الشرط صحيح.</p>"},code:`for (let i = 1; i <= 5; i++) {
  console.log("Number " + i);
}`},{t:{en:"Functions",ar:"الدوال"},body:{en:"<p>Reusable code. Use <code>function</code> or an arrow <code>=&gt;</code>. Return a value with <code>return</code>.</p>",ar:"<p>كود قابل لإعادة الاستخدام. استخدم <code>function</code> أو السهم <code>=&gt;</code>. أرجِع قيمة بـ <code>return</code>.</p>"},code:`function greet(name) {
  return "Hello, " + name + "!";
}
const add = (a, b) => a + b;
console.log(greet("Sara"));
console.log(add(7, 5));`},{t:{en:"Arrays",ar:"المصفوفات"},body:{en:"<p>An array holds a list: <code>[1,2,3]</code>. Access with index, loop with <code>forEach</code>.</p>",ar:"<p>المصفوفة بتخزّن قائمة: <code>[1,2,3]</code>. وصول بالفهرس، وتكرار بـ <code>forEach</code>.</p>"},code:`const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]);
console.log(fruits.length);
fruits.forEach(f => console.log("I like " + f));`},{t:{en:"Objects",ar:"الكائنات"},body:{en:'<p>An object groups key:value data: <code>{ name: "Sara" }</code>. Access with dot notation.</p>',ar:'<p>الكائن بيجمّع بيانات مفتاح:قيمة: <code>{ name: "Sara" }</code>. وصول بالنقطة.</p>'},code:'const person = { name: "Sara", age: 20 };\nconsole.log(person.name);\nconsole.log(`${person.name} is ${person.age}`);'},{t:{en:"Errors (try/catch)",ar:"الأخطاء"},body:{en:"<p>Catch errors with <code>try / catch</code> so the app keeps running.</p>",ar:"<p>امسك الأخطاء بـ <code>try / catch</code> عشان التطبيق يكمّل.</p>"},code:`try {
  let x = notDefined + 1;
} catch (e) {
  console.log("Caught an error ⚠️");
}
console.log("Still running ✅");`},{t:{en:"Final project",ar:"المشروع النهائي"},body:{en:"<p>A calculator function. 🏆 Finish and get your certificate.</p>",ar:"<p>دالة آلة حاسبة. 🏆 خلّص واحصل على شهادتك.</p>",cert:!0},code:`function calc(a, b, op) {
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
  if (op === "/") return a / b;
}
console.log("5 + 3 =", calc(5, 3, "+"));
console.log("6 * 7 =", calc(6, 7, "*"));`}]},web:{title:{en:"Web — HTML & CSS",ar:"الويب — HTML و CSS"},subtitle:{en:"Web Development from Scratch",ar:"تطوير الويب من الصفر"},icon:"🌐",level:{en:"Beginner",ar:"مبتدئ"},run:"html",lessons:[{t:{en:"What is HTML?",ar:"ما هي HTML؟"},body:{en:"<p>HTML is the structure of every web page, built from <b>tags</b> like <code>&lt;h1&gt;</code> and <code>&lt;p&gt;</code>. Press Run to render it live.</p>",ar:"<p>HTML هي هيكل أي صفحة ويب، مبنية من <b>وسوم</b> مثل <code>&lt;h1&gt;</code> و<code>&lt;p&gt;</code>. اضغط شغّل لتشوف النتيجة مباشرة.</p>"},code:`<h1>Hello, World!</h1>
<p>This is my first web page 🌍</p>`},{t:{en:"Headings & text",ar:"العناوين والنصوص"},body:{en:"<p>Headings go from <code>&lt;h1&gt;</code> (biggest) to <code>&lt;h6&gt;</code>. Paragraphs use <code>&lt;p&gt;</code>, bold uses <code>&lt;b&gt;</code>.</p>",ar:"<p>العناوين من <code>&lt;h1&gt;</code> (الأكبر) لـ <code>&lt;h6&gt;</code>. الفقرات <code>&lt;p&gt;</code>، والغامق <code>&lt;b&gt;</code>.</p>"},code:`<h1>Main title</h1>
<h2>Subtitle</h2>
<p>Normal text with a <b>bold</b> word.</p>`},{t:{en:"Links & images",ar:"الروابط والصور"},body:{en:"<p>Links use <code>&lt;a href&gt;</code>, images use <code>&lt;img src&gt;</code>.</p>",ar:"<p>الروابط <code>&lt;a href&gt;</code>، والصور <code>&lt;img src&gt;</code>.</p>"},code:`<a href="https://example.com">Visit a link</a>
<p>Emoji as image alt: 🖼️</p>`},{t:{en:"Lists",ar:"القوائم"},body:{en:"<p>Unordered lists use <code>&lt;ul&gt;&lt;li&gt;</code>, ordered lists use <code>&lt;ol&gt;</code>.</p>",ar:"<p>القوائم النقطية <code>&lt;ul&gt;&lt;li&gt;</code>، والمرقّمة <code>&lt;ol&gt;</code>.</p>"},code:`<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>`},{t:{en:"Intro to CSS",ar:"مقدمة CSS"},body:{en:"<p>CSS styles HTML — colors, sizes, spacing. Add a <code>&lt;style&gt;</code> block and target elements.</p>",ar:"<p>CSS بتنسّق HTML — ألوان وأحجام ومسافات. ضِف <code>&lt;style&gt;</code> واستهدف العناصر.</p>"},code:`<style>
  h1 { color: teal; }
  p { color: gray; }
</style>
<h1>Styled title</h1>
<p>Styled paragraph.</p>`},{t:{en:"Colors & backgrounds",ar:"الألوان والخلفيات"},body:{en:"<p>Use <code>color</code> for text and <code>background</code> for the box behind it.</p>",ar:"<p>استخدم <code>color</code> للنص و<code>background</code> للخلفية.</p>"},code:`<div style="background:teal;color:white;padding:20px;border-radius:10px">
  <h2>A colored box</h2>
</div>`},{t:{en:"The box model",ar:"نموذج الصندوق"},body:{en:"<p>Every element is a box with <code>padding</code> (inside), <code>border</code>, and <code>margin</code> (outside).</p>",ar:"<p>كل عنصر صندوق فيه <code>padding</code> (داخلي) و<code>border</code> و<code>margin</code> (خارجي).</p>"},code:`<div style="border:3px solid teal;padding:16px;margin:10px;border-radius:10px">
  Box with padding, border & margin
</div>`},{t:{en:"Buttons & layout",ar:"الأزرار والتخطيط"},body:{en:"<p>Combine tags and CSS to build UI. <code>flex</code> aligns items in a row.</p>",ar:"<p>اجمع الوسوم و CSS لبناء واجهة. <code>flex</code> بترتّب العناصر بصف.</p>"},code:`<div style="display:flex;gap:10px">
  <button style="padding:10px 16px;border-radius:8px;background:teal;color:#fff;border:0">One</button>
  <button style="padding:10px 16px;border-radius:8px;background:#eee;border:0">Two</button>
</div>`},{t:{en:"A simple card",ar:"بطاقة بسيطة"},body:{en:"<p>Put it together into a real UI card.</p>",ar:"<p>اجمعها ببطاقة واجهة حقيقية.</p>"},code:`<div style="max-width:260px;border:1px solid #ddd;border-radius:14px;overflow:hidden;font-family:sans-serif">
  <div style="background:teal;height:80px"></div>
  <div style="padding:16px">
    <h3 style="margin:0 0 6px">Course card</h3>
    <p style="margin:0;color:#666">Built with HTML & CSS 🎨</p>
  </div>
</div>`},{t:{en:"Final project",ar:"المشروع النهائي"},body:{en:"<p>Build a mini profile page. 🏆 Finish and get your certificate.</p>",ar:"<p>ابنِ صفحة تعريف صغيرة. 🏆 خلّص واحصل على شهادتك.</p>",cert:!0},code:`<div style="font-family:sans-serif;text-align:center;padding:24px;border:1px solid #ddd;border-radius:16px;max-width:300px;margin:auto">
  <div style="width:70px;height:70px;border-radius:50%;background:teal;margin:auto"></div>
  <h2>Sara Dev</h2>
  <p style="color:#666">Front-end learner at IQ.T3ani</p>
  <button style="padding:10px 18px;border:0;border-radius:999px;background:teal;color:#fff">Follow</button>
</div>`}]},sql:{title:{en:"SQL — from zero",ar:"SQL — من الصفر"},subtitle:{en:"SQL & Databases from Scratch",ar:"SQL وقواعد البيانات من الصفر"},icon:"🗄️",level:{en:"Beginner",ar:"مبتدئ"},run:"none",lessons:[{t:{en:"What is SQL?",ar:"ما هي SQL؟"},body:{en:"<p>SQL is the language for talking to databases — tables made of rows and columns.</p>",ar:"<p>SQL هي لغة التخاطب مع قواعد البيانات — جداول من صفوف وأعمدة.</p>"},code:`-- A "users" table:
-- id | name  | age
-- 1  | Sara  | 20
-- 2  | Omar  | 25`},{t:{en:"SELECT",ar:"SELECT"},body:{en:"<p><code>SELECT</code> reads data. <code>*</code> means all columns.</p>",ar:"<p><code>SELECT</code> بتقرأ البيانات. <code>*</code> يعني كل الأعمدة.</p>"},code:`SELECT * FROM users;
SELECT name, age FROM users;`},{t:{en:"WHERE",ar:"WHERE"},body:{en:"<p><code>WHERE</code> filters rows by a condition.</p>",ar:"<p><code>WHERE</code> بتفلتر الصفوف حسب شرط.</p>"},code:`SELECT name FROM users
WHERE age >= 21;`},{t:{en:"INSERT",ar:"INSERT"},body:{en:"<p><code>INSERT</code> adds a new row.</p>",ar:"<p><code>INSERT</code> بتضيف صف جديد.</p>"},code:`INSERT INTO users (name, age)
VALUES ('Lina', 22);`},{t:{en:"JOIN + project",ar:"JOIN + المشروع"},body:{en:"<p><code>JOIN</code> combines two tables by a shared column. 🏆 Then get your certificate.</p>",ar:"<p><code>JOIN</code> بتدمج جدولين بعمود مشترك. 🏆 وبعدها احصل على شهادتك.</p>",cert:!0},code:`SELECT users.name, orders.total
FROM users
JOIN orders ON orders.user_id = users.id;`}]},react:{title:{en:"React — from zero",ar:"React — من الصفر"},subtitle:{en:"React for Beginners",ar:"React للمبتدئين"},icon:"⚛️",level:{en:"Intermediate",ar:"متوسط"},run:"none",lessons:[{t:{en:"What is React?",ar:"ما هي React؟"},body:{en:"<p>React is a JavaScript library for building user interfaces from reusable <b>components</b>.</p>",ar:"<p>React مكتبة جافاسكربت لبناء واجهات من <b>مكوّنات</b> قابلة لإعادة الاستخدام.</p>"},code:`function App() {
  return <h1>Hello, React!</h1>;
}`},{t:{en:"Components",ar:"المكوّنات"},body:{en:"<p>A component is a function that returns UI (JSX).</p>",ar:"<p>المكوّن دالة بترجع واجهة (JSX).</p>"},code:`function Welcome() {
  return <p>Welcome to IQ.T3ani 👋</p>;
}`},{t:{en:"Props",ar:"الخصائص (Props)"},body:{en:"<p>Props pass data into a component.</p>",ar:"<p>الـ props بتمرّر بيانات للمكوّن.</p>"},code:`function Hello(props) {
  return <h2>Hello, {props.name}!</h2>;
}
// <Hello name="Sara" />`},{t:{en:"State",ar:"الحالة (State)"},body:{en:"<p><code>useState</code> stores changing data, like a counter.</p>",ar:"<p><code>useState</code> بتخزّن بيانات متغيّرة، مثل عدّاد.</p>"},code:`const [count, setCount] = useState(0);
// <button onClick={() => setCount(count + 1)}>{count}</button>`},{t:{en:"Project",ar:"المشروع"},body:{en:"<p>Combine components + state into a counter app. 🏆 Then get your certificate.</p>",ar:"<p>اجمع المكوّنات والحالة بتطبيق عدّاد. 🏆 وبعدها احصل على شهادتك.</p>",cert:!0},code:`function Counter() {
  const [n, setN] = useState(0);
  return (
    <button onClick={() => setN(n + 1)}>
      Clicked {n} times
    </button>
  );
}`}]},node:{title:{en:"Node.js — from zero",ar:"Node.js — من الصفر"},subtitle:{en:"Node.js & APIs from Scratch",ar:"Node.js والـ APIs من الصفر"},icon:"🟢",level:{en:"Intermediate",ar:"متوسط"},run:"js",lessons:[{t:{en:"What is Node.js?",ar:"ما هي Node.js؟"},body:{en:"<p>Node.js runs JavaScript outside the browser — on the server. Same language, everywhere.</p>",ar:"<p>Node.js بتشغّل جافاسكربت خارج المتصفح — على السيرفر. نفس اللغة بكل مكان.</p>"},code:'console.log("Node.js is running 🟢");'},{t:{en:"Functions & modules",ar:"الدوال والوحدات"},body:{en:"<p>Split code into functions and modules you can reuse.</p>",ar:"<p>قسّم الكود لدوال ووحدات قابلة لإعادة الاستخدام.</p>"},code:`function add(a, b) { return a + b; }
console.log("2 + 5 =", add(2, 5));`},{t:{en:"Working with JSON",ar:"التعامل مع JSON"},body:{en:"<p>APIs speak JSON — a simple data format.</p>",ar:"<p>الـ APIs بتتكلّم JSON — صيغة بيانات بسيطة.</p>"},code:`const user = { name: "Sara", age: 20 };
const text = JSON.stringify(user);
console.log(text);
console.log(JSON.parse(text).name);`},{t:{en:"A tiny API idea",ar:"فكرة API بسيطة"},body:{en:"<p>An API returns data for a request. Here we simulate it.</p>",ar:"<p>الـ API بترجع بيانات لكل طلب. هون بنحاكيها.</p>"},code:`function getUser(id) {
  const db = { 1: "Sara", 2: "Omar" };
  return { id: id, name: db[id] };
}
console.log(getUser(1));`},{t:{en:"Project",ar:"المشروع"},body:{en:"<p>A mini user service. 🏆 Then get your certificate.</p>",ar:"<p>خدمة مستخدمين مصغّرة. 🏆 وبعدها احصل على شهادتك.</p>",cert:!0},code:`const users = [{id:1,name:"Sara"},{id:2,name:"Omar"}];
function find(id) { return users.find(u => u.id === id); }
console.log(find(2));
console.log("Total users:", users.length);`}]},data:{title:{en:"Data — from zero",ar:"علم البيانات — من الصفر"},subtitle:{en:"Data Analysis with Python",ar:"تحليل البيانات ببايثون"},icon:"📊",level:{en:"Intermediate",ar:"متوسط"},run:"python",lessons:[{t:{en:"Data as lists",ar:"البيانات كقوائم"},body:{en:"<p>We store data in lists of numbers, then analyze it.</p>",ar:"<p>بنخزّن البيانات بقوائم أرقام، وبعدها بنحلّلها.</p>"},code:`scores = [80, 92, 75, 88, 95]
print("Data:", scores)
print("Count:", len(scores))`},{t:{en:"Sum & average",ar:"المجموع والمتوسط"},body:{en:"<p><code>sum()</code> adds; divide by <code>len()</code> for the average.</p>",ar:"<p><code>sum()</code> بتجمع؛ اقسم على <code>len()</code> للمتوسط.</p>"},code:`scores = [80, 92, 75, 88, 95]
total = sum(scores)
average = total / len(scores)
print("Total:", total)
print("Average:", average)`},{t:{en:"Min & max",ar:"الأصغر والأكبر"},body:{en:"<p><code>min()</code> and <code>max()</code> find the extremes.</p>",ar:"<p><code>min()</code> و<code>max()</code> بتلاقي الأصغر والأكبر.</p>"},code:`scores = [80, 92, 75, 88, 95]
print("Highest:", max(scores))
print("Lowest:", min(scores))`},{t:{en:"Filtering",ar:"الفلترة"},body:{en:"<p>Keep only the values you want with a loop.</p>",ar:"<p>احتفظ بالقيم اللي بدك إياها بحلقة.</p>"},code:`scores = [80, 92, 75, 88, 95]
passed = [s for s in scores if s >= 85]
print("85+ scores:", passed)`},{t:{en:"Project",ar:"المشروع"},body:{en:"<p>A grade report. 🏆 Then get your certificate.</p>",ar:"<p>تقرير درجات. 🏆 وبعدها احصل على شهادتك.</p>",cert:!0},code:`scores = [80, 92, 75, 88, 95]
avg = sum(scores) / len(scores)
print("Average:", avg)
print("Best:", max(scores))
print("Above average:", [s for s in scores if s > avg])`}]},dsa:{title:{en:"Algorithms — from zero",ar:"الخوارزميات — من الصفر"},subtitle:{en:"Data Structures & Algorithms",ar:"هياكل البيانات والخوارزميات"},icon:"🧠",level:{en:"Advanced",ar:"متقدّم"},run:"python",lessons:[{t:{en:"Arrays",ar:"المصفوفات"},body:{en:"<p>An array (list) stores items you can access by index.</p>",ar:"<p>المصفوفة (قائمة) بتخزّن عناصر توصلها بالفهرس.</p>"},code:`nums = [5, 3, 8, 1, 9]
print(nums[0], nums[-1])
print("Length:", len(nums))`},{t:{en:"Linear search",ar:"البحث الخطي"},body:{en:"<p>Check each item until you find the target.</p>",ar:"<p>افحص كل عنصر لحد ما تلاقي المطلوب.</p>"},code:`nums = [5, 3, 8, 1, 9]
target = 8
for i in range(len(nums)):
    if nums[i] == target:
        print("Found at index", i)`},{t:{en:"Bubble sort",ar:"الترتيب الفقاعي"},body:{en:"<p>Repeatedly swap neighbors to sort a list.</p>",ar:"<p>بدّل الجيران بشكل متكرّر عشان ترتّب القائمة.</p>"},code:`nums = [5, 3, 8, 1]
for i in range(len(nums)):
    for j in range(len(nums) - 1 - i):
        if nums[j] > nums[j+1]:
            nums[j], nums[j+1] = nums[j+1], nums[j]
print(nums)`},{t:{en:"Recursion",ar:"الاستدعاء الذاتي"},body:{en:"<p>A function that calls itself — great for factorials.</p>",ar:"<p>دالة بتستدعي نفسها — ممتازة للمضروب (factorial).</p>"},code:`def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))`},{t:{en:"Project",ar:"المشروع"},body:{en:"<p>Find the max without max(). 🏆 Then get your certificate.</p>",ar:"<p>لاقِ الأكبر بدون max(). 🏆 وبعدها احصل على شهادتك.</p>",cert:!0},code:`nums = [5, 3, 8, 1, 9, 2]
biggest = nums[0]
for n in nums:
    if n > biggest:
        biggest = n
print("Max is", biggest)`}]},mobile:{title:{en:"Flutter — from zero",ar:"Flutter — من الصفر"},subtitle:{en:"Flutter Mobile Apps",ar:"تطبيقات موبايل بـ Flutter"},icon:"📱",level:{en:"Intermediate",ar:"متوسط"},run:"none",lessons:[{t:{en:"What is Flutter?",ar:"ما هي Flutter؟"},body:{en:"<p>Flutter builds Android & iOS apps from one codebase using the Dart language.</p>",ar:"<p>Flutter بتبني تطبيقات أندرويد وiOS من كود واحد بلغة Dart.</p>"},code:`void main() {
  print("Hello from Flutter 📱");
}`},{t:{en:"Widgets",ar:"الودجت (Widgets)"},body:{en:"<p>Everything in Flutter is a widget — text, buttons, layout.</p>",ar:"<p>كل شي في Flutter widget — نص، أزرار، تخطيط.</p>"},code:'Text("Welcome to IQ.T3ani")'},{t:{en:"Layout",ar:"التخطيط"},body:{en:"<p>Arrange widgets with Column (vertical) and Row (horizontal).</p>",ar:"<p>رتّب الودجت بـ Column (عمودي) وRow (أفقي).</p>"},code:`Column(
  children: [
    Text("Line 1"),
    Text("Line 2"),
  ],
)`},{t:{en:"Buttons",ar:"الأزرار"},body:{en:"<p>Buttons respond to taps with onPressed.</p>",ar:"<p>الأزرار بتستجيب للضغط بـ onPressed.</p>"},code:`ElevatedButton(
  onPressed: () => print("Tapped!"),
  child: Text("Tap me"),
)`},{t:{en:"Project",ar:"المشروع"},body:{en:"<p>A greeting screen. 🏆 Then get your certificate.</p>",ar:"<p>شاشة ترحيب. 🏆 وبعدها احصل على شهادتك.</p>",cert:!0},code:`Column(
  children: [
    Text("Hi, Sara!"),
    ElevatedButton(
      onPressed: () => print("Start"),
      child: Text("Start learning"),
    ),
  ],
)`}]}},(function(){var e={typescript:{name:"TypeScript",icon:"🔷",lessons:[{t:{en:"Introduction & first program",ar:"مقدمة وأول برنامج"},body:{en:"<p><b>TypeScript</b> is a popular, powerful programming language. This course takes you from zero to your first project — one small step at a time. Here is the classic first program:",ar:"<p><b>TypeScript</b> لغة برمجة مشهورة وقوية. هذا الكورس بياخدك من الصفر لأول مشروع، خطوة صغيرة كل مرة. هذا أول برنامج تقليدي:"},code:`let message: string = "Hello, World!";
console.log(message);`,sec:{en:"Basics",ar:"الأساسيات"}},{t:{en:"Printing output",ar:"طباعة المخرجات"},body:{en:"Printing text to the screen is how your program talks to you. Try changing the message.",ar:"طباعة النص على الشاشة هي طريقة برنامجك ليحكي معك. جرّب تغيّر الرسالة."},code:`console.log("Learning TypeScript!");
console.log("Line two");`},{t:{en:"Comments",ar:"التعليقات"},body:{en:"Comments are notes for humans — TypeScript ignores them when it runs your code. Use them to explain your thinking.",ar:"التعليقات ملاحظات للبشر، وTypeScript بتتجاهلها وقت التشغيل. استخدمها لتشرح فكرتك."},code:`// single-line comment
/* multi-line
   comment */
console.log("Comments are ignored");`},{t:{en:"Variables",ar:"المتغيرات"},body:{en:"A variable is a named box that stores a value you can reuse and change later.",ar:"المتغيّر صندوق له اسم بيخزّن قيمة تقدر تعيد استخدامها وتغيّرها لاحقاً."},code:`let name: string = "Sara";
let age: number = 20;
const pi = 3.14; // const cannot change`},{t:{en:"Data types",ar:"أنواع البيانات"},body:{en:"Every value has a type: text, whole numbers, decimals, or true/false. The type decides what you can do with it.",ar:"كل قيمة إلها نوع: نص، أرقام صحيحة، أرقام عشرية، أو صح/خطأ. النوع بيحدد شو تقدر تعمل فيها."},code:`let s: string = "text";
let n: number = 42;
let ok: boolean = true;
let list: number[] = [1, 2, 3];`,sec:{en:"Data & values",ar:"البيانات والقيم"}},{t:{en:"Numbers & math",ar:"الأرقام والحساب"},body:{en:"You can add, subtract, multiply, divide and more. Programming is math you can see.",ar:"تقدر تجمع وتطرح وتضرب وتقسم وأكثر. البرمجة رياضيات بتشوفها قدامك."},code:`let a = 10, b = 3;
console.log(a + b, a - b, a * b, a / b);
console.log(a % b, a ** b);`},{t:{en:"Strings (text)",ar:"النصوص"},body:{en:"A string is a piece of text wrapped in quotes. You will use strings everywhere.",ar:"النص (string) عبارة عن كلام محاط بعلامات اقتباس. رح تستخدم النصوص بكل مكان."},code:`let city: string = "Amman";
console.log(city.length);
console.log(city.toUpperCase());`},{t:{en:"Formatting strings",ar:"تنسيق النصوص"},body:{en:"Join and format strings to build dynamic messages from your data.",ar:"ادمج ونسّق النصوص لتبني رسائل ديناميكية من بياناتك."},code:'let name = "Sara", age = 20;\nconsole.log(name + " is " + age);\nconsole.log(`${name} is ${age}`);'},{t:{en:"Booleans (true/false)",ar:"القيم المنطقية"},body:{en:"A boolean is either true or false. Booleans are the heart of every decision your program makes.",ar:"القيمة المنطقية إمّا صح (true) أو خطأ (false)، وهي أساس كل قرار بياخده برنامجك."},code:`let isOpen: boolean = 5 > 3;
console.log(isOpen);
console.log(10 === 10, 2 !== 3);`},{t:{en:"Operators",ar:"المعاملات"},body:{en:"Operators combine values: arithmetic (+ - * /), comparison (> < ==) and more.",ar:"المعاملات بتجمع القيم: حسابية (+ - * /)، ومقارنة (> < ==) وغيرها."},code:`console.log(5 + 2, 5 > 2, 5 === 5);
let x = 4; x += 6;
console.log(x);`},{t:{en:"Reading input",ar:"قراءة المدخلات"},body:{en:"Read input from the user so your program can react to real data.",ar:"اقرأ مدخلات من المستخدم لبرنامجك يتفاعل مع بيانات حقيقية."},code:`// In the browser:
const name = prompt("Your name?");
console.log("Hi " + name);`},{t:{en:"if / else",ar:"الشرط if / else"},body:{en:"if/else lets your program choose a path based on a condition.",ar:"الشرط if/else بيخلّي برنامجك يختار مسار حسب شرط معيّن."},code:`let age = 18;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}`,sec:{en:"Control flow",ar:"التحكم بالتدفق"}},{t:{en:"Logical operators",ar:"المعاملات المنطقية"},body:{en:"Combine conditions with AND, OR and NOT to express complex rules.",ar:"ادمج الشروط بـ AND و OR و NOT لتعبّر عن قواعد معقّدة."},code:`let age = 22, member = true;
if (age > 18 && member) console.log("Welcome");
if (age < 13 || !member) console.log("No");`},{t:{en:"Many cases (switch)",ar:"حالات متعددة"},body:{en:"When you have many cases, a switch (or else-if chain) keeps code clean.",ar:"لمّا يكون عندك حالات كثيرة، الـ switch (أو سلسلة else-if) بتخلّي الكود مرتّب."},code:`let day = 3;
switch (day) {
  case 1: console.log("Mon"); break;
  case 3: console.log("Wed"); break;
  default: console.log("Other");
}`},{t:{en:"while loops",ar:"حلقة while"},body:{en:"A while loop repeats as long as its condition stays true.",ar:"حلقة while بتكرّر طالما الشرط ضلّه صح."},code:`let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}`},{t:{en:"for loops",ar:"حلقة for"},body:{en:"A for loop repeats a known number of times — perfect for counting.",ar:"حلقة for بتكرّر عدد معروف من المرّات، مثالية للعدّ."},code:`for (let i = 1; i <= 5; i++) {
  console.log("Number " + i);
}`},{t:{en:"break & continue",ar:"break و continue"},body:{en:"break exits a loop early; continue skips to the next round.",ar:"break بتوقف الحلقة بدري، و continue بتقفز للدورة الجاية."},code:`for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  if (i % 2 === 0) continue;
  console.log(i);
}`},{t:{en:"Arrays / lists",ar:"المصفوفات والقوائم"},body:{en:"An array (list) stores many values in order under one name.",ar:"المصفوفة (القائمة) بتخزّن قيم كثيرة مرتّبة تحت اسم واحد."},code:`let fruits: string[] = ["apple", "banana", "cherry"];
console.log(fruits[0]);
fruits.push("date");`,sec:{en:"Collections",ar:"المجموعات"}},{t:{en:"Looping collections",ar:"المرور على المجموعات"},body:{en:"Loop over a collection to read or transform every item.",ar:"مُرّ على المجموعة لتقرأ أو تعدّل كل عنصر فيها."},code:`let nums = [1, 2, 3];
for (const n of nums) console.log(n * 2);
console.log(nums.map(x => x * 2));`},{t:{en:"Maps / dictionaries",ar:"الخرائط والقواميس"},body:{en:"A map stores key → value pairs, so you can look up data instantly.",ar:"الخريطة بتخزّن أزواج مفتاح ← قيمة، فتقدر تجيب البيانات فوراً."},code:`let user: Record<string, string> = { name: "Sara", city: "Amman" };
console.log(user.name);
user.age = "20";`},{t:{en:"Functions",ar:"الدوال"},body:{en:"A function is a named, reusable block of code you can call again and again.",ar:"الدالة كتلة كود إلها اسم وقابلة لإعادة الاستخدام، تقدر تناديها مرّة بعد مرّة."},code:`function greet(): void {
  console.log("Hello!");
}
greet();`,sec:{en:"Functions",ar:"الدوال"}},{t:{en:"Parameters & return",ar:"المعاملات والإرجاع"},body:{en:"Functions take inputs (parameters) and hand back a result (return value).",ar:"الدوال بتاخد مدخلات (معاملات) وبترجّع نتيجة (قيمة إرجاع)."},code:`function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 3));`},{t:{en:"Scope",ar:"النطاق"},body:{en:"Scope decides where a variable can be seen — inside a function or everywhere.",ar:"النطاق بيحدد وين المتغيّر بيبان: جوّا الدالة أو بكل مكان."},code:`let global = "everywhere";
function test(): void {
  let local = "inside only";
  console.log(global, local);
}
test();`},{t:{en:"Recursion",ar:"الاستدعاء الذاتي"},body:{en:"A recursive function calls itself to break a big problem into smaller ones.",ar:"الدالة العَوْدية بتنادي حالها لتقسّم مشكلة كبيرة لمشاكل أصغر."},code:`function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));`},{t:{en:"Error handling",ar:"معالجة الأخطاء"},body:{en:"Catch errors so your program handles problems gracefully instead of crashing.",ar:"امسك الأخطاء لبرنامجك يتعامل مع المشاكل بهدوء بدل ما يوقع."},code:`try {
  throw new Error("Something failed");
} catch (e) {
  console.log("Caught:", (e as Error).message);
}`,sec:{en:"Robust code",ar:"كود متين"}},{t:{en:"Classes & objects",ar:"الكلاسات والكائنات"},body:{en:"A class is a blueprint for objects that bundle related data and behavior.",ar:"الكلاس مخطّط للكائنات بيجمع البيانات والسلوك المترابطين."},code:`class Dog {
  name: string;
  constructor(name: string) { this.name = name; }
}
const d = new Dog("Rex");
console.log(d.name);`,sec:{en:"Objects (OOP)",ar:"الكائنات (OOP)"}},{t:{en:"Methods & properties",ar:"الدوال والخصائص"},body:{en:"Methods are functions that belong to an object and act on its data.",ar:"الدوال (methods) هي دوال تابعة للكائن وبتشتغل على بياناته."},code:`class Counter {
  count = 0;
  increment(): void { this.count++; }
}
const c = new Counter();
c.increment();
console.log(c.count);`},{t:{en:"Inheritance",ar:"الوراثة"},body:{en:"Inheritance lets one class reuse and extend another — write once, reuse often.",ar:"الوراثة بتخلّي كلاس يعيد استخدام كلاس ثاني ويوسّعه: اكتب مرّة، استخدم كثير."},code:`class Animal { speak() { console.log("..."); } }
class Cat extends Animal { speak() { console.log("Meow"); } }
new Cat().speak();`},{t:{en:"Mini project",ar:"مشروع صغير"},body:{en:"Combine the basics into a small working program of your own.",ar:"اجمع الأساسيات ببرنامج صغير شغّال من عندك."},code:`const cart = [10, 25, 5];
const total = cart.reduce((s, p) => s + p, 0);
console.log("Total: $" + total);`,sec:{en:"Project",ar:"المشروع"}},{t:{en:"Final project + certificate",ar:"المشروع النهائي + الشهادة"},body:{en:"Build a final project that ties everything together. 🏆 Then claim your certificate!",ar:"ابنِ مشروع نهائي بيجمع كل شي تعلّمته. 🏆 وبعدها استلم شهادتك!",cert:!0},code:`function grade(score: number): string {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  return "C";
}
console.log(grade(95));`}]},java:{name:"Java",icon:"☕",lessons:[{t:{en:"Introduction & first program",ar:"مقدمة وأول برنامج"},body:{en:"<p><b>Java</b> is a popular, powerful programming language. This course takes you from zero to your first project — one small step at a time. Here is the classic first program:",ar:"<p><b>Java</b> لغة برمجة مشهورة وقوية. هذا الكورس بياخدك من الصفر لأول مشروع، خطوة صغيرة كل مرة. هذا أول برنامج تقليدي:"},code:`public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`,sec:{en:"Basics",ar:"الأساسيات"}},{t:{en:"Printing output",ar:"طباعة المخرجات"},body:{en:"Printing text to the screen is how your program talks to you. Try changing the message.",ar:"طباعة النص على الشاشة هي طريقة برنامجك ليحكي معك. جرّب تغيّر الرسالة."},code:`System.out.println("Learning Java!");
System.out.print("No new line ");
System.out.println("here");`},{t:{en:"Comments",ar:"التعليقات"},body:{en:"Comments are notes for humans — Java ignores them when it runs your code. Use them to explain your thinking.",ar:"التعليقات ملاحظات للبشر، وJava بتتجاهلها وقت التشغيل. استخدمها لتشرح فكرتك."},code:`// single-line comment
/* multi-line
   comment */
System.out.println("Comments ignored");`},{t:{en:"Variables",ar:"المتغيرات"},body:{en:"A variable is a named box that stores a value you can reuse and change later.",ar:"المتغيّر صندوق له اسم بيخزّن قيمة تقدر تعيد استخدامها وتغيّرها لاحقاً."},code:`String name = "Sara";
int age = 20;
final double PI = 3.14; // final cannot change`},{t:{en:"Data types",ar:"أنواع البيانات"},body:{en:"Every value has a type: text, whole numbers, decimals, or true/false. The type decides what you can do with it.",ar:"كل قيمة إلها نوع: نص، أرقام صحيحة، أرقام عشرية، أو صح/خطأ. النوع بيحدد شو تقدر تعمل فيها."},code:`String s = "text";
int n = 42;
double d = 3.5;
boolean ok = true;
char c = 'A';`,sec:{en:"Data & values",ar:"البيانات والقيم"}},{t:{en:"Numbers & math",ar:"الأرقام والحساب"},body:{en:"You can add, subtract, multiply, divide and more. Programming is math you can see.",ar:"تقدر تجمع وتطرح وتضرب وتقسم وأكثر. البرمجة رياضيات بتشوفها قدامك."},code:`int a = 10, b = 3;
System.out.println(a + b);
System.out.println(a / b);
System.out.println(a % b);`},{t:{en:"Strings (text)",ar:"النصوص"},body:{en:"A string is a piece of text wrapped in quotes. You will use strings everywhere.",ar:"النص (string) عبارة عن كلام محاط بعلامات اقتباس. رح تستخدم النصوص بكل مكان."},code:`String city = "Amman";
System.out.println(city.length());
System.out.println(city.toUpperCase());`},{t:{en:"Formatting strings",ar:"تنسيق النصوص"},body:{en:"Join and format strings to build dynamic messages from your data.",ar:"ادمج ونسّق النصوص لتبني رسائل ديناميكية من بياناتك."},code:`String name = "Sara";
int age = 20;
System.out.println(name + " is " + age);
System.out.printf("%s is %d%n", name, age);`},{t:{en:"Booleans (true/false)",ar:"القيم المنطقية"},body:{en:"A boolean is either true or false. Booleans are the heart of every decision your program makes.",ar:"القيمة المنطقية إمّا صح (true) أو خطأ (false)، وهي أساس كل قرار بياخده برنامجك."},code:`boolean isOpen = 5 > 3;
System.out.println(isOpen);
System.out.println(10 == 10);`},{t:{en:"Operators",ar:"المعاملات"},body:{en:"Operators combine values: arithmetic (+ - * /), comparison (> < ==) and more.",ar:"المعاملات بتجمع القيم: حسابية (+ - * /)، ومقارنة (> < ==) وغيرها."},code:`System.out.println(5 + 2);
System.out.println(5 > 2);
int x = 4; x += 6;
System.out.println(x);`},{t:{en:"Reading input",ar:"قراءة المدخلات"},body:{en:"Read input from the user so your program can react to real data.",ar:"اقرأ مدخلات من المستخدم لبرنامجك يتفاعل مع بيانات حقيقية."},code:`import java.util.Scanner;
Scanner sc = new Scanner(System.in);
String name = sc.nextLine();
System.out.println("Hi " + name);`},{t:{en:"if / else",ar:"الشرط if / else"},body:{en:"if/else lets your program choose a path based on a condition.",ar:"الشرط if/else بيخلّي برنامجك يختار مسار حسب شرط معيّن."},code:`int age = 18;
if (age >= 18) {
  System.out.println("Adult");
} else {
  System.out.println("Minor");
}`,sec:{en:"Control flow",ar:"التحكم بالتدفق"}},{t:{en:"Logical operators",ar:"المعاملات المنطقية"},body:{en:"Combine conditions with AND, OR and NOT to express complex rules.",ar:"ادمج الشروط بـ AND و OR و NOT لتعبّر عن قواعد معقّدة."},code:`int age = 22;
boolean member = true;
if (age > 18 && member) System.out.println("Welcome");
if (!member) System.out.println("No");`},{t:{en:"Many cases (switch)",ar:"حالات متعددة"},body:{en:"When you have many cases, a switch (or else-if chain) keeps code clean.",ar:"لمّا يكون عندك حالات كثيرة، الـ switch (أو سلسلة else-if) بتخلّي الكود مرتّب."},code:`int day = 3;
switch (day) {
  case 1: System.out.println("Mon"); break;
  case 3: System.out.println("Wed"); break;
  default: System.out.println("Other");
}`},{t:{en:"while loops",ar:"حلقة while"},body:{en:"A while loop repeats as long as its condition stays true.",ar:"حلقة while بتكرّر طالما الشرط ضلّه صح."},code:`int i = 1;
while (i <= 5) {
  System.out.println(i);
  i++;
}`},{t:{en:"for loops",ar:"حلقة for"},body:{en:"A for loop repeats a known number of times — perfect for counting.",ar:"حلقة for بتكرّر عدد معروف من المرّات، مثالية للعدّ."},code:`for (int i = 1; i <= 5; i++) {
  System.out.println("Number " + i);
}`},{t:{en:"break & continue",ar:"break و continue"},body:{en:"break exits a loop early; continue skips to the next round.",ar:"break بتوقف الحلقة بدري، و continue بتقفز للدورة الجاية."},code:`for (int i = 1; i <= 10; i++) {
  if (i == 5) break;
  if (i % 2 == 0) continue;
  System.out.println(i);
}`},{t:{en:"Arrays / lists",ar:"المصفوفات والقوائم"},body:{en:"An array (list) stores many values in order under one name.",ar:"المصفوفة (القائمة) بتخزّن قيم كثيرة مرتّبة تحت اسم واحد."},code:`String[] fruits = {"apple", "banana", "cherry"};
System.out.println(fruits[0]);
System.out.println(fruits.length);`,sec:{en:"Collections",ar:"المجموعات"}},{t:{en:"Looping collections",ar:"المرور على المجموعات"},body:{en:"Loop over a collection to read or transform every item.",ar:"مُرّ على المجموعة لتقرأ أو تعدّل كل عنصر فيها."},code:`int[] nums = {1, 2, 3};
for (int n : nums) {
  System.out.println(n * 2);
}`},{t:{en:"Maps / dictionaries",ar:"الخرائط والقواميس"},body:{en:"A map stores key → value pairs, so you can look up data instantly.",ar:"الخريطة بتخزّن أزواج مفتاح ← قيمة، فتقدر تجيب البيانات فوراً."},code:`import java.util.HashMap;
HashMap<String,String> user = new HashMap<>();
user.put("name", "Sara");
System.out.println(user.get("name"));`},{t:{en:"Functions",ar:"الدوال"},body:{en:"A function is a named, reusable block of code you can call again and again.",ar:"الدالة كتلة كود إلها اسم وقابلة لإعادة الاستخدام، تقدر تناديها مرّة بعد مرّة."},code:`static void greet() {
  System.out.println("Hello!");
}
// call inside main: greet();`,sec:{en:"Functions",ar:"الدوال"}},{t:{en:"Parameters & return",ar:"المعاملات والإرجاع"},body:{en:"Functions take inputs (parameters) and hand back a result (return value).",ar:"الدوال بتاخد مدخلات (معاملات) وبترجّع نتيجة (قيمة إرجاع)."},code:`static int add(int a, int b) {
  return a + b;
}
// System.out.println(add(5, 3));`},{t:{en:"Scope",ar:"النطاق"},body:{en:"Scope decides where a variable can be seen — inside a function or everywhere.",ar:"النطاق بيحدد وين المتغيّر بيبان: جوّا الدالة أو بكل مكان."},code:`static int total = 0; // class scope
static void demo() {
  int local = 5; // method scope
  System.out.println(local + total);
}`},{t:{en:"Recursion",ar:"الاستدعاء الذاتي"},body:{en:"A recursive function calls itself to break a big problem into smaller ones.",ar:"الدالة العَوْدية بتنادي حالها لتقسّم مشكلة كبيرة لمشاكل أصغر."},code:`static int factorial(int n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
// factorial(5) => 120`},{t:{en:"Error handling",ar:"معالجة الأخطاء"},body:{en:"Catch errors so your program handles problems gracefully instead of crashing.",ar:"امسك الأخطاء لبرنامجك يتعامل مع المشاكل بهدوء بدل ما يوقع."},code:`try {
  int x = 10 / 0;
} catch (ArithmeticException e) {
  System.out.println("Caught: " + e.getMessage());
}`,sec:{en:"Robust code",ar:"كود متين"}},{t:{en:"Classes & objects",ar:"الكلاسات والكائنات"},body:{en:"A class is a blueprint for objects that bundle related data and behavior.",ar:"الكلاس مخطّط للكائنات بيجمع البيانات والسلوك المترابطين."},code:`class Dog {
  String name;
  Dog(String name) { this.name = name; }
}
Dog d = new Dog("Rex");
System.out.println(d.name);`,sec:{en:"Objects (OOP)",ar:"الكائنات (OOP)"}},{t:{en:"Methods & properties",ar:"الدوال والخصائص"},body:{en:"Methods are functions that belong to an object and act on its data.",ar:"الدوال (methods) هي دوال تابعة للكائن وبتشتغل على بياناته."},code:`class Counter {
  int count = 0;
  void increment() { count++; }
}
Counter c = new Counter();
c.increment();`},{t:{en:"Inheritance",ar:"الوراثة"},body:{en:"Inheritance lets one class reuse and extend another — write once, reuse often.",ar:"الوراثة بتخلّي كلاس يعيد استخدام كلاس ثاني ويوسّعه: اكتب مرّة، استخدم كثير."},code:`class Animal { void speak() { System.out.println("..."); } }
class Cat extends Animal { void speak() { System.out.println("Meow"); } }`},{t:{en:"Mini project",ar:"مشروع صغير"},body:{en:"Combine the basics into a small working program of your own.",ar:"اجمع الأساسيات ببرنامج صغير شغّال من عندك."},code:`int[] cart = {10, 25, 5};
int total = 0;
for (int p : cart) total += p;
System.out.println("Total: $" + total);`,sec:{en:"Project",ar:"المشروع"}},{t:{en:"Final project + certificate",ar:"المشروع النهائي + الشهادة"},body:{en:"Build a final project that ties everything together. 🏆 Then claim your certificate!",ar:"ابنِ مشروع نهائي بيجمع كل شي تعلّمته. 🏆 وبعدها استلم شهادتك!",cert:!0},code:`static String grade(int s) {
  if (s >= 90) return "A";
  if (s >= 80) return "B";
  return "C";
}
// grade(95) => A`}]},csharp:{name:"C#",icon:"🎯",lessons:[{t:{en:"Introduction & first program",ar:"مقدمة وأول برنامج"},body:{en:"<p><b>C#</b> is a popular, powerful programming language. This course takes you from zero to your first project — one small step at a time. Here is the classic first program:",ar:"<p><b>C#</b> لغة برمجة مشهورة وقوية. هذا الكورس بياخدك من الصفر لأول مشروع، خطوة صغيرة كل مرة. هذا أول برنامج تقليدي:"},code:`using System;
class Program {
  static void Main() {
    Console.WriteLine("Hello, World!");
  }
}`,sec:{en:"Basics",ar:"الأساسيات"}},{t:{en:"Printing output",ar:"طباعة المخرجات"},body:{en:"Printing text to the screen is how your program talks to you. Try changing the message.",ar:"طباعة النص على الشاشة هي طريقة برنامجك ليحكي معك. جرّب تغيّر الرسالة."},code:`Console.WriteLine("Learning C#!");
Console.Write("No new line ");
Console.WriteLine("here");`},{t:{en:"Comments",ar:"التعليقات"},body:{en:"Comments are notes for humans — C# ignores them when it runs your code. Use them to explain your thinking.",ar:"التعليقات ملاحظات للبشر، وC# بتتجاهلها وقت التشغيل. استخدمها لتشرح فكرتك."},code:`// single-line comment
/* multi-line comment */
Console.WriteLine("Comments ignored");`},{t:{en:"Variables",ar:"المتغيرات"},body:{en:"A variable is a named box that stores a value you can reuse and change later.",ar:"المتغيّر صندوق له اسم بيخزّن قيمة تقدر تعيد استخدامها وتغيّرها لاحقاً."},code:`string name = "Sara";
int age = 20;
const double Pi = 3.14;`},{t:{en:"Data types",ar:"أنواع البيانات"},body:{en:"Every value has a type: text, whole numbers, decimals, or true/false. The type decides what you can do with it.",ar:"كل قيمة إلها نوع: نص، أرقام صحيحة، أرقام عشرية، أو صح/خطأ. النوع بيحدد شو تقدر تعمل فيها."},code:`string s = "text";
int n = 42;
double d = 3.5;
bool ok = true;
char c = 'A';`,sec:{en:"Data & values",ar:"البيانات والقيم"}},{t:{en:"Numbers & math",ar:"الأرقام والحساب"},body:{en:"You can add, subtract, multiply, divide and more. Programming is math you can see.",ar:"تقدر تجمع وتطرح وتضرب وتقسم وأكثر. البرمجة رياضيات بتشوفها قدامك."},code:`int a = 10, b = 3;
Console.WriteLine(a + b);
Console.WriteLine(a / b);
Console.WriteLine(a % b);`},{t:{en:"Strings (text)",ar:"النصوص"},body:{en:"A string is a piece of text wrapped in quotes. You will use strings everywhere.",ar:"النص (string) عبارة عن كلام محاط بعلامات اقتباس. رح تستخدم النصوص بكل مكان."},code:`string city = "Amman";
Console.WriteLine(city.Length);
Console.WriteLine(city.ToUpper());`},{t:{en:"Formatting strings",ar:"تنسيق النصوص"},body:{en:"Join and format strings to build dynamic messages from your data.",ar:"ادمج ونسّق النصوص لتبني رسائل ديناميكية من بياناتك."},code:`string name = "Sara";
int age = 20;
Console.WriteLine(name + " is " + age);
Console.WriteLine($"{name} is {age}");`},{t:{en:"Booleans (true/false)",ar:"القيم المنطقية"},body:{en:"A boolean is either true or false. Booleans are the heart of every decision your program makes.",ar:"القيمة المنطقية إمّا صح (true) أو خطأ (false)، وهي أساس كل قرار بياخده برنامجك."},code:`bool isOpen = 5 > 3;
Console.WriteLine(isOpen);
Console.WriteLine(10 == 10);`},{t:{en:"Operators",ar:"المعاملات"},body:{en:"Operators combine values: arithmetic (+ - * /), comparison (> < ==) and more.",ar:"المعاملات بتجمع القيم: حسابية (+ - * /)، ومقارنة (> < ==) وغيرها."},code:`Console.WriteLine(5 + 2);
Console.WriteLine(5 > 2);
int x = 4; x += 6;
Console.WriteLine(x);`},{t:{en:"Reading input",ar:"قراءة المدخلات"},body:{en:"Read input from the user so your program can react to real data.",ar:"اقرأ مدخلات من المستخدم لبرنامجك يتفاعل مع بيانات حقيقية."},code:`Console.Write("Name? ");
string name = Console.ReadLine();
Console.WriteLine($"Hi {name}");`},{t:{en:"if / else",ar:"الشرط if / else"},body:{en:"if/else lets your program choose a path based on a condition.",ar:"الشرط if/else بيخلّي برنامجك يختار مسار حسب شرط معيّن."},code:`int age = 18;
if (age >= 18) {
  Console.WriteLine("Adult");
} else {
  Console.WriteLine("Minor");
}`,sec:{en:"Control flow",ar:"التحكم بالتدفق"}},{t:{en:"Logical operators",ar:"المعاملات المنطقية"},body:{en:"Combine conditions with AND, OR and NOT to express complex rules.",ar:"ادمج الشروط بـ AND و OR و NOT لتعبّر عن قواعد معقّدة."},code:`int age = 22;
bool member = true;
if (age > 18 && member) Console.WriteLine("Welcome");
if (!member) Console.WriteLine("No");`},{t:{en:"Many cases (switch)",ar:"حالات متعددة"},body:{en:"When you have many cases, a switch (or else-if chain) keeps code clean.",ar:"لمّا يكون عندك حالات كثيرة، الـ switch (أو سلسلة else-if) بتخلّي الكود مرتّب."},code:`int day = 3;
switch (day) {
  case 1: Console.WriteLine("Mon"); break;
  case 3: Console.WriteLine("Wed"); break;
  default: Console.WriteLine("Other"); break;
}`},{t:{en:"while loops",ar:"حلقة while"},body:{en:"A while loop repeats as long as its condition stays true.",ar:"حلقة while بتكرّر طالما الشرط ضلّه صح."},code:`int i = 1;
while (i <= 5) {
  Console.WriteLine(i);
  i++;
}`},{t:{en:"for loops",ar:"حلقة for"},body:{en:"A for loop repeats a known number of times — perfect for counting.",ar:"حلقة for بتكرّر عدد معروف من المرّات، مثالية للعدّ."},code:`for (int i = 1; i <= 5; i++) {
  Console.WriteLine("Number " + i);
}`},{t:{en:"break & continue",ar:"break و continue"},body:{en:"break exits a loop early; continue skips to the next round.",ar:"break بتوقف الحلقة بدري، و continue بتقفز للدورة الجاية."},code:`for (int i = 1; i <= 10; i++) {
  if (i == 5) break;
  if (i % 2 == 0) continue;
  Console.WriteLine(i);
}`},{t:{en:"Arrays / lists",ar:"المصفوفات والقوائم"},body:{en:"An array (list) stores many values in order under one name.",ar:"المصفوفة (القائمة) بتخزّن قيم كثيرة مرتّبة تحت اسم واحد."},code:`string[] fruits = {"apple", "banana", "cherry"};
Console.WriteLine(fruits[0]);
Console.WriteLine(fruits.Length);`,sec:{en:"Collections",ar:"المجموعات"}},{t:{en:"Looping collections",ar:"المرور على المجموعات"},body:{en:"Loop over a collection to read or transform every item.",ar:"مُرّ على المجموعة لتقرأ أو تعدّل كل عنصر فيها."},code:`int[] nums = {1, 2, 3};
foreach (int n in nums) {
  Console.WriteLine(n * 2);
}`},{t:{en:"Maps / dictionaries",ar:"الخرائط والقواميس"},body:{en:"A map stores key → value pairs, so you can look up data instantly.",ar:"الخريطة بتخزّن أزواج مفتاح ← قيمة، فتقدر تجيب البيانات فوراً."},code:`var user = new Dictionary<string,string>();
user["name"] = "Sara";
Console.WriteLine(user["name"]);`},{t:{en:"Functions",ar:"الدوال"},body:{en:"A function is a named, reusable block of code you can call again and again.",ar:"الدالة كتلة كود إلها اسم وقابلة لإعادة الاستخدام، تقدر تناديها مرّة بعد مرّة."},code:`static void Greet() {
  Console.WriteLine("Hello!");
}
// Greet();`,sec:{en:"Functions",ar:"الدوال"}},{t:{en:"Parameters & return",ar:"المعاملات والإرجاع"},body:{en:"Functions take inputs (parameters) and hand back a result (return value).",ar:"الدوال بتاخد مدخلات (معاملات) وبترجّع نتيجة (قيمة إرجاع)."},code:`static int Add(int a, int b) {
  return a + b;
}
// Console.WriteLine(Add(5, 3));`},{t:{en:"Scope",ar:"النطاق"},body:{en:"Scope decides where a variable can be seen — inside a function or everywhere.",ar:"النطاق بيحدد وين المتغيّر بيبان: جوّا الدالة أو بكل مكان."},code:`static int total = 0;
static void Demo() {
  int local = 5;
  Console.WriteLine(local + total);
}`},{t:{en:"Recursion",ar:"الاستدعاء الذاتي"},body:{en:"A recursive function calls itself to break a big problem into smaller ones.",ar:"الدالة العَوْدية بتنادي حالها لتقسّم مشكلة كبيرة لمشاكل أصغر."},code:`static int Factorial(int n) {
  if (n <= 1) return 1;
  return n * Factorial(n - 1);
}
// Factorial(5) => 120`},{t:{en:"Error handling",ar:"معالجة الأخطاء"},body:{en:"Catch errors so your program handles problems gracefully instead of crashing.",ar:"امسك الأخطاء لبرنامجك يتعامل مع المشاكل بهدوء بدل ما يوقع."},code:`try {
  int x = 10 / int.Parse("0");
} catch (Exception e) {
  Console.WriteLine("Caught: " + e.Message);
}`,sec:{en:"Robust code",ar:"كود متين"}},{t:{en:"Classes & objects",ar:"الكلاسات والكائنات"},body:{en:"A class is a blueprint for objects that bundle related data and behavior.",ar:"الكلاس مخطّط للكائنات بيجمع البيانات والسلوك المترابطين."},code:`class Dog {
  public string Name;
  public Dog(string name) { Name = name; }
}
var d = new Dog("Rex");
Console.WriteLine(d.Name);`,sec:{en:"Objects (OOP)",ar:"الكائنات (OOP)"}},{t:{en:"Methods & properties",ar:"الدوال والخصائص"},body:{en:"Methods are functions that belong to an object and act on its data.",ar:"الدوال (methods) هي دوال تابعة للكائن وبتشتغل على بياناته."},code:`class Counter {
  public int Count = 0;
  public void Increment() { Count++; }
}
var c = new Counter();
c.Increment();`},{t:{en:"Inheritance",ar:"الوراثة"},body:{en:"Inheritance lets one class reuse and extend another — write once, reuse often.",ar:"الوراثة بتخلّي كلاس يعيد استخدام كلاس ثاني ويوسّعه: اكتب مرّة، استخدم كثير."},code:`class Animal { public virtual void Speak() => Console.WriteLine("..."); }
class Cat : Animal { public override void Speak() => Console.WriteLine("Meow"); }`},{t:{en:"Mini project",ar:"مشروع صغير"},body:{en:"Combine the basics into a small working program of your own.",ar:"اجمع الأساسيات ببرنامج صغير شغّال من عندك."},code:`int[] cart = {10, 25, 5};
int total = 0;
foreach (int p in cart) total += p;
Console.WriteLine($"Total: \${total}");`,sec:{en:"Project",ar:"المشروع"}},{t:{en:"Final project + certificate",ar:"المشروع النهائي + الشهادة"},body:{en:"Build a final project that ties everything together. 🏆 Then claim your certificate!",ar:"ابنِ مشروع نهائي بيجمع كل شي تعلّمته. 🏆 وبعدها استلم شهادتك!",cert:!0},code:`static string Grade(int s) {
  if (s >= 90) return "A";
  if (s >= 80) return "B";
  return "C";
}
// Grade(95) => A`}]},cpp:{name:"C++",icon:"➕",lessons:[{t:{en:"Introduction & first program",ar:"مقدمة وأول برنامج"},body:{en:"<p><b>C++</b> is a popular, powerful programming language. This course takes you from zero to your first project — one small step at a time. Here is the classic first program:",ar:"<p><b>C++</b> لغة برمجة مشهورة وقوية. هذا الكورس بياخدك من الصفر لأول مشروع، خطوة صغيرة كل مرة. هذا أول برنامج تقليدي:"},code:`#include <iostream>
using namespace std;

int main() {
  cout << "Hello, World!" << endl;
  return 0;
}`,sec:{en:"Basics",ar:"الأساسيات"}},{t:{en:"Printing output",ar:"طباعة المخرجات"},body:{en:"Printing text to the screen is how your program talks to you. Try changing the message.",ar:"طباعة النص على الشاشة هي طريقة برنامجك ليحكي معك. جرّب تغيّر الرسالة."},code:`cout << "Learning C++!" << endl;
cout << "Same line ";
cout << "here" << endl;`},{t:{en:"Comments",ar:"التعليقات"},body:{en:"Comments are notes for humans — C++ ignores them when it runs your code. Use them to explain your thinking.",ar:"التعليقات ملاحظات للبشر، وC++ بتتجاهلها وقت التشغيل. استخدمها لتشرح فكرتك."},code:`// single-line comment
/* multi-line comment */
cout << "Comments ignored" << endl;`},{t:{en:"Variables",ar:"المتغيرات"},body:{en:"A variable is a named box that stores a value you can reuse and change later.",ar:"المتغيّر صندوق له اسم بيخزّن قيمة تقدر تعيد استخدامها وتغيّرها لاحقاً."},code:`string name = "Sara";
int age = 20;
const double PI = 3.14;`},{t:{en:"Data types",ar:"أنواع البيانات"},body:{en:"Every value has a type: text, whole numbers, decimals, or true/false. The type decides what you can do with it.",ar:"كل قيمة إلها نوع: نص، أرقام صحيحة، أرقام عشرية، أو صح/خطأ. النوع بيحدد شو تقدر تعمل فيها."},code:`string s = "text";
int n = 42;
double d = 3.5;
bool ok = true;
char c = 'A';`,sec:{en:"Data & values",ar:"البيانات والقيم"}},{t:{en:"Numbers & math",ar:"الأرقام والحساب"},body:{en:"You can add, subtract, multiply, divide and more. Programming is math you can see.",ar:"تقدر تجمع وتطرح وتضرب وتقسم وأكثر. البرمجة رياضيات بتشوفها قدامك."},code:`int a = 10, b = 3;
cout << a + b << endl;
cout << a / b << endl;
cout << a % b << endl;`},{t:{en:"Strings (text)",ar:"النصوص"},body:{en:"A string is a piece of text wrapped in quotes. You will use strings everywhere.",ar:"النص (string) عبارة عن كلام محاط بعلامات اقتباس. رح تستخدم النصوص بكل مكان."},code:`string city = "Amman";
cout << city.length() << endl;
cout << city.substr(0, 3) << endl;`},{t:{en:"Formatting strings",ar:"تنسيق النصوص"},body:{en:"Join and format strings to build dynamic messages from your data.",ar:"ادمج ونسّق النصوص لتبني رسائل ديناميكية من بياناتك."},code:`string name = "Sara";
int age = 20;
cout << name << " is " << age << endl;`},{t:{en:"Booleans (true/false)",ar:"القيم المنطقية"},body:{en:"A boolean is either true or false. Booleans are the heart of every decision your program makes.",ar:"القيمة المنطقية إمّا صح (true) أو خطأ (false)، وهي أساس كل قرار بياخده برنامجك."},code:`bool isOpen = 5 > 3;
cout << isOpen << endl;
cout << (10 == 10) << endl;`},{t:{en:"Operators",ar:"المعاملات"},body:{en:"Operators combine values: arithmetic (+ - * /), comparison (> < ==) and more.",ar:"المعاملات بتجمع القيم: حسابية (+ - * /)، ومقارنة (> < ==) وغيرها."},code:`cout << 5 + 2 << endl;
cout << (5 > 2) << endl;
int x = 4; x += 6;
cout << x << endl;`},{t:{en:"Reading input",ar:"قراءة المدخلات"},body:{en:"Read input from the user so your program can react to real data.",ar:"اقرأ مدخلات من المستخدم لبرنامجك يتفاعل مع بيانات حقيقية."},code:`string name;
cout << "Name? ";
cin >> name;
cout << "Hi " << name << endl;`},{t:{en:"if / else",ar:"الشرط if / else"},body:{en:"if/else lets your program choose a path based on a condition.",ar:"الشرط if/else بيخلّي برنامجك يختار مسار حسب شرط معيّن."},code:`int age = 18;
if (age >= 18) {
  cout << "Adult" << endl;
} else {
  cout << "Minor" << endl;
}`,sec:{en:"Control flow",ar:"التحكم بالتدفق"}},{t:{en:"Logical operators",ar:"المعاملات المنطقية"},body:{en:"Combine conditions with AND, OR and NOT to express complex rules.",ar:"ادمج الشروط بـ AND و OR و NOT لتعبّر عن قواعد معقّدة."},code:`int age = 22;
bool member = true;
if (age > 18 && member) cout << "Welcome" << endl;
if (!member) cout << "No" << endl;`},{t:{en:"Many cases (switch)",ar:"حالات متعددة"},body:{en:"When you have many cases, a switch (or else-if chain) keeps code clean.",ar:"لمّا يكون عندك حالات كثيرة، الـ switch (أو سلسلة else-if) بتخلّي الكود مرتّب."},code:`int day = 3;
switch (day) {
  case 1: cout << "Mon"; break;
  case 3: cout << "Wed"; break;
  default: cout << "Other";
}`},{t:{en:"while loops",ar:"حلقة while"},body:{en:"A while loop repeats as long as its condition stays true.",ar:"حلقة while بتكرّر طالما الشرط ضلّه صح."},code:`int i = 1;
while (i <= 5) {
  cout << i << endl;
  i++;
}`},{t:{en:"for loops",ar:"حلقة for"},body:{en:"A for loop repeats a known number of times — perfect for counting.",ar:"حلقة for بتكرّر عدد معروف من المرّات، مثالية للعدّ."},code:`for (int i = 1; i <= 5; i++) {
  cout << "Number " << i << endl;
}`},{t:{en:"break & continue",ar:"break و continue"},body:{en:"break exits a loop early; continue skips to the next round.",ar:"break بتوقف الحلقة بدري، و continue بتقفز للدورة الجاية."},code:`for (int i = 1; i <= 10; i++) {
  if (i == 5) break;
  if (i % 2 == 0) continue;
  cout << i << endl;
}`},{t:{en:"Arrays / lists",ar:"المصفوفات والقوائم"},body:{en:"An array (list) stores many values in order under one name.",ar:"المصفوفة (القائمة) بتخزّن قيم كثيرة مرتّبة تحت اسم واحد."},code:`string fruits[] = {"apple", "banana", "cherry"};
cout << fruits[0] << endl;`,sec:{en:"Collections",ar:"المجموعات"}},{t:{en:"Looping collections",ar:"المرور على المجموعات"},body:{en:"Loop over a collection to read or transform every item.",ar:"مُرّ على المجموعة لتقرأ أو تعدّل كل عنصر فيها."},code:`int nums[] = {1, 2, 3};
for (int n : nums) {
  cout << n * 2 << endl;
}`},{t:{en:"Maps / dictionaries",ar:"الخرائط والقواميس"},body:{en:"A map stores key → value pairs, so you can look up data instantly.",ar:"الخريطة بتخزّن أزواج مفتاح ← قيمة، فتقدر تجيب البيانات فوراً."},code:`#include <map>
map<string,string> user;
user["name"] = "Sara";
cout << user["name"] << endl;`},{t:{en:"Functions",ar:"الدوال"},body:{en:"A function is a named, reusable block of code you can call again and again.",ar:"الدالة كتلة كود إلها اسم وقابلة لإعادة الاستخدام، تقدر تناديها مرّة بعد مرّة."},code:`void greet() {
  cout << "Hello!" << endl;
}
// greet();`,sec:{en:"Functions",ar:"الدوال"}},{t:{en:"Parameters & return",ar:"المعاملات والإرجاع"},body:{en:"Functions take inputs (parameters) and hand back a result (return value).",ar:"الدوال بتاخد مدخلات (معاملات) وبترجّع نتيجة (قيمة إرجاع)."},code:`int add(int a, int b) {
  return a + b;
}
// cout << add(5, 3);`},{t:{en:"Scope",ar:"النطاق"},body:{en:"Scope decides where a variable can be seen — inside a function or everywhere.",ar:"النطاق بيحدد وين المتغيّر بيبان: جوّا الدالة أو بكل مكان."},code:`int total = 0; // global
void demo() {
  int local = 5; // local
  cout << local + total << endl;
}`},{t:{en:"Recursion",ar:"الاستدعاء الذاتي"},body:{en:"A recursive function calls itself to break a big problem into smaller ones.",ar:"الدالة العَوْدية بتنادي حالها لتقسّم مشكلة كبيرة لمشاكل أصغر."},code:`int factorial(int n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
// factorial(5) => 120`},{t:{en:"Error handling",ar:"معالجة الأخطاء"},body:{en:"Catch errors so your program handles problems gracefully instead of crashing.",ar:"امسك الأخطاء لبرنامجك يتعامل مع المشاكل بهدوء بدل ما يوقع."},code:`try {
  throw runtime_error("failed");
} catch (exception &e) {
  cout << "Caught: " << e.what() << endl;
}`,sec:{en:"Robust code",ar:"كود متين"}},{t:{en:"Classes & objects",ar:"الكلاسات والكائنات"},body:{en:"A class is a blueprint for objects that bundle related data and behavior.",ar:"الكلاس مخطّط للكائنات بيجمع البيانات والسلوك المترابطين."},code:`class Dog {
public:
  string name;
  Dog(string n) { name = n; }
};
Dog d("Rex");
cout << d.name << endl;`,sec:{en:"Objects (OOP)",ar:"الكائنات (OOP)"}},{t:{en:"Methods & properties",ar:"الدوال والخصائص"},body:{en:"Methods are functions that belong to an object and act on its data.",ar:"الدوال (methods) هي دوال تابعة للكائن وبتشتغل على بياناته."},code:`class Counter {
public:
  int count = 0;
  void increment() { count++; }
};
Counter c;
c.increment();`},{t:{en:"Inheritance",ar:"الوراثة"},body:{en:"Inheritance lets one class reuse and extend another — write once, reuse often.",ar:"الوراثة بتخلّي كلاس يعيد استخدام كلاس ثاني ويوسّعه: اكتب مرّة، استخدم كثير."},code:`class Animal { public: virtual void speak() { cout << "..."; } };
class Cat : public Animal { public: void speak() { cout << "Meow"; } };`},{t:{en:"Mini project",ar:"مشروع صغير"},body:{en:"Combine the basics into a small working program of your own.",ar:"اجمع الأساسيات ببرنامج صغير شغّال من عندك."},code:`int cart[] = {10, 25, 5};
int total = 0;
for (int p : cart) total += p;
cout << "Total: $" << total << endl;`,sec:{en:"Project",ar:"المشروع"}},{t:{en:"Final project + certificate",ar:"المشروع النهائي + الشهادة"},body:{en:"Build a final project that ties everything together. 🏆 Then claim your certificate!",ar:"ابنِ مشروع نهائي بيجمع كل شي تعلّمته. 🏆 وبعدها استلم شهادتك!",cert:!0},code:`string grade(int s) {
  if (s >= 90) return "A";
  if (s >= 80) return "B";
  return "C";
}
// grade(95) => A`}]},c:{name:"C",icon:"🔧",lessons:[{t:{en:"Introduction & first program",ar:"مقدمة وأول برنامج"},body:{en:"<p><b>C</b> is a popular, powerful programming language. This course takes you from zero to your first project — one small step at a time. Here is the classic first program:",ar:"<p><b>C</b> لغة برمجة مشهورة وقوية. هذا الكورس بياخدك من الصفر لأول مشروع، خطوة صغيرة كل مرة. هذا أول برنامج تقليدي:"},code:`#include <stdio.h>

int main() {
  printf("Hello, World!\\n");
  return 0;
}`,sec:{en:"Basics",ar:"الأساسيات"}},{t:{en:"Printing output",ar:"طباعة المخرجات"},body:{en:"Printing text to the screen is how your program talks to you. Try changing the message.",ar:"طباعة النص على الشاشة هي طريقة برنامجك ليحكي معك. جرّب تغيّر الرسالة."},code:`printf("Learning C!\\n");
printf("Same line ");
printf("here\\n");`},{t:{en:"Comments",ar:"التعليقات"},body:{en:"Comments are notes for humans — C ignores them when it runs your code. Use them to explain your thinking.",ar:"التعليقات ملاحظات للبشر، وC بتتجاهلها وقت التشغيل. استخدمها لتشرح فكرتك."},code:`// single-line comment
/* multi-line comment */
printf("Comments ignored\\n");`},{t:{en:"Variables",ar:"المتغيرات"},body:{en:"A variable is a named box that stores a value you can reuse and change later.",ar:"المتغيّر صندوق له اسم بيخزّن قيمة تقدر تعيد استخدامها وتغيّرها لاحقاً."},code:`char name[] = "Sara";
int age = 20;
const double PI = 3.14;`},{t:{en:"Data types",ar:"أنواع البيانات"},body:{en:"Every value has a type: text, whole numbers, decimals, or true/false. The type decides what you can do with it.",ar:"كل قيمة إلها نوع: نص، أرقام صحيحة، أرقام عشرية، أو صح/خطأ. النوع بيحدد شو تقدر تعمل فيها."},code:`int n = 42;
double d = 3.5;
char c = 'A';
char text[] = "hello";`,sec:{en:"Data & values",ar:"البيانات والقيم"}},{t:{en:"Numbers & math",ar:"الأرقام والحساب"},body:{en:"You can add, subtract, multiply, divide and more. Programming is math you can see.",ar:"تقدر تجمع وتطرح وتضرب وتقسم وأكثر. البرمجة رياضيات بتشوفها قدامك."},code:`int a = 10, b = 3;
printf("%d\\n", a + b);
printf("%d\\n", a / b);
printf("%d\\n", a % b);`},{t:{en:"Strings (text)",ar:"النصوص"},body:{en:"A string is a piece of text wrapped in quotes. You will use strings everywhere.",ar:"النص (string) عبارة عن كلام محاط بعلامات اقتباس. رح تستخدم النصوص بكل مكان."},code:`#include <string.h>
char city[] = "Amman";
printf("%lu\\n", strlen(city));`},{t:{en:"Formatting strings",ar:"تنسيق النصوص"},body:{en:"Join and format strings to build dynamic messages from your data.",ar:"ادمج ونسّق النصوص لتبني رسائل ديناميكية من بياناتك."},code:`char name[] = "Sara";
int age = 20;
printf("%s is %d\\n", name, age);`},{t:{en:"Booleans (true/false)",ar:"القيم المنطقية"},body:{en:"A boolean is either true or false. Booleans are the heart of every decision your program makes.",ar:"القيمة المنطقية إمّا صح (true) أو خطأ (false)، وهي أساس كل قرار بياخده برنامجك."},code:`int isOpen = 5 > 3; // C uses int for true/false
printf("%d\\n", isOpen);
printf("%d\\n", 10 == 10);`},{t:{en:"Operators",ar:"المعاملات"},body:{en:"Operators combine values: arithmetic (+ - * /), comparison (> < ==) and more.",ar:"المعاملات بتجمع القيم: حسابية (+ - * /)، ومقارنة (> < ==) وغيرها."},code:`printf("%d\\n", 5 + 2);
printf("%d\\n", 5 > 2);
int x = 4; x += 6;
printf("%d\\n", x);`},{t:{en:"Reading input",ar:"قراءة المدخلات"},body:{en:"Read input from the user so your program can react to real data.",ar:"اقرأ مدخلات من المستخدم لبرنامجك يتفاعل مع بيانات حقيقية."},code:`char name[50];
printf("Name? ");
scanf("%49s", name);
printf("Hi %s\\n", name);`},{t:{en:"if / else",ar:"الشرط if / else"},body:{en:"if/else lets your program choose a path based on a condition.",ar:"الشرط if/else بيخلّي برنامجك يختار مسار حسب شرط معيّن."},code:`int age = 18;
if (age >= 18) {
  printf("Adult\\n");
} else {
  printf("Minor\\n");
}`,sec:{en:"Control flow",ar:"التحكم بالتدفق"}},{t:{en:"Logical operators",ar:"المعاملات المنطقية"},body:{en:"Combine conditions with AND, OR and NOT to express complex rules.",ar:"ادمج الشروط بـ AND و OR و NOT لتعبّر عن قواعد معقّدة."},code:`int age = 22, member = 1;
if (age > 18 && member) printf("Welcome\\n");
if (!member) printf("No\\n");`},{t:{en:"Many cases (switch)",ar:"حالات متعددة"},body:{en:"When you have many cases, a switch (or else-if chain) keeps code clean.",ar:"لمّا يكون عندك حالات كثيرة، الـ switch (أو سلسلة else-if) بتخلّي الكود مرتّب."},code:`int day = 3;
switch (day) {
  case 1: printf("Mon"); break;
  case 3: printf("Wed"); break;
  default: printf("Other");
}`},{t:{en:"while loops",ar:"حلقة while"},body:{en:"A while loop repeats as long as its condition stays true.",ar:"حلقة while بتكرّر طالما الشرط ضلّه صح."},code:`int i = 1;
while (i <= 5) {
  printf("%d\\n", i);
  i++;
}`},{t:{en:"for loops",ar:"حلقة for"},body:{en:"A for loop repeats a known number of times — perfect for counting.",ar:"حلقة for بتكرّر عدد معروف من المرّات، مثالية للعدّ."},code:`for (int i = 1; i <= 5; i++) {
  printf("Number %d\\n", i);
}`},{t:{en:"break & continue",ar:"break و continue"},body:{en:"break exits a loop early; continue skips to the next round.",ar:"break بتوقف الحلقة بدري، و continue بتقفز للدورة الجاية."},code:`for (int i = 1; i <= 10; i++) {
  if (i == 5) break;
  if (i % 2 == 0) continue;
  printf("%d\\n", i);
}`},{t:{en:"Arrays / lists",ar:"المصفوفات والقوائم"},body:{en:"An array (list) stores many values in order under one name.",ar:"المصفوفة (القائمة) بتخزّن قيم كثيرة مرتّبة تحت اسم واحد."},code:`int nums[] = {10, 20, 30};
printf("%d\\n", nums[0]);
printf("%d\\n", nums[2]);`,sec:{en:"Collections",ar:"المجموعات"}},{t:{en:"Looping collections",ar:"المرور على المجموعات"},body:{en:"Loop over a collection to read or transform every item.",ar:"مُرّ على المجموعة لتقرأ أو تعدّل كل عنصر فيها."},code:`int nums[] = {1, 2, 3};
for (int i = 0; i < 3; i++) {
  printf("%d\\n", nums[i] * 2);
}`},{t:{en:"Maps / dictionaries",ar:"الخرائط والقواميس"},body:{en:"A map stores key → value pairs, so you can look up data instantly.",ar:"الخريطة بتخزّن أزواج مفتاح ← قيمة، فتقدر تجيب البيانات فوراً."},code:`// C has no built-in map; use parallel arrays
char *keys[] = {"name"};
char *vals[] = {"Sara"};
printf("%s = %s\\n", keys[0], vals[0]);`},{t:{en:"Functions",ar:"الدوال"},body:{en:"A function is a named, reusable block of code you can call again and again.",ar:"الدالة كتلة كود إلها اسم وقابلة لإعادة الاستخدام، تقدر تناديها مرّة بعد مرّة."},code:`void greet() {
  printf("Hello!\\n");
}
// greet();`,sec:{en:"Functions",ar:"الدوال"}},{t:{en:"Parameters & return",ar:"المعاملات والإرجاع"},body:{en:"Functions take inputs (parameters) and hand back a result (return value).",ar:"الدوال بتاخد مدخلات (معاملات) وبترجّع نتيجة (قيمة إرجاع)."},code:`int add(int a, int b) {
  return a + b;
}
// printf("%d", add(5, 3));`},{t:{en:"Scope",ar:"النطاق"},body:{en:"Scope decides where a variable can be seen — inside a function or everywhere.",ar:"النطاق بيحدد وين المتغيّر بيبان: جوّا الدالة أو بكل مكان."},code:`int total = 0; // global
void demo() {
  int local = 5; // local
  printf("%d\\n", local + total);
}`},{t:{en:"Recursion",ar:"الاستدعاء الذاتي"},body:{en:"A recursive function calls itself to break a big problem into smaller ones.",ar:"الدالة العَوْدية بتنادي حالها لتقسّم مشكلة كبيرة لمشاكل أصغر."},code:`int factorial(int n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
// factorial(5) => 120`},{t:{en:"Error handling",ar:"معالجة الأخطاء"},body:{en:"Catch errors so your program handles problems gracefully instead of crashing.",ar:"امسك الأخطاء لبرنامجك يتعامل مع المشاكل بهدوء بدل ما يوقع."},code:`#include <stdio.h>
FILE *f = fopen("x.txt", "r");
if (f == NULL) {
  printf("Error: file not found\\n");
}`,sec:{en:"Robust code",ar:"كود متين"}},{t:{en:"Classes & objects",ar:"الكلاسات والكائنات"},body:{en:"A class is a blueprint for objects that bundle related data and behavior.",ar:"الكلاس مخطّط للكائنات بيجمع البيانات والسلوك المترابطين."},code:`// C has structs (data groups), not classes
struct Dog { char name[20]; };
struct Dog d;
printf("struct ready\\n");`,sec:{en:"Objects (OOP)",ar:"الكائنات (OOP)"}},{t:{en:"Methods & properties",ar:"الدوال والخصائص"},body:{en:"Methods are functions that belong to an object and act on its data.",ar:"الدوال (methods) هي دوال تابعة للكائن وبتشتغل على بياناته."},code:`struct Counter { int count; };
void increment(struct Counter *c) { c->count++; }
struct Counter c = {0};
increment(&c);`},{t:{en:"Inheritance",ar:"الوراثة"},body:{en:"Inheritance lets one class reuse and extend another — write once, reuse often.",ar:"الوراثة بتخلّي كلاس يعيد استخدام كلاس ثاني ويوسّعه: اكتب مرّة، استخدم كثير."},code:`// C models "is-a" by embedding structs
struct Animal { int legs; };
struct Cat { struct Animal base; };
printf("composition\\n");`},{t:{en:"Mini project",ar:"مشروع صغير"},body:{en:"Combine the basics into a small working program of your own.",ar:"اجمع الأساسيات ببرنامج صغير شغّال من عندك."},code:`int cart[] = {10, 25, 5};
int total = 0;
for (int i = 0; i < 3; i++) total += cart[i];
printf("Total: $%d\\n", total);`,sec:{en:"Project",ar:"المشروع"}},{t:{en:"Final project + certificate",ar:"المشروع النهائي + الشهادة"},body:{en:"Build a final project that ties everything together. 🏆 Then claim your certificate!",ar:"ابنِ مشروع نهائي بيجمع كل شي تعلّمته. 🏆 وبعدها استلم شهادتك!",cert:!0},code:`char grade(int s) {
  if (s >= 90) return 'A';
  if (s >= 80) return 'B';
  return 'C';
}
// grade(95) => A`}]},php:{name:"PHP",icon:"🐘",lessons:[{t:{en:"Introduction & first program",ar:"مقدمة وأول برنامج"},body:{en:"<p><b>PHP</b> is a popular, powerful programming language. This course takes you from zero to your first project — one small step at a time. Here is the classic first program:",ar:"<p><b>PHP</b> لغة برمجة مشهورة وقوية. هذا الكورس بياخدك من الصفر لأول مشروع، خطوة صغيرة كل مرة. هذا أول برنامج تقليدي:"},code:`<?php
echo "Hello, World!";
?>`,sec:{en:"Basics",ar:"الأساسيات"}},{t:{en:"Printing output",ar:"طباعة المخرجات"},body:{en:"Printing text to the screen is how your program talks to you. Try changing the message.",ar:"طباعة النص على الشاشة هي طريقة برنامجك ليحكي معك. جرّب تغيّر الرسالة."},code:`<?php
echo "Learning PHP!\\n";
print("Also prints\\n");
?>`},{t:{en:"Comments",ar:"التعليقات"},body:{en:"Comments are notes for humans — PHP ignores them when it runs your code. Use them to explain your thinking.",ar:"التعليقات ملاحظات للبشر، وPHP بتتجاهلها وقت التشغيل. استخدمها لتشرح فكرتك."},code:`<?php
// single-line
# also single-line
/* multi-line */
echo "ok";
?>`},{t:{en:"Variables",ar:"المتغيرات"},body:{en:"A variable is a named box that stores a value you can reuse and change later.",ar:"المتغيّر صندوق له اسم بيخزّن قيمة تقدر تعيد استخدامها وتغيّرها لاحقاً."},code:`<?php
$name = "Sara";
$age = 20;
const PI = 3.14;
?>`},{t:{en:"Data types",ar:"أنواع البيانات"},body:{en:"Every value has a type: text, whole numbers, decimals, or true/false. The type decides what you can do with it.",ar:"كل قيمة إلها نوع: نص، أرقام صحيحة، أرقام عشرية، أو صح/خطأ. النوع بيحدد شو تقدر تعمل فيها."},code:`<?php
$s = "text";
$n = 42;
$d = 3.5;
$ok = true;
$list = [1, 2, 3];
?>`,sec:{en:"Data & values",ar:"البيانات والقيم"}},{t:{en:"Numbers & math",ar:"الأرقام والحساب"},body:{en:"You can add, subtract, multiply, divide and more. Programming is math you can see.",ar:"تقدر تجمع وتطرح وتضرب وتقسم وأكثر. البرمجة رياضيات بتشوفها قدامك."},code:`<?php
$a = 10; $b = 3;
echo $a + $b, "\\n";
echo intdiv($a, $b), "\\n";
echo $a % $b;
?>`},{t:{en:"Strings (text)",ar:"النصوص"},body:{en:"A string is a piece of text wrapped in quotes. You will use strings everywhere.",ar:"النص (string) عبارة عن كلام محاط بعلامات اقتباس. رح تستخدم النصوص بكل مكان."},code:`<?php
$city = "Amman";
echo strlen($city), "\\n";
echo strtoupper($city);
?>`},{t:{en:"Formatting strings",ar:"تنسيق النصوص"},body:{en:"Join and format strings to build dynamic messages from your data.",ar:"ادمج ونسّق النصوص لتبني رسائل ديناميكية من بياناتك."},code:`<?php
$name = "Sara"; $age = 20;
echo "$name is $age\\n";
echo $name . " is " . $age;
?>`},{t:{en:"Booleans (true/false)",ar:"القيم المنطقية"},body:{en:"A boolean is either true or false. Booleans are the heart of every decision your program makes.",ar:"القيمة المنطقية إمّا صح (true) أو خطأ (false)، وهي أساس كل قرار بياخده برنامجك."},code:`<?php
$isOpen = 5 > 3;
var_dump($isOpen);
var_dump(10 === 10);
?>`},{t:{en:"Operators",ar:"المعاملات"},body:{en:"Operators combine values: arithmetic (+ - * /), comparison (> < ==) and more.",ar:"المعاملات بتجمع القيم: حسابية (+ - * /)، ومقارنة (> < ==) وغيرها."},code:`<?php
echo 5 + 2, "\\n";
var_dump(5 > 2);
$x = 4; $x += 6;
echo $x;
?>`},{t:{en:"Reading input",ar:"قراءة المدخلات"},body:{en:"Read input from the user so your program can react to real data.",ar:"اقرأ مدخلات من المستخدم لبرنامجك يتفاعل مع بيانات حقيقية."},code:`<?php
$name = readline("Name? ");
echo "Hi $name";
?>`},{t:{en:"if / else",ar:"الشرط if / else"},body:{en:"if/else lets your program choose a path based on a condition.",ar:"الشرط if/else بيخلّي برنامجك يختار مسار حسب شرط معيّن."},code:`<?php
$age = 18;
if ($age >= 18) {
  echo "Adult";
} else {
  echo "Minor";
}
?>`,sec:{en:"Control flow",ar:"التحكم بالتدفق"}},{t:{en:"Logical operators",ar:"المعاملات المنطقية"},body:{en:"Combine conditions with AND, OR and NOT to express complex rules.",ar:"ادمج الشروط بـ AND و OR و NOT لتعبّر عن قواعد معقّدة."},code:`<?php
$age = 22; $member = true;
if ($age > 18 && $member) echo "Welcome";
if (!$member) echo "No";
?>`},{t:{en:"Many cases (switch)",ar:"حالات متعددة"},body:{en:"When you have many cases, a switch (or else-if chain) keeps code clean.",ar:"لمّا يكون عندك حالات كثيرة، الـ switch (أو سلسلة else-if) بتخلّي الكود مرتّب."},code:`<?php
$day = 3;
switch ($day) {
  case 1: echo "Mon"; break;
  case 3: echo "Wed"; break;
  default: echo "Other";
}
?>`},{t:{en:"while loops",ar:"حلقة while"},body:{en:"A while loop repeats as long as its condition stays true.",ar:"حلقة while بتكرّر طالما الشرط ضلّه صح."},code:`<?php
$i = 1;
while ($i <= 5) {
  echo $i, "\\n";
  $i++;
}
?>`},{t:{en:"for loops",ar:"حلقة for"},body:{en:"A for loop repeats a known number of times — perfect for counting.",ar:"حلقة for بتكرّر عدد معروف من المرّات، مثالية للعدّ."},code:`<?php
for ($i = 1; $i <= 5; $i++) {
  echo "Number $i\\n";
}
?>`},{t:{en:"break & continue",ar:"break و continue"},body:{en:"break exits a loop early; continue skips to the next round.",ar:"break بتوقف الحلقة بدري، و continue بتقفز للدورة الجاية."},code:`<?php
for ($i = 1; $i <= 10; $i++) {
  if ($i === 5) break;
  if ($i % 2 === 0) continue;
  echo $i, "\\n";
}
?>`},{t:{en:"Arrays / lists",ar:"المصفوفات والقوائم"},body:{en:"An array (list) stores many values in order under one name.",ar:"المصفوفة (القائمة) بتخزّن قيم كثيرة مرتّبة تحت اسم واحد."},code:`<?php
$fruits = ["apple", "banana", "cherry"];
echo $fruits[0], "\\n";
$fruits[] = "date";
?>`,sec:{en:"Collections",ar:"المجموعات"}},{t:{en:"Looping collections",ar:"المرور على المجموعات"},body:{en:"Loop over a collection to read or transform every item.",ar:"مُرّ على المجموعة لتقرأ أو تعدّل كل عنصر فيها."},code:`<?php
$nums = [1, 2, 3];
foreach ($nums as $n) {
  echo $n * 2, "\\n";
}
?>`},{t:{en:"Maps / dictionaries",ar:"الخرائط والقواميس"},body:{en:"A map stores key → value pairs, so you can look up data instantly.",ar:"الخريطة بتخزّن أزواج مفتاح ← قيمة، فتقدر تجيب البيانات فوراً."},code:`<?php
$user = ["name" => "Sara", "city" => "Amman"];
echo $user["name"];
?>`},{t:{en:"Functions",ar:"الدوال"},body:{en:"A function is a named, reusable block of code you can call again and again.",ar:"الدالة كتلة كود إلها اسم وقابلة لإعادة الاستخدام، تقدر تناديها مرّة بعد مرّة."},code:`<?php
function greet() {
  echo "Hello!";
}
greet();
?>`,sec:{en:"Functions",ar:"الدوال"}},{t:{en:"Parameters & return",ar:"المعاملات والإرجاع"},body:{en:"Functions take inputs (parameters) and hand back a result (return value).",ar:"الدوال بتاخد مدخلات (معاملات) وبترجّع نتيجة (قيمة إرجاع)."},code:`<?php
function add($a, $b) {
  return $a + $b;
}
echo add(5, 3);
?>`},{t:{en:"Scope",ar:"النطاق"},body:{en:"Scope decides where a variable can be seen — inside a function or everywhere.",ar:"النطاق بيحدد وين المتغيّر بيبان: جوّا الدالة أو بكل مكان."},code:`<?php
$total = 0; // global
function demo() {
  $local = 5;
  echo $local;
}
demo();
?>`},{t:{en:"Recursion",ar:"الاستدعاء الذاتي"},body:{en:"A recursive function calls itself to break a big problem into smaller ones.",ar:"الدالة العَوْدية بتنادي حالها لتقسّم مشكلة كبيرة لمشاكل أصغر."},code:`<?php
function factorial($n) {
  if ($n <= 1) return 1;
  return $n * factorial($n - 1);
}
echo factorial(5);
?>`},{t:{en:"Error handling",ar:"معالجة الأخطاء"},body:{en:"Catch errors so your program handles problems gracefully instead of crashing.",ar:"امسك الأخطاء لبرنامجك يتعامل مع المشاكل بهدوء بدل ما يوقع."},code:`<?php
try {
  throw new Exception("failed");
} catch (Exception $e) {
  echo "Caught: " . $e->getMessage();
}
?>`,sec:{en:"Robust code",ar:"كود متين"}},{t:{en:"Classes & objects",ar:"الكلاسات والكائنات"},body:{en:"A class is a blueprint for objects that bundle related data and behavior.",ar:"الكلاس مخطّط للكائنات بيجمع البيانات والسلوك المترابطين."},code:`<?php
class Dog {
  public $name;
  function __construct($name) { $this->name = $name; }
}
$d = new Dog("Rex");
echo $d->name;
?>`,sec:{en:"Objects (OOP)",ar:"الكائنات (OOP)"}},{t:{en:"Methods & properties",ar:"الدوال والخصائص"},body:{en:"Methods are functions that belong to an object and act on its data.",ar:"الدوال (methods) هي دوال تابعة للكائن وبتشتغل على بياناته."},code:`<?php
class Counter {
  public $count = 0;
  function increment() { $this->count++; }
}
$c = new Counter();
$c->increment();
?>`},{t:{en:"Inheritance",ar:"الوراثة"},body:{en:"Inheritance lets one class reuse and extend another — write once, reuse often.",ar:"الوراثة بتخلّي كلاس يعيد استخدام كلاس ثاني ويوسّعه: اكتب مرّة، استخدم كثير."},code:`<?php
class Animal { function speak() { echo "..."; } }
class Cat extends Animal { function speak() { echo "Meow"; } }
(new Cat())->speak();
?>`},{t:{en:"Mini project",ar:"مشروع صغير"},body:{en:"Combine the basics into a small working program of your own.",ar:"اجمع الأساسيات ببرنامج صغير شغّال من عندك."},code:`<?php
$cart = [10, 25, 5];
$total = array_sum($cart);
echo "Total: $" . $total;
?>`,sec:{en:"Project",ar:"المشروع"}},{t:{en:"Final project + certificate",ar:"المشروع النهائي + الشهادة"},body:{en:"Build a final project that ties everything together. 🏆 Then claim your certificate!",ar:"ابنِ مشروع نهائي بيجمع كل شي تعلّمته. 🏆 وبعدها استلم شهادتك!",cert:!0},code:`<?php
function grade($s) {
  if ($s >= 90) return "A";
  if ($s >= 80) return "B";
  return "C";
}
echo grade(95);
?>`}]},go:{name:"Go",icon:"🐹",lessons:[{t:{en:"Introduction & first program",ar:"مقدمة وأول برنامج"},body:{en:"<p><b>Go</b> is a popular, powerful programming language. This course takes you from zero to your first project — one small step at a time. Here is the classic first program:",ar:"<p><b>Go</b> لغة برمجة مشهورة وقوية. هذا الكورس بياخدك من الصفر لأول مشروع، خطوة صغيرة كل مرة. هذا أول برنامج تقليدي:"},code:`package main

import "fmt"

func main() {
  fmt.Println("Hello, World!")
}`,sec:{en:"Basics",ar:"الأساسيات"}},{t:{en:"Printing output",ar:"طباعة المخرجات"},body:{en:"Printing text to the screen is how your program talks to you. Try changing the message.",ar:"طباعة النص على الشاشة هي طريقة برنامجك ليحكي معك. جرّب تغيّر الرسالة."},code:`fmt.Println("Learning Go!")
fmt.Print("Same line ")
fmt.Println("here")`},{t:{en:"Comments",ar:"التعليقات"},body:{en:"Comments are notes for humans — Go ignores them when it runs your code. Use them to explain your thinking.",ar:"التعليقات ملاحظات للبشر، وGo بتتجاهلها وقت التشغيل. استخدمها لتشرح فكرتك."},code:`// single-line comment
/* multi-line comment */
fmt.Println("Comments ignored")`},{t:{en:"Variables",ar:"المتغيرات"},body:{en:"A variable is a named box that stores a value you can reuse and change later.",ar:"المتغيّر صندوق له اسم بيخزّن قيمة تقدر تعيد استخدامها وتغيّرها لاحقاً."},code:`name := "Sara"
age := 20
const pi = 3.14
fmt.Println(name, age)`},{t:{en:"Data types",ar:"أنواع البيانات"},body:{en:"Every value has a type: text, whole numbers, decimals, or true/false. The type decides what you can do with it.",ar:"كل قيمة إلها نوع: نص، أرقام صحيحة، أرقام عشرية، أو صح/خطأ. النوع بيحدد شو تقدر تعمل فيها."},code:`var s string = "text"
var n int = 42
var d float64 = 3.5
var ok bool = true
fmt.Println(s, n, d, ok)`,sec:{en:"Data & values",ar:"البيانات والقيم"}},{t:{en:"Numbers & math",ar:"الأرقام والحساب"},body:{en:"You can add, subtract, multiply, divide and more. Programming is math you can see.",ar:"تقدر تجمع وتطرح وتضرب وتقسم وأكثر. البرمجة رياضيات بتشوفها قدامك."},code:`a, b := 10, 3
fmt.Println(a + b)
fmt.Println(a / b)
fmt.Println(a % b)`},{t:{en:"Strings (text)",ar:"النصوص"},body:{en:"A string is a piece of text wrapped in quotes. You will use strings everywhere.",ar:"النص (string) عبارة عن كلام محاط بعلامات اقتباس. رح تستخدم النصوص بكل مكان."},code:`city := "Amman"
fmt.Println(len(city))
import "strings"
fmt.Println(strings.ToUpper(city))`},{t:{en:"Formatting strings",ar:"تنسيق النصوص"},body:{en:"Join and format strings to build dynamic messages from your data.",ar:"ادمج ونسّق النصوص لتبني رسائل ديناميكية من بياناتك."},code:`name, age := "Sara", 20
fmt.Println(name, "is", age)
fmt.Printf("%s is %d\\n", name, age)`},{t:{en:"Booleans (true/false)",ar:"القيم المنطقية"},body:{en:"A boolean is either true or false. Booleans are the heart of every decision your program makes.",ar:"القيمة المنطقية إمّا صح (true) أو خطأ (false)، وهي أساس كل قرار بياخده برنامجك."},code:`isOpen := 5 > 3
fmt.Println(isOpen)
fmt.Println(10 == 10)`},{t:{en:"Operators",ar:"المعاملات"},body:{en:"Operators combine values: arithmetic (+ - * /), comparison (> < ==) and more.",ar:"المعاملات بتجمع القيم: حسابية (+ - * /)، ومقارنة (> < ==) وغيرها."},code:`fmt.Println(5 + 2)
fmt.Println(5 > 2)
x := 4
x += 6
fmt.Println(x)`},{t:{en:"Reading input",ar:"قراءة المدخلات"},body:{en:"Read input from the user so your program can react to real data.",ar:"اقرأ مدخلات من المستخدم لبرنامجك يتفاعل مع بيانات حقيقية."},code:`var name string
fmt.Print("Name? ")
fmt.Scanln(&name)
fmt.Println("Hi", name)`},{t:{en:"if / else",ar:"الشرط if / else"},body:{en:"if/else lets your program choose a path based on a condition.",ar:"الشرط if/else بيخلّي برنامجك يختار مسار حسب شرط معيّن."},code:`age := 18
if age >= 18 {
  fmt.Println("Adult")
} else {
  fmt.Println("Minor")
}`,sec:{en:"Control flow",ar:"التحكم بالتدفق"}},{t:{en:"Logical operators",ar:"المعاملات المنطقية"},body:{en:"Combine conditions with AND, OR and NOT to express complex rules.",ar:"ادمج الشروط بـ AND و OR و NOT لتعبّر عن قواعد معقّدة."},code:`age, member := 22, true
if age > 18 && member {
  fmt.Println("Welcome")
}
if !member {
  fmt.Println("No")
}`},{t:{en:"Many cases (switch)",ar:"حالات متعددة"},body:{en:"When you have many cases, a switch (or else-if chain) keeps code clean.",ar:"لمّا يكون عندك حالات كثيرة، الـ switch (أو سلسلة else-if) بتخلّي الكود مرتّب."},code:`day := 3
switch day {
case 1:
  fmt.Println("Mon")
case 3:
  fmt.Println("Wed")
default:
  fmt.Println("Other")
}`},{t:{en:"while loops",ar:"حلقة while"},body:{en:"A while loop repeats as long as its condition stays true.",ar:"حلقة while بتكرّر طالما الشرط ضلّه صح."},code:`i := 1
for i <= 5 { // Go uses for as while
  fmt.Println(i)
  i++
}`},{t:{en:"for loops",ar:"حلقة for"},body:{en:"A for loop repeats a known number of times — perfect for counting.",ar:"حلقة for بتكرّر عدد معروف من المرّات، مثالية للعدّ."},code:`for i := 1; i <= 5; i++ {
  fmt.Println("Number", i)
}`},{t:{en:"break & continue",ar:"break و continue"},body:{en:"break exits a loop early; continue skips to the next round.",ar:"break بتوقف الحلقة بدري، و continue بتقفز للدورة الجاية."},code:`for i := 1; i <= 10; i++ {
  if i == 5 { break }
  if i%2 == 0 { continue }
  fmt.Println(i)
}`},{t:{en:"Arrays / lists",ar:"المصفوفات والقوائم"},body:{en:"An array (list) stores many values in order under one name.",ar:"المصفوفة (القائمة) بتخزّن قيم كثيرة مرتّبة تحت اسم واحد."},code:`fruits := []string{"apple", "banana", "cherry"}
fmt.Println(fruits[0])
fruits = append(fruits, "date")`,sec:{en:"Collections",ar:"المجموعات"}},{t:{en:"Looping collections",ar:"المرور على المجموعات"},body:{en:"Loop over a collection to read or transform every item.",ar:"مُرّ على المجموعة لتقرأ أو تعدّل كل عنصر فيها."},code:`nums := []int{1, 2, 3}
for _, n := range nums {
  fmt.Println(n * 2)
}`},{t:{en:"Maps / dictionaries",ar:"الخرائط والقواميس"},body:{en:"A map stores key → value pairs, so you can look up data instantly.",ar:"الخريطة بتخزّن أزواج مفتاح ← قيمة، فتقدر تجيب البيانات فوراً."},code:`user := map[string]string{"name": "Sara"}
fmt.Println(user["name"])
user["city"] = "Amman"`},{t:{en:"Functions",ar:"الدوال"},body:{en:"A function is a named, reusable block of code you can call again and again.",ar:"الدالة كتلة كود إلها اسم وقابلة لإعادة الاستخدام، تقدر تناديها مرّة بعد مرّة."},code:`func greet() {
  fmt.Println("Hello!")
}
// greet()`,sec:{en:"Functions",ar:"الدوال"}},{t:{en:"Parameters & return",ar:"المعاملات والإرجاع"},body:{en:"Functions take inputs (parameters) and hand back a result (return value).",ar:"الدوال بتاخد مدخلات (معاملات) وبترجّع نتيجة (قيمة إرجاع)."},code:`func add(a, b int) int {
  return a + b
}
// fmt.Println(add(5, 3))`},{t:{en:"Scope",ar:"النطاق"},body:{en:"Scope decides where a variable can be seen — inside a function or everywhere.",ar:"النطاق بيحدد وين المتغيّر بيبان: جوّا الدالة أو بكل مكان."},code:`var total = 0 // package scope
func demo() {
  local := 5 // function scope
  fmt.Println(local + total)
}`},{t:{en:"Recursion",ar:"الاستدعاء الذاتي"},body:{en:"A recursive function calls itself to break a big problem into smaller ones.",ar:"الدالة العَوْدية بتنادي حالها لتقسّم مشكلة كبيرة لمشاكل أصغر."},code:`func factorial(n int) int {
  if n <= 1 { return 1 }
  return n * factorial(n-1)
}
// factorial(5) => 120`},{t:{en:"Error handling",ar:"معالجة الأخطاء"},body:{en:"Catch errors so your program handles problems gracefully instead of crashing.",ar:"امسك الأخطاء لبرنامجك يتعامل مع المشاكل بهدوء بدل ما يوقع."},code:`import "errors"
func div(a, b int) (int, error) {
  if b == 0 { return 0, errors.New("divide by zero") }
  return a / b, nil
}`,sec:{en:"Robust code",ar:"كود متين"}},{t:{en:"Classes & objects",ar:"الكلاسات والكائنات"},body:{en:"A class is a blueprint for objects that bundle related data and behavior.",ar:"الكلاس مخطّط للكائنات بيجمع البيانات والسلوك المترابطين."},code:`type Dog struct {
  Name string
}
d := Dog{Name: "Rex"}
fmt.Println(d.Name)`,sec:{en:"Objects (OOP)",ar:"الكائنات (OOP)"}},{t:{en:"Methods & properties",ar:"الدوال والخصائص"},body:{en:"Methods are functions that belong to an object and act on its data.",ar:"الدوال (methods) هي دوال تابعة للكائن وبتشتغل على بياناته."},code:`type Counter struct { count int }
func (c *Counter) Increment() { c.count++ }
c := Counter{}
c.Increment()`},{t:{en:"Inheritance",ar:"الوراثة"},body:{en:"Inheritance lets one class reuse and extend another — write once, reuse often.",ar:"الوراثة بتخلّي كلاس يعيد استخدام كلاس ثاني ويوسّعه: اكتب مرّة، استخدم كثير."},code:`type Animal struct{}
func (a Animal) Speak() { fmt.Println("...") }
type Cat struct { Animal } // embedding
Cat{}.Speak()`},{t:{en:"Mini project",ar:"مشروع صغير"},body:{en:"Combine the basics into a small working program of your own.",ar:"اجمع الأساسيات ببرنامج صغير شغّال من عندك."},code:`cart := []int{10, 25, 5}
total := 0
for _, p := range cart { total += p }
fmt.Println("Total: $", total)`,sec:{en:"Project",ar:"المشروع"}},{t:{en:"Final project + certificate",ar:"المشروع النهائي + الشهادة"},body:{en:"Build a final project that ties everything together. 🏆 Then claim your certificate!",ar:"ابنِ مشروع نهائي بيجمع كل شي تعلّمته. 🏆 وبعدها استلم شهادتك!",cert:!0},code:`func grade(s int) string {
  if s >= 90 { return "A" }
  if s >= 80 { return "B" }
  return "C"
}
// grade(95) => A`}]},ruby:{name:"Ruby",icon:"💎",lessons:[{t:{en:"Introduction & first program",ar:"مقدمة وأول برنامج"},body:{en:"<p><b>Ruby</b> is a popular, powerful programming language. This course takes you from zero to your first project — one small step at a time. Here is the classic first program:",ar:"<p><b>Ruby</b> لغة برمجة مشهورة وقوية. هذا الكورس بياخدك من الصفر لأول مشروع، خطوة صغيرة كل مرة. هذا أول برنامج تقليدي:"},code:'puts "Hello, World!"',sec:{en:"Basics",ar:"الأساسيات"}},{t:{en:"Printing output",ar:"طباعة المخرجات"},body:{en:"Printing text to the screen is how your program talks to you. Try changing the message.",ar:"طباعة النص على الشاشة هي طريقة برنامجك ليحكي معك. جرّب تغيّر الرسالة."},code:`puts "Learning Ruby!"
print "Same line "
puts "here"`},{t:{en:"Comments",ar:"التعليقات"},body:{en:"Comments are notes for humans — Ruby ignores them when it runs your code. Use them to explain your thinking.",ar:"التعليقات ملاحظات للبشر، وRuby بتتجاهلها وقت التشغيل. استخدمها لتشرح فكرتك."},code:`# single-line comment
=begin
multi-line comment
=end
puts "Comments ignored"`},{t:{en:"Variables",ar:"المتغيرات"},body:{en:"A variable is a named box that stores a value you can reuse and change later.",ar:"المتغيّر صندوق له اسم بيخزّن قيمة تقدر تعيد استخدامها وتغيّرها لاحقاً."},code:`name = "Sara"
age = 20
PI = 3.14 # constant (capitalized)
puts name`},{t:{en:"Data types",ar:"أنواع البيانات"},body:{en:"Every value has a type: text, whole numbers, decimals, or true/false. The type decides what you can do with it.",ar:"كل قيمة إلها نوع: نص، أرقام صحيحة، أرقام عشرية، أو صح/خطأ. النوع بيحدد شو تقدر تعمل فيها."},code:`s = "text"
n = 42
d = 3.5
ok = true
list = [1, 2, 3]
puts s.class`,sec:{en:"Data & values",ar:"البيانات والقيم"}},{t:{en:"Numbers & math",ar:"الأرقام والحساب"},body:{en:"You can add, subtract, multiply, divide and more. Programming is math you can see.",ar:"تقدر تجمع وتطرح وتضرب وتقسم وأكثر. البرمجة رياضيات بتشوفها قدامك."},code:`a, b = 10, 3
puts a + b
puts a / b
puts a % b`},{t:{en:"Strings (text)",ar:"النصوص"},body:{en:"A string is a piece of text wrapped in quotes. You will use strings everywhere.",ar:"النص (string) عبارة عن كلام محاط بعلامات اقتباس. رح تستخدم النصوص بكل مكان."},code:`city = "Amman"
puts city.length
puts city.upcase`},{t:{en:"Formatting strings",ar:"تنسيق النصوص"},body:{en:"Join and format strings to build dynamic messages from your data.",ar:"ادمج ونسّق النصوص لتبني رسائل ديناميكية من بياناتك."},code:`name, age = "Sara", 20
puts "#{name} is #{age}"
puts name + " is " + age.to_s`},{t:{en:"Booleans (true/false)",ar:"القيم المنطقية"},body:{en:"A boolean is either true or false. Booleans are the heart of every decision your program makes.",ar:"القيمة المنطقية إمّا صح (true) أو خطأ (false)، وهي أساس كل قرار بياخده برنامجك."},code:`is_open = 5 > 3
puts is_open
puts 10 == 10`},{t:{en:"Operators",ar:"المعاملات"},body:{en:"Operators combine values: arithmetic (+ - * /), comparison (> < ==) and more.",ar:"المعاملات بتجمع القيم: حسابية (+ - * /)، ومقارنة (> < ==) وغيرها."},code:`puts 5 + 2
puts 5 > 2
x = 4
x += 6
puts x`},{t:{en:"Reading input",ar:"قراءة المدخلات"},body:{en:"Read input from the user so your program can react to real data.",ar:"اقرأ مدخلات من المستخدم لبرنامجك يتفاعل مع بيانات حقيقية."},code:`print "Name? "
name = gets.chomp
puts "Hi #{name}"`},{t:{en:"if / else",ar:"الشرط if / else"},body:{en:"if/else lets your program choose a path based on a condition.",ar:"الشرط if/else بيخلّي برنامجك يختار مسار حسب شرط معيّن."},code:`age = 18
if age >= 18
  puts "Adult"
else
  puts "Minor"
end`,sec:{en:"Control flow",ar:"التحكم بالتدفق"}},{t:{en:"Logical operators",ar:"المعاملات المنطقية"},body:{en:"Combine conditions with AND, OR and NOT to express complex rules.",ar:"ادمج الشروط بـ AND و OR و NOT لتعبّر عن قواعد معقّدة."},code:`age, member = 22, true
puts "Welcome" if age > 18 && member
puts "No" unless member`},{t:{en:"Many cases (switch)",ar:"حالات متعددة"},body:{en:"When you have many cases, a switch (or else-if chain) keeps code clean.",ar:"لمّا يكون عندك حالات كثيرة، الـ switch (أو سلسلة else-if) بتخلّي الكود مرتّب."},code:`day = 3
case day
when 1 then puts "Mon"
when 3 then puts "Wed"
else puts "Other"
end`},{t:{en:"while loops",ar:"حلقة while"},body:{en:"A while loop repeats as long as its condition stays true.",ar:"حلقة while بتكرّر طالما الشرط ضلّه صح."},code:`i = 1
while i <= 5
  puts i
  i += 1
end`},{t:{en:"for loops",ar:"حلقة for"},body:{en:"A for loop repeats a known number of times — perfect for counting.",ar:"حلقة for بتكرّر عدد معروف من المرّات، مثالية للعدّ."},code:`(1..5).each do |i|
  puts "Number #{i}"
end`},{t:{en:"break & continue",ar:"break و continue"},body:{en:"break exits a loop early; continue skips to the next round.",ar:"break بتوقف الحلقة بدري، و continue بتقفز للدورة الجاية."},code:`(1..10).each do |i|
  break if i == 5
  next if i.even?
  puts i
end`},{t:{en:"Arrays / lists",ar:"المصفوفات والقوائم"},body:{en:"An array (list) stores many values in order under one name.",ar:"المصفوفة (القائمة) بتخزّن قيم كثيرة مرتّبة تحت اسم واحد."},code:`fruits = ["apple", "banana", "cherry"]
puts fruits[0]
fruits << "date"`,sec:{en:"Collections",ar:"المجموعات"}},{t:{en:"Looping collections",ar:"المرور على المجموعات"},body:{en:"Loop over a collection to read or transform every item.",ar:"مُرّ على المجموعة لتقرأ أو تعدّل كل عنصر فيها."},code:`nums = [1, 2, 3]
nums.each { |n| puts n * 2 }
puts nums.map { |n| n * 2 }.inspect`},{t:{en:"Maps / dictionaries",ar:"الخرائط والقواميس"},body:{en:"A map stores key → value pairs, so you can look up data instantly.",ar:"الخريطة بتخزّن أزواج مفتاح ← قيمة، فتقدر تجيب البيانات فوراً."},code:`user = { name: "Sara", city: "Amman" }
puts user[:name]`},{t:{en:"Functions",ar:"الدوال"},body:{en:"A function is a named, reusable block of code you can call again and again.",ar:"الدالة كتلة كود إلها اسم وقابلة لإعادة الاستخدام، تقدر تناديها مرّة بعد مرّة."},code:`def greet
  puts "Hello!"
end
greet`,sec:{en:"Functions",ar:"الدوال"}},{t:{en:"Parameters & return",ar:"المعاملات والإرجاع"},body:{en:"Functions take inputs (parameters) and hand back a result (return value).",ar:"الدوال بتاخد مدخلات (معاملات) وبترجّع نتيجة (قيمة إرجاع)."},code:`def add(a, b)
  a + b
end
puts add(5, 3)`},{t:{en:"Scope",ar:"النطاق"},body:{en:"Scope decides where a variable can be seen — inside a function or everywhere.",ar:"النطاق بيحدد وين المتغيّر بيبان: جوّا الدالة أو بكل مكان."},code:`$total = 0 # global
def demo
  local = 5
  puts local
end
demo`},{t:{en:"Recursion",ar:"الاستدعاء الذاتي"},body:{en:"A recursive function calls itself to break a big problem into smaller ones.",ar:"الدالة العَوْدية بتنادي حالها لتقسّم مشكلة كبيرة لمشاكل أصغر."},code:`def factorial(n)
  return 1 if n <= 1
  n * factorial(n - 1)
end
puts factorial(5)`},{t:{en:"Error handling",ar:"معالجة الأخطاء"},body:{en:"Catch errors so your program handles problems gracefully instead of crashing.",ar:"امسك الأخطاء لبرنامجك يتعامل مع المشاكل بهدوء بدل ما يوقع."},code:`begin
  raise "failed"
rescue => e
  puts "Caught: #{e.message}"
end`,sec:{en:"Robust code",ar:"كود متين"}},{t:{en:"Classes & objects",ar:"الكلاسات والكائنات"},body:{en:"A class is a blueprint for objects that bundle related data and behavior.",ar:"الكلاس مخطّط للكائنات بيجمع البيانات والسلوك المترابطين."},code:`class Dog
  def initialize(name)
    @name = name
  end
  attr_reader :name
end
puts Dog.new("Rex").name`,sec:{en:"Objects (OOP)",ar:"الكائنات (OOP)"}},{t:{en:"Methods & properties",ar:"الدوال والخصائص"},body:{en:"Methods are functions that belong to an object and act on its data.",ar:"الدوال (methods) هي دوال تابعة للكائن وبتشتغل على بياناته."},code:`class Counter
  def initialize; @count = 0; end
  def increment; @count += 1; end
end
Counter.new.increment`},{t:{en:"Inheritance",ar:"الوراثة"},body:{en:"Inheritance lets one class reuse and extend another — write once, reuse often.",ar:"الوراثة بتخلّي كلاس يعيد استخدام كلاس ثاني ويوسّعه: اكتب مرّة، استخدم كثير."},code:`class Animal
  def speak; puts "..."; end
end
class Cat < Animal
  def speak; puts "Meow"; end
end
Cat.new.speak`},{t:{en:"Mini project",ar:"مشروع صغير"},body:{en:"Combine the basics into a small working program of your own.",ar:"اجمع الأساسيات ببرنامج صغير شغّال من عندك."},code:`cart = [10, 25, 5]
total = cart.sum
puts "Total: $#{total}"`,sec:{en:"Project",ar:"المشروع"}},{t:{en:"Final project + certificate",ar:"المشروع النهائي + الشهادة"},body:{en:"Build a final project that ties everything together. 🏆 Then claim your certificate!",ar:"ابنِ مشروع نهائي بيجمع كل شي تعلّمته. 🏆 وبعدها استلم شهادتك!",cert:!0},code:`def grade(s)
  return "A" if s >= 90
  return "B" if s >= 80
  "C"
end
puts grade(95)`}]},rust:{name:"Rust",icon:"🦀",lessons:[{t:{en:"Introduction & first program",ar:"مقدمة وأول برنامج"},body:{en:"<p><b>Rust</b> is a popular, powerful programming language. This course takes you from zero to your first project — one small step at a time. Here is the classic first program:",ar:"<p><b>Rust</b> لغة برمجة مشهورة وقوية. هذا الكورس بياخدك من الصفر لأول مشروع، خطوة صغيرة كل مرة. هذا أول برنامج تقليدي:"},code:`fn main() {
  println!("Hello, World!");
}`,sec:{en:"Basics",ar:"الأساسيات"}},{t:{en:"Printing output",ar:"طباعة المخرجات"},body:{en:"Printing text to the screen is how your program talks to you. Try changing the message.",ar:"طباعة النص على الشاشة هي طريقة برنامجك ليحكي معك. جرّب تغيّر الرسالة."},code:`println!("Learning Rust!");
print!("Same line ");
println!("here");`},{t:{en:"Comments",ar:"التعليقات"},body:{en:"Comments are notes for humans — Rust ignores them when it runs your code. Use them to explain your thinking.",ar:"التعليقات ملاحظات للبشر، وRust بتتجاهلها وقت التشغيل. استخدمها لتشرح فكرتك."},code:`// single-line comment
/* multi-line comment */
println!("Comments ignored");`},{t:{en:"Variables",ar:"المتغيرات"},body:{en:"A variable is a named box that stores a value you can reuse and change later.",ar:"المتغيّر صندوق له اسم بيخزّن قيمة تقدر تعيد استخدامها وتغيّرها لاحقاً."},code:`let name = "Sara";
let age = 20;
let mut score = 0; // mut = changeable
score += 5;`},{t:{en:"Data types",ar:"أنواع البيانات"},body:{en:"Every value has a type: text, whole numbers, decimals, or true/false. The type decides what you can do with it.",ar:"كل قيمة إلها نوع: نص، أرقام صحيحة، أرقام عشرية، أو صح/خطأ. النوع بيحدد شو تقدر تعمل فيها."},code:`let s: &str = "text";
let n: i32 = 42;
let d: f64 = 3.5;
let ok: bool = true;
println!("{} {} {} {}", s, n, d, ok);`,sec:{en:"Data & values",ar:"البيانات والقيم"}},{t:{en:"Numbers & math",ar:"الأرقام والحساب"},body:{en:"You can add, subtract, multiply, divide and more. Programming is math you can see.",ar:"تقدر تجمع وتطرح وتضرب وتقسم وأكثر. البرمجة رياضيات بتشوفها قدامك."},code:`let a = 10; let b = 3;
println!("{}", a + b);
println!("{}", a / b);
println!("{}", a % b);`},{t:{en:"Strings (text)",ar:"النصوص"},body:{en:"A string is a piece of text wrapped in quotes. You will use strings everywhere.",ar:"النص (string) عبارة عن كلام محاط بعلامات اقتباس. رح تستخدم النصوص بكل مكان."},code:`let city = String::from("Amman");
println!("{}", city.len());
println!("{}", city.to_uppercase());`},{t:{en:"Formatting strings",ar:"تنسيق النصوص"},body:{en:"Join and format strings to build dynamic messages from your data.",ar:"ادمج ونسّق النصوص لتبني رسائل ديناميكية من بياناتك."},code:`let name = "Sara";
let age = 20;
println!("{} is {}", name, age);`},{t:{en:"Booleans (true/false)",ar:"القيم المنطقية"},body:{en:"A boolean is either true or false. Booleans are the heart of every decision your program makes.",ar:"القيمة المنطقية إمّا صح (true) أو خطأ (false)، وهي أساس كل قرار بياخده برنامجك."},code:`let is_open = 5 > 3;
println!("{}", is_open);
println!("{}", 10 == 10);`},{t:{en:"Operators",ar:"المعاملات"},body:{en:"Operators combine values: arithmetic (+ - * /), comparison (> < ==) and more.",ar:"المعاملات بتجمع القيم: حسابية (+ - * /)، ومقارنة (> < ==) وغيرها."},code:`println!("{}", 5 + 2);
println!("{}", 5 > 2);
let mut x = 4;
x += 6;
println!("{}", x);`},{t:{en:"Reading input",ar:"قراءة المدخلات"},body:{en:"Read input from the user so your program can react to real data.",ar:"اقرأ مدخلات من المستخدم لبرنامجك يتفاعل مع بيانات حقيقية."},code:`use std::io;
let mut name = String::new();
io::stdin().read_line(&mut name).unwrap();
println!("Hi {}", name.trim());`},{t:{en:"if / else",ar:"الشرط if / else"},body:{en:"if/else lets your program choose a path based on a condition.",ar:"الشرط if/else بيخلّي برنامجك يختار مسار حسب شرط معيّن."},code:`let age = 18;
if age >= 18 {
  println!("Adult");
} else {
  println!("Minor");
}`,sec:{en:"Control flow",ar:"التحكم بالتدفق"}},{t:{en:"Logical operators",ar:"المعاملات المنطقية"},body:{en:"Combine conditions with AND, OR and NOT to express complex rules.",ar:"ادمج الشروط بـ AND و OR و NOT لتعبّر عن قواعد معقّدة."},code:`let age = 22;
let member = true;
if age > 18 && member { println!("Welcome"); }
if !member { println!("No"); }`},{t:{en:"Many cases (switch)",ar:"حالات متعددة"},body:{en:"When you have many cases, a switch (or else-if chain) keeps code clean.",ar:"لمّا يكون عندك حالات كثيرة، الـ switch (أو سلسلة else-if) بتخلّي الكود مرتّب."},code:`let day = 3;
match day {
  1 => println!("Mon"),
  3 => println!("Wed"),
  _ => println!("Other"),
}`},{t:{en:"while loops",ar:"حلقة while"},body:{en:"A while loop repeats as long as its condition stays true.",ar:"حلقة while بتكرّر طالما الشرط ضلّه صح."},code:`let mut i = 1;
while i <= 5 {
  println!("{}", i);
  i += 1;
}`},{t:{en:"for loops",ar:"حلقة for"},body:{en:"A for loop repeats a known number of times — perfect for counting.",ar:"حلقة for بتكرّر عدد معروف من المرّات، مثالية للعدّ."},code:`for i in 1..=5 {
  println!("Number {}", i);
}`},{t:{en:"break & continue",ar:"break و continue"},body:{en:"break exits a loop early; continue skips to the next round.",ar:"break بتوقف الحلقة بدري، و continue بتقفز للدورة الجاية."},code:`for i in 1..=10 {
  if i == 5 { break; }
  if i % 2 == 0 { continue; }
  println!("{}", i);
}`},{t:{en:"Arrays / lists",ar:"المصفوفات والقوائم"},body:{en:"An array (list) stores many values in order under one name.",ar:"المصفوفة (القائمة) بتخزّن قيم كثيرة مرتّبة تحت اسم واحد."},code:`let fruits = ["apple", "banana", "cherry"];
println!("{}", fruits[0]);
println!("{}", fruits.len());`,sec:{en:"Collections",ar:"المجموعات"}},{t:{en:"Looping collections",ar:"المرور على المجموعات"},body:{en:"Loop over a collection to read or transform every item.",ar:"مُرّ على المجموعة لتقرأ أو تعدّل كل عنصر فيها."},code:`let nums = [1, 2, 3];
for n in nums.iter() {
  println!("{}", n * 2);
}`},{t:{en:"Maps / dictionaries",ar:"الخرائط والقواميس"},body:{en:"A map stores key → value pairs, so you can look up data instantly.",ar:"الخريطة بتخزّن أزواج مفتاح ← قيمة، فتقدر تجيب البيانات فوراً."},code:`use std::collections::HashMap;
let mut user = HashMap::new();
user.insert("name", "Sara");
println!("{}", user["name"]);`},{t:{en:"Functions",ar:"الدوال"},body:{en:"A function is a named, reusable block of code you can call again and again.",ar:"الدالة كتلة كود إلها اسم وقابلة لإعادة الاستخدام، تقدر تناديها مرّة بعد مرّة."},code:`fn greet() {
  println!("Hello!");
}
// greet();`,sec:{en:"Functions",ar:"الدوال"}},{t:{en:"Parameters & return",ar:"المعاملات والإرجاع"},body:{en:"Functions take inputs (parameters) and hand back a result (return value).",ar:"الدوال بتاخد مدخلات (معاملات) وبترجّع نتيجة (قيمة إرجاع)."},code:`fn add(a: i32, b: i32) -> i32 {
  a + b
}
// println!("{}", add(5, 3));`},{t:{en:"Scope",ar:"النطاق"},body:{en:"Scope decides where a variable can be seen — inside a function or everywhere.",ar:"النطاق بيحدد وين المتغيّر بيبان: جوّا الدالة أو بكل مكان."},code:`fn demo() {
  let local = 5; // scoped to function
  println!("{}", local);
}
demo();`},{t:{en:"Recursion",ar:"الاستدعاء الذاتي"},body:{en:"A recursive function calls itself to break a big problem into smaller ones.",ar:"الدالة العَوْدية بتنادي حالها لتقسّم مشكلة كبيرة لمشاكل أصغر."},code:`fn factorial(n: u64) -> u64 {
  if n <= 1 { 1 } else { n * factorial(n - 1) }
}
// factorial(5) => 120`},{t:{en:"Error handling",ar:"معالجة الأخطاء"},body:{en:"Catch errors so your program handles problems gracefully instead of crashing.",ar:"امسك الأخطاء لبرنامجك يتعامل مع المشاكل بهدوء بدل ما يوقع."},code:`fn div(a: i32, b: i32) -> Result<i32, String> {
  if b == 0 { return Err("divide by zero".into()); }
  Ok(a / b)
}`,sec:{en:"Robust code",ar:"كود متين"}},{t:{en:"Classes & objects",ar:"الكلاسات والكائنات"},body:{en:"A class is a blueprint for objects that bundle related data and behavior.",ar:"الكلاس مخطّط للكائنات بيجمع البيانات والسلوك المترابطين."},code:`struct Dog {
  name: String,
}
let d = Dog { name: String::from("Rex") };
println!("{}", d.name);`,sec:{en:"Objects (OOP)",ar:"الكائنات (OOP)"}},{t:{en:"Methods & properties",ar:"الدوال والخصائص"},body:{en:"Methods are functions that belong to an object and act on its data.",ar:"الدوال (methods) هي دوال تابعة للكائن وبتشتغل على بياناته."},code:`struct Counter { count: i32 }
impl Counter {
  fn increment(&mut self) { self.count += 1; }
}`},{t:{en:"Inheritance",ar:"الوراثة"},body:{en:"Inheritance lets one class reuse and extend another — write once, reuse often.",ar:"الوراثة بتخلّي كلاس يعيد استخدام كلاس ثاني ويوسّعه: اكتب مرّة، استخدم كثير."},code:`trait Animal { fn speak(&self); }
struct Cat;
impl Animal for Cat {
  fn speak(&self) { println!("Meow"); }
}`},{t:{en:"Mini project",ar:"مشروع صغير"},body:{en:"Combine the basics into a small working program of your own.",ar:"اجمع الأساسيات ببرنامج صغير شغّال من عندك."},code:`let cart = [10, 25, 5];
let total: i32 = cart.iter().sum();
println!("Total: \${}", total);`,sec:{en:"Project",ar:"المشروع"}},{t:{en:"Final project + certificate",ar:"المشروع النهائي + الشهادة"},body:{en:"Build a final project that ties everything together. 🏆 Then claim your certificate!",ar:"ابنِ مشروع نهائي بيجمع كل شي تعلّمته. 🏆 وبعدها استلم شهادتك!",cert:!0},code:`fn grade(s: i32) -> &'static str {
  if s >= 90 { "A" } else if s >= 80 { "B" } else { "C" }
}
// grade(95) => A`}]},kotlin:{name:"Kotlin",icon:"🟪",lessons:[{t:{en:"Introduction & first program",ar:"مقدمة وأول برنامج"},body:{en:"<p><b>Kotlin</b> is a popular, powerful programming language. This course takes you from zero to your first project — one small step at a time. Here is the classic first program:",ar:"<p><b>Kotlin</b> لغة برمجة مشهورة وقوية. هذا الكورس بياخدك من الصفر لأول مشروع، خطوة صغيرة كل مرة. هذا أول برنامج تقليدي:"},code:`fun main() {
  println("Hello, World!")
}`,sec:{en:"Basics",ar:"الأساسيات"}},{t:{en:"Printing output",ar:"طباعة المخرجات"},body:{en:"Printing text to the screen is how your program talks to you. Try changing the message.",ar:"طباعة النص على الشاشة هي طريقة برنامجك ليحكي معك. جرّب تغيّر الرسالة."},code:`println("Learning Kotlin!")
print("Same line ")
println("here")`},{t:{en:"Comments",ar:"التعليقات"},body:{en:"Comments are notes for humans — Kotlin ignores them when it runs your code. Use them to explain your thinking.",ar:"التعليقات ملاحظات للبشر، وKotlin بتتجاهلها وقت التشغيل. استخدمها لتشرح فكرتك."},code:`// single-line comment
/* multi-line comment */
println("Comments ignored")`},{t:{en:"Variables",ar:"المتغيرات"},body:{en:"A variable is a named box that stores a value you can reuse and change later.",ar:"المتغيّر صندوق له اسم بيخزّن قيمة تقدر تعيد استخدامها وتغيّرها لاحقاً."},code:`val name = "Sara" // val = fixed
var age = 20     // var = changeable
age = 21`},{t:{en:"Data types",ar:"أنواع البيانات"},body:{en:"Every value has a type: text, whole numbers, decimals, or true/false. The type decides what you can do with it.",ar:"كل قيمة إلها نوع: نص، أرقام صحيحة، أرقام عشرية، أو صح/خطأ. النوع بيحدد شو تقدر تعمل فيها."},code:`val s: String = "text"
val n: Int = 42
val d: Double = 3.5
val ok: Boolean = true`,sec:{en:"Data & values",ar:"البيانات والقيم"}},{t:{en:"Numbers & math",ar:"الأرقام والحساب"},body:{en:"You can add, subtract, multiply, divide and more. Programming is math you can see.",ar:"تقدر تجمع وتطرح وتضرب وتقسم وأكثر. البرمجة رياضيات بتشوفها قدامك."},code:`val a = 10; val b = 3
println(a + b)
println(a / b)
println(a % b)`},{t:{en:"Strings (text)",ar:"النصوص"},body:{en:"A string is a piece of text wrapped in quotes. You will use strings everywhere.",ar:"النص (string) عبارة عن كلام محاط بعلامات اقتباس. رح تستخدم النصوص بكل مكان."},code:`val city = "Amman"
println(city.length)
println(city.uppercase())`},{t:{en:"Formatting strings",ar:"تنسيق النصوص"},body:{en:"Join and format strings to build dynamic messages from your data.",ar:"ادمج ونسّق النصوص لتبني رسائل ديناميكية من بياناتك."},code:`val name = "Sara"; val age = 20
println("$name is $age")
println("Sum: \${2 + 3}")`},{t:{en:"Booleans (true/false)",ar:"القيم المنطقية"},body:{en:"A boolean is either true or false. Booleans are the heart of every decision your program makes.",ar:"القيمة المنطقية إمّا صح (true) أو خطأ (false)، وهي أساس كل قرار بياخده برنامجك."},code:`val isOpen = 5 > 3
println(isOpen)
println(10 == 10)`},{t:{en:"Operators",ar:"المعاملات"},body:{en:"Operators combine values: arithmetic (+ - * /), comparison (> < ==) and more.",ar:"المعاملات بتجمع القيم: حسابية (+ - * /)، ومقارنة (> < ==) وغيرها."},code:`println(5 + 2)
println(5 > 2)
var x = 4
x += 6
println(x)`},{t:{en:"Reading input",ar:"قراءة المدخلات"},body:{en:"Read input from the user so your program can react to real data.",ar:"اقرأ مدخلات من المستخدم لبرنامجك يتفاعل مع بيانات حقيقية."},code:`print("Name? ")
val name = readLine()
println("Hi $name")`},{t:{en:"if / else",ar:"الشرط if / else"},body:{en:"if/else lets your program choose a path based on a condition.",ar:"الشرط if/else بيخلّي برنامجك يختار مسار حسب شرط معيّن."},code:`val age = 18
if (age >= 18) {
  println("Adult")
} else {
  println("Minor")
}`,sec:{en:"Control flow",ar:"التحكم بالتدفق"}},{t:{en:"Logical operators",ar:"المعاملات المنطقية"},body:{en:"Combine conditions with AND, OR and NOT to express complex rules.",ar:"ادمج الشروط بـ AND و OR و NOT لتعبّر عن قواعد معقّدة."},code:`val age = 22; val member = true
if (age > 18 && member) println("Welcome")
if (!member) println("No")`},{t:{en:"Many cases (switch)",ar:"حالات متعددة"},body:{en:"When you have many cases, a switch (or else-if chain) keeps code clean.",ar:"لمّا يكون عندك حالات كثيرة، الـ switch (أو سلسلة else-if) بتخلّي الكود مرتّب."},code:`val day = 3
when (day) {
  1 -> println("Mon")
  3 -> println("Wed")
  else -> println("Other")
}`},{t:{en:"while loops",ar:"حلقة while"},body:{en:"A while loop repeats as long as its condition stays true.",ar:"حلقة while بتكرّر طالما الشرط ضلّه صح."},code:`var i = 1
while (i <= 5) {
  println(i)
  i++
}`},{t:{en:"for loops",ar:"حلقة for"},body:{en:"A for loop repeats a known number of times — perfect for counting.",ar:"حلقة for بتكرّر عدد معروف من المرّات، مثالية للعدّ."},code:`for (i in 1..5) {
  println("Number $i")
}`},{t:{en:"break & continue",ar:"break و continue"},body:{en:"break exits a loop early; continue skips to the next round.",ar:"break بتوقف الحلقة بدري، و continue بتقفز للدورة الجاية."},code:`for (i in 1..10) {
  if (i == 5) break
  if (i % 2 == 0) continue
  println(i)
}`},{t:{en:"Arrays / lists",ar:"المصفوفات والقوائم"},body:{en:"An array (list) stores many values in order under one name.",ar:"المصفوفة (القائمة) بتخزّن قيم كثيرة مرتّبة تحت اسم واحد."},code:`val fruits = listOf("apple", "banana", "cherry")
println(fruits[0])
println(fruits.size)`,sec:{en:"Collections",ar:"المجموعات"}},{t:{en:"Looping collections",ar:"المرور على المجموعات"},body:{en:"Loop over a collection to read or transform every item.",ar:"مُرّ على المجموعة لتقرأ أو تعدّل كل عنصر فيها."},code:`val nums = listOf(1, 2, 3)
for (n in nums) println(n * 2)
println(nums.map { it * 2 })`},{t:{en:"Maps / dictionaries",ar:"الخرائط والقواميس"},body:{en:"A map stores key → value pairs, so you can look up data instantly.",ar:"الخريطة بتخزّن أزواج مفتاح ← قيمة، فتقدر تجيب البيانات فوراً."},code:`val user = mapOf("name" to "Sara", "city" to "Amman")
println(user["name"])`},{t:{en:"Functions",ar:"الدوال"},body:{en:"A function is a named, reusable block of code you can call again and again.",ar:"الدالة كتلة كود إلها اسم وقابلة لإعادة الاستخدام، تقدر تناديها مرّة بعد مرّة."},code:`fun greet() {
  println("Hello!")
}
greet()`,sec:{en:"Functions",ar:"الدوال"}},{t:{en:"Parameters & return",ar:"المعاملات والإرجاع"},body:{en:"Functions take inputs (parameters) and hand back a result (return value).",ar:"الدوال بتاخد مدخلات (معاملات) وبترجّع نتيجة (قيمة إرجاع)."},code:`fun add(a: Int, b: Int): Int {
  return a + b
}
println(add(5, 3))`},{t:{en:"Scope",ar:"النطاق"},body:{en:"Scope decides where a variable can be seen — inside a function or everywhere.",ar:"النطاق بيحدد وين المتغيّر بيبان: جوّا الدالة أو بكل مكان."},code:`val total = 0 // top-level
fun demo() {
  val local = 5
  println(local + total)
}`},{t:{en:"Recursion",ar:"الاستدعاء الذاتي"},body:{en:"A recursive function calls itself to break a big problem into smaller ones.",ar:"الدالة العَوْدية بتنادي حالها لتقسّم مشكلة كبيرة لمشاكل أصغر."},code:`fun factorial(n: Int): Int {
  if (n <= 1) return 1
  return n * factorial(n - 1)
}
// factorial(5) => 120`},{t:{en:"Error handling",ar:"معالجة الأخطاء"},body:{en:"Catch errors so your program handles problems gracefully instead of crashing.",ar:"امسك الأخطاء لبرنامجك يتعامل مع المشاكل بهدوء بدل ما يوقع."},code:`try {
  throw Exception("failed")
} catch (e: Exception) {
  println("Caught: \${e.message}")
}`,sec:{en:"Robust code",ar:"كود متين"}},{t:{en:"Classes & objects",ar:"الكلاسات والكائنات"},body:{en:"A class is a blueprint for objects that bundle related data and behavior.",ar:"الكلاس مخطّط للكائنات بيجمع البيانات والسلوك المترابطين."},code:`class Dog(val name: String)
val d = Dog("Rex")
println(d.name)`,sec:{en:"Objects (OOP)",ar:"الكائنات (OOP)"}},{t:{en:"Methods & properties",ar:"الدوال والخصائص"},body:{en:"Methods are functions that belong to an object and act on its data.",ar:"الدوال (methods) هي دوال تابعة للكائن وبتشتغل على بياناته."},code:`class Counter {
  var count = 0
  fun increment() { count++ }
}
val c = Counter()
c.increment()`},{t:{en:"Inheritance",ar:"الوراثة"},body:{en:"Inheritance lets one class reuse and extend another — write once, reuse often.",ar:"الوراثة بتخلّي كلاس يعيد استخدام كلاس ثاني ويوسّعه: اكتب مرّة، استخدم كثير."},code:`open class Animal { open fun speak() = println("...") }
class Cat : Animal() { override fun speak() = println("Meow") }`},{t:{en:"Mini project",ar:"مشروع صغير"},body:{en:"Combine the basics into a small working program of your own.",ar:"اجمع الأساسيات ببرنامج صغير شغّال من عندك."},code:`val cart = listOf(10, 25, 5)
val total = cart.sum()
println("Total: $$total")`,sec:{en:"Project",ar:"المشروع"}},{t:{en:"Final project + certificate",ar:"المشروع النهائي + الشهادة"},body:{en:"Build a final project that ties everything together. 🏆 Then claim your certificate!",ar:"ابنِ مشروع نهائي بيجمع كل شي تعلّمته. 🏆 وبعدها استلم شهادتك!",cert:!0},code:`fun grade(s: Int) = when {
  s >= 90 -> "A"
  s >= 80 -> "B"
  else -> "C"
}
// grade(95) => A`}]},swift:{name:"Swift",icon:"🐦",lessons:[{t:{en:"Introduction & first program",ar:"مقدمة وأول برنامج"},body:{en:"<p><b>Swift</b> is a popular, powerful programming language. This course takes you from zero to your first project — one small step at a time. Here is the classic first program:",ar:"<p><b>Swift</b> لغة برمجة مشهورة وقوية. هذا الكورس بياخدك من الصفر لأول مشروع، خطوة صغيرة كل مرة. هذا أول برنامج تقليدي:"},code:'print("Hello, World!")',sec:{en:"Basics",ar:"الأساسيات"}},{t:{en:"Printing output",ar:"طباعة المخرجات"},body:{en:"Printing text to the screen is how your program talks to you. Try changing the message.",ar:"طباعة النص على الشاشة هي طريقة برنامجك ليحكي معك. جرّب تغيّر الرسالة."},code:`print("Learning Swift!")
print("Same line", terminator: " ")
print("here")`},{t:{en:"Comments",ar:"التعليقات"},body:{en:"Comments are notes for humans — Swift ignores them when it runs your code. Use them to explain your thinking.",ar:"التعليقات ملاحظات للبشر، وSwift بتتجاهلها وقت التشغيل. استخدمها لتشرح فكرتك."},code:`// single-line comment
/* multi-line comment */
print("Comments ignored")`},{t:{en:"Variables",ar:"المتغيرات"},body:{en:"A variable is a named box that stores a value you can reuse and change later.",ar:"المتغيّر صندوق له اسم بيخزّن قيمة تقدر تعيد استخدامها وتغيّرها لاحقاً."},code:`let name = "Sara" // let = constant
var age = 20     // var = variable
age = 21`},{t:{en:"Data types",ar:"أنواع البيانات"},body:{en:"Every value has a type: text, whole numbers, decimals, or true/false. The type decides what you can do with it.",ar:"كل قيمة إلها نوع: نص، أرقام صحيحة، أرقام عشرية، أو صح/خطأ. النوع بيحدد شو تقدر تعمل فيها."},code:`let s: String = "text"
let n: Int = 42
let d: Double = 3.5
let ok: Bool = true`,sec:{en:"Data & values",ar:"البيانات والقيم"}},{t:{en:"Numbers & math",ar:"الأرقام والحساب"},body:{en:"You can add, subtract, multiply, divide and more. Programming is math you can see.",ar:"تقدر تجمع وتطرح وتضرب وتقسم وأكثر. البرمجة رياضيات بتشوفها قدامك."},code:`let a = 10, b = 3
print(a + b)
print(a / b)
print(a % b)`},{t:{en:"Strings (text)",ar:"النصوص"},body:{en:"A string is a piece of text wrapped in quotes. You will use strings everywhere.",ar:"النص (string) عبارة عن كلام محاط بعلامات اقتباس. رح تستخدم النصوص بكل مكان."},code:`let city = "Amman"
print(city.count)
print(city.uppercased())`},{t:{en:"Formatting strings",ar:"تنسيق النصوص"},body:{en:"Join and format strings to build dynamic messages from your data.",ar:"ادمج ونسّق النصوص لتبني رسائل ديناميكية من بياناتك."},code:`let name = "Sara", age = 20
print("\\(name) is \\(age)")`},{t:{en:"Booleans (true/false)",ar:"القيم المنطقية"},body:{en:"A boolean is either true or false. Booleans are the heart of every decision your program makes.",ar:"القيمة المنطقية إمّا صح (true) أو خطأ (false)، وهي أساس كل قرار بياخده برنامجك."},code:`let isOpen = 5 > 3
print(isOpen)
print(10 == 10)`},{t:{en:"Operators",ar:"المعاملات"},body:{en:"Operators combine values: arithmetic (+ - * /), comparison (> < ==) and more.",ar:"المعاملات بتجمع القيم: حسابية (+ - * /)، ومقارنة (> < ==) وغيرها."},code:`print(5 + 2)
print(5 > 2)
var x = 4
x += 6
print(x)`},{t:{en:"Reading input",ar:"قراءة المدخلات"},body:{en:"Read input from the user so your program can react to real data.",ar:"اقرأ مدخلات من المستخدم لبرنامجك يتفاعل مع بيانات حقيقية."},code:`print("Name? ")
let name = readLine() ?? ""
print("Hi \\(name)")`},{t:{en:"if / else",ar:"الشرط if / else"},body:{en:"if/else lets your program choose a path based on a condition.",ar:"الشرط if/else بيخلّي برنامجك يختار مسار حسب شرط معيّن."},code:`let age = 18
if age >= 18 {
  print("Adult")
} else {
  print("Minor")
}`,sec:{en:"Control flow",ar:"التحكم بالتدفق"}},{t:{en:"Logical operators",ar:"المعاملات المنطقية"},body:{en:"Combine conditions with AND, OR and NOT to express complex rules.",ar:"ادمج الشروط بـ AND و OR و NOT لتعبّر عن قواعد معقّدة."},code:`let age = 22, member = true
if age > 18 && member { print("Welcome") }
if !member { print("No") }`},{t:{en:"Many cases (switch)",ar:"حالات متعددة"},body:{en:"When you have many cases, a switch (or else-if chain) keeps code clean.",ar:"لمّا يكون عندك حالات كثيرة، الـ switch (أو سلسلة else-if) بتخلّي الكود مرتّب."},code:`let day = 3
switch day {
case 1: print("Mon")
case 3: print("Wed")
default: print("Other")
}`},{t:{en:"while loops",ar:"حلقة while"},body:{en:"A while loop repeats as long as its condition stays true.",ar:"حلقة while بتكرّر طالما الشرط ضلّه صح."},code:`var i = 1
while i <= 5 {
  print(i)
  i += 1
}`},{t:{en:"for loops",ar:"حلقة for"},body:{en:"A for loop repeats a known number of times — perfect for counting.",ar:"حلقة for بتكرّر عدد معروف من المرّات، مثالية للعدّ."},code:`for i in 1...5 {
  print("Number \\(i)")
}`},{t:{en:"break & continue",ar:"break و continue"},body:{en:"break exits a loop early; continue skips to the next round.",ar:"break بتوقف الحلقة بدري، و continue بتقفز للدورة الجاية."},code:`for i in 1...10 {
  if i == 5 { break }
  if i % 2 == 0 { continue }
  print(i)
}`},{t:{en:"Arrays / lists",ar:"المصفوفات والقوائم"},body:{en:"An array (list) stores many values in order under one name.",ar:"المصفوفة (القائمة) بتخزّن قيم كثيرة مرتّبة تحت اسم واحد."},code:`let fruits = ["apple", "banana", "cherry"]
print(fruits[0])
print(fruits.count)`,sec:{en:"Collections",ar:"المجموعات"}},{t:{en:"Looping collections",ar:"المرور على المجموعات"},body:{en:"Loop over a collection to read or transform every item.",ar:"مُرّ على المجموعة لتقرأ أو تعدّل كل عنصر فيها."},code:`let nums = [1, 2, 3]
for n in nums { print(n * 2) }
print(nums.map { $0 * 2 })`},{t:{en:"Maps / dictionaries",ar:"الخرائط والقواميس"},body:{en:"A map stores key → value pairs, so you can look up data instantly.",ar:"الخريطة بتخزّن أزواج مفتاح ← قيمة، فتقدر تجيب البيانات فوراً."},code:`let user = ["name": "Sara", "city": "Amman"]
print(user["name"] ?? "")`},{t:{en:"Functions",ar:"الدوال"},body:{en:"A function is a named, reusable block of code you can call again and again.",ar:"الدالة كتلة كود إلها اسم وقابلة لإعادة الاستخدام، تقدر تناديها مرّة بعد مرّة."},code:`func greet() {
  print("Hello!")
}
greet()`,sec:{en:"Functions",ar:"الدوال"}},{t:{en:"Parameters & return",ar:"المعاملات والإرجاع"},body:{en:"Functions take inputs (parameters) and hand back a result (return value).",ar:"الدوال بتاخد مدخلات (معاملات) وبترجّع نتيجة (قيمة إرجاع)."},code:`func add(_ a: Int, _ b: Int) -> Int {
  return a + b
}
print(add(5, 3))`},{t:{en:"Scope",ar:"النطاق"},body:{en:"Scope decides where a variable can be seen — inside a function or everywhere.",ar:"النطاق بيحدد وين المتغيّر بيبان: جوّا الدالة أو بكل مكان."},code:`let total = 0
func demo() {
  let local = 5
  print(local + total)
}`},{t:{en:"Recursion",ar:"الاستدعاء الذاتي"},body:{en:"A recursive function calls itself to break a big problem into smaller ones.",ar:"الدالة العَوْدية بتنادي حالها لتقسّم مشكلة كبيرة لمشاكل أصغر."},code:`func factorial(_ n: Int) -> Int {
  if n <= 1 { return 1 }
  return n * factorial(n - 1)
}
// factorial(5) => 120`},{t:{en:"Error handling",ar:"معالجة الأخطاء"},body:{en:"Catch errors so your program handles problems gracefully instead of crashing.",ar:"امسك الأخطاء لبرنامجك يتعامل مع المشاكل بهدوء بدل ما يوقع."},code:`enum MyError: Error { case failed }
do {
  throw MyError.failed
} catch {
  print("Caught an error")
}`,sec:{en:"Robust code",ar:"كود متين"}},{t:{en:"Classes & objects",ar:"الكلاسات والكائنات"},body:{en:"A class is a blueprint for objects that bundle related data and behavior.",ar:"الكلاس مخطّط للكائنات بيجمع البيانات والسلوك المترابطين."},code:`class Dog {
  let name: String
  init(name: String) { self.name = name }
}
print(Dog(name: "Rex").name)`,sec:{en:"Objects (OOP)",ar:"الكائنات (OOP)"}},{t:{en:"Methods & properties",ar:"الدوال والخصائص"},body:{en:"Methods are functions that belong to an object and act on its data.",ar:"الدوال (methods) هي دوال تابعة للكائن وبتشتغل على بياناته."},code:`class Counter {
  var count = 0
  func increment() { count += 1 }
}
let c = Counter()
c.increment()`},{t:{en:"Inheritance",ar:"الوراثة"},body:{en:"Inheritance lets one class reuse and extend another — write once, reuse often.",ar:"الوراثة بتخلّي كلاس يعيد استخدام كلاس ثاني ويوسّعه: اكتب مرّة، استخدم كثير."},code:`class Animal { func speak() { print("...") } }
class Cat: Animal { override func speak() { print("Meow") } }
Cat().speak()`},{t:{en:"Mini project",ar:"مشروع صغير"},body:{en:"Combine the basics into a small working program of your own.",ar:"اجمع الأساسيات ببرنامج صغير شغّال من عندك."},code:`let cart = [10, 25, 5]
let total = cart.reduce(0, +)
print("Total: $\\(total)")`,sec:{en:"Project",ar:"المشروع"}},{t:{en:"Final project + certificate",ar:"المشروع النهائي + الشهادة"},body:{en:"Build a final project that ties everything together. 🏆 Then claim your certificate!",ar:"ابنِ مشروع نهائي بيجمع كل شي تعلّمته. 🏆 وبعدها استلم شهادتك!",cert:!0},code:`func grade(_ s: Int) -> String {
  if s >= 90 { return "A" }
  if s >= 80 { return "B" }
  return "C"
}
// grade(95) => A`}]},r:{name:"R",icon:"📈",lessons:[{t:{en:"Introduction & first program",ar:"مقدمة وأول برنامج"},body:{en:"<p><b>R</b> is a popular, powerful programming language. This course takes you from zero to your first project — one small step at a time. Here is the classic first program:",ar:"<p><b>R</b> لغة برمجة مشهورة وقوية. هذا الكورس بياخدك من الصفر لأول مشروع، خطوة صغيرة كل مرة. هذا أول برنامج تقليدي:"},code:'print("Hello, World!")',sec:{en:"Basics",ar:"الأساسيات"}},{t:{en:"Printing output",ar:"طباعة المخرجات"},body:{en:"Printing text to the screen is how your program talks to you. Try changing the message.",ar:"طباعة النص على الشاشة هي طريقة برنامجك ليحكي معك. جرّب تغيّر الرسالة."},code:`print("Learning R!")
cat("No quotes here\\n")`},{t:{en:"Comments",ar:"التعليقات"},body:{en:"Comments are notes for humans — R ignores them when it runs your code. Use them to explain your thinking.",ar:"التعليقات ملاحظات للبشر، وR بتتجاهلها وقت التشغيل. استخدمها لتشرح فكرتك."},code:`# R uses the hash for comments
print("Comments ignored")`},{t:{en:"Variables",ar:"المتغيرات"},body:{en:"A variable is a named box that stores a value you can reuse and change later.",ar:"المتغيّر صندوق له اسم بيخزّن قيمة تقدر تعيد استخدامها وتغيّرها لاحقاً."},code:`name <- "Sara"
age <- 20
pi_val <- 3.14
cat(name, age)`},{t:{en:"Data types",ar:"أنواع البيانات"},body:{en:"Every value has a type: text, whole numbers, decimals, or true/false. The type decides what you can do with it.",ar:"كل قيمة إلها نوع: نص، أرقام صحيحة، أرقام عشرية، أو صح/خطأ. النوع بيحدد شو تقدر تعمل فيها."},code:`s <- "text"
n <- 42L      # integer
d <- 3.5      # double
ok <- TRUE    # logical
cat(class(n))`,sec:{en:"Data & values",ar:"البيانات والقيم"}},{t:{en:"Numbers & math",ar:"الأرقام والحساب"},body:{en:"You can add, subtract, multiply, divide and more. Programming is math you can see.",ar:"تقدر تجمع وتطرح وتضرب وتقسم وأكثر. البرمجة رياضيات بتشوفها قدامك."},code:`a <- 10; b <- 3
print(a + b)
print(a %/% b)  # integer divide
print(a %% b)   # remainder`},{t:{en:"Strings (text)",ar:"النصوص"},body:{en:"A string is a piece of text wrapped in quotes. You will use strings everywhere.",ar:"النص (string) عبارة عن كلام محاط بعلامات اقتباس. رح تستخدم النصوص بكل مكان."},code:`city <- "Amman"
print(nchar(city))
print(toupper(city))`},{t:{en:"Formatting strings",ar:"تنسيق النصوص"},body:{en:"Join and format strings to build dynamic messages from your data.",ar:"ادمج ونسّق النصوص لتبني رسائل ديناميكية من بياناتك."},code:`name <- "Sara"; age <- 20
cat(paste(name, "is", age), "\\n")
cat(sprintf("%s is %d", name, age))`},{t:{en:"Booleans (true/false)",ar:"القيم المنطقية"},body:{en:"A boolean is either true or false. Booleans are the heart of every decision your program makes.",ar:"القيمة المنطقية إمّا صح (true) أو خطأ (false)، وهي أساس كل قرار بياخده برنامجك."},code:`is_open <- 5 > 3
print(is_open)
print(10 == 10)`},{t:{en:"Operators",ar:"المعاملات"},body:{en:"Operators combine values: arithmetic (+ - * /), comparison (> < ==) and more.",ar:"المعاملات بتجمع القيم: حسابية (+ - * /)، ومقارنة (> < ==) وغيرها."},code:`print(5 + 2)
print(5 > 2)
x <- 4
x <- x + 6
print(x)`},{t:{en:"Reading input",ar:"قراءة المدخلات"},body:{en:"Read input from the user so your program can react to real data.",ar:"اقرأ مدخلات من المستخدم لبرنامجك يتفاعل مع بيانات حقيقية."},code:`name <- readline(prompt = "Name? ")
cat("Hi", name)`},{t:{en:"if / else",ar:"الشرط if / else"},body:{en:"if/else lets your program choose a path based on a condition.",ar:"الشرط if/else بيخلّي برنامجك يختار مسار حسب شرط معيّن."},code:`age <- 18
if (age >= 18) {
  print("Adult")
} else {
  print("Minor")
}`,sec:{en:"Control flow",ar:"التحكم بالتدفق"}},{t:{en:"Logical operators",ar:"المعاملات المنطقية"},body:{en:"Combine conditions with AND, OR and NOT to express complex rules.",ar:"ادمج الشروط بـ AND و OR و NOT لتعبّر عن قواعد معقّدة."},code:`age <- 22; member <- TRUE
if (age > 18 && member) print("Welcome")
if (!member) print("No")`},{t:{en:"Many cases (switch)",ar:"حالات متعددة"},body:{en:"When you have many cases, a switch (or else-if chain) keeps code clean.",ar:"لمّا يكون عندك حالات كثيرة، الـ switch (أو سلسلة else-if) بتخلّي الكود مرتّب."},code:`day <- 3
result <- switch(day, "Mon", "Tue", "Wed")
print(result)`},{t:{en:"while loops",ar:"حلقة while"},body:{en:"A while loop repeats as long as its condition stays true.",ar:"حلقة while بتكرّر طالما الشرط ضلّه صح."},code:`i <- 1
while (i <= 5) {
  print(i)
  i <- i + 1
}`},{t:{en:"for loops",ar:"حلقة for"},body:{en:"A for loop repeats a known number of times — perfect for counting.",ar:"حلقة for بتكرّر عدد معروف من المرّات، مثالية للعدّ."},code:`for (i in 1:5) {
  cat("Number", i, "\\n")
}`},{t:{en:"break & continue",ar:"break و continue"},body:{en:"break exits a loop early; continue skips to the next round.",ar:"break بتوقف الحلقة بدري، و continue بتقفز للدورة الجاية."},code:`for (i in 1:10) {
  if (i == 5) break
  if (i %% 2 == 0) next
  print(i)
}`},{t:{en:"Arrays / lists",ar:"المصفوفات والقوائم"},body:{en:"An array (list) stores many values in order under one name.",ar:"المصفوفة (القائمة) بتخزّن قيم كثيرة مرتّبة تحت اسم واحد."},code:`fruits <- c("apple", "banana", "cherry")
print(fruits[1])   # R is 1-indexed
print(length(fruits))`,sec:{en:"Collections",ar:"المجموعات"}},{t:{en:"Looping collections",ar:"المرور على المجموعات"},body:{en:"Loop over a collection to read or transform every item.",ar:"مُرّ على المجموعة لتقرأ أو تعدّل كل عنصر فيها."},code:`nums <- c(1, 2, 3)
for (n in nums) print(n * 2)
print(sapply(nums, function(x) x * 2))`},{t:{en:"Maps / dictionaries",ar:"الخرائط والقواميس"},body:{en:"A map stores key → value pairs, so you can look up data instantly.",ar:"الخريطة بتخزّن أزواج مفتاح ← قيمة، فتقدر تجيب البيانات فوراً."},code:`user <- list(name = "Sara", city = "Amman")
print(user$name)`},{t:{en:"Functions",ar:"الدوال"},body:{en:"A function is a named, reusable block of code you can call again and again.",ar:"الدالة كتلة كود إلها اسم وقابلة لإعادة الاستخدام، تقدر تناديها مرّة بعد مرّة."},code:`greet <- function() {
  print("Hello!")
}
greet()`,sec:{en:"Functions",ar:"الدوال"}},{t:{en:"Parameters & return",ar:"المعاملات والإرجاع"},body:{en:"Functions take inputs (parameters) and hand back a result (return value).",ar:"الدوال بتاخد مدخلات (معاملات) وبترجّع نتيجة (قيمة إرجاع)."},code:`add <- function(a, b) {
  return(a + b)
}
print(add(5, 3))`},{t:{en:"Scope",ar:"النطاق"},body:{en:"Scope decides where a variable can be seen — inside a function or everywhere.",ar:"النطاق بيحدد وين المتغيّر بيبان: جوّا الدالة أو بكل مكان."},code:`total <- 0  # global
demo <- function() {
  local <- 5
  print(local)
}
demo()`},{t:{en:"Recursion",ar:"الاستدعاء الذاتي"},body:{en:"A recursive function calls itself to break a big problem into smaller ones.",ar:"الدالة العَوْدية بتنادي حالها لتقسّم مشكلة كبيرة لمشاكل أصغر."},code:`factorial <- function(n) {
  if (n <= 1) return(1)
  n * factorial(n - 1)
}
print(factorial(5))`},{t:{en:"Error handling",ar:"معالجة الأخطاء"},body:{en:"Catch errors so your program handles problems gracefully instead of crashing.",ar:"امسك الأخطاء لبرنامجك يتعامل مع المشاكل بهدوء بدل ما يوقع."},code:`result <- tryCatch(
  log(-1),
  warning = function(w) "caught warning"
)
print(result)`,sec:{en:"Robust code",ar:"كود متين"}},{t:{en:"Classes & objects",ar:"الكلاسات والكائنات"},body:{en:"A class is a blueprint for objects that bundle related data and behavior.",ar:"الكلاس مخطّط للكائنات بيجمع البيانات والسلوك المترابطين."},code:`# R uses S3 objects
dog <- list(name = "Rex")
class(dog) <- "Dog"
print(dog$name)`,sec:{en:"Objects (OOP)",ar:"الكائنات (OOP)"}},{t:{en:"Methods & properties",ar:"الدوال والخصائص"},body:{en:"Methods are functions that belong to an object and act on its data.",ar:"الدوال (methods) هي دوال تابعة للكائن وبتشتغل على بياناته."},code:`speak <- function(x) UseMethod("speak")
speak.Dog <- function(x) cat("Woof\\n")
d <- structure(list(), class = "Dog")
speak(d)`},{t:{en:"Inheritance",ar:"الوراثة"},body:{en:"Inheritance lets one class reuse and extend another — write once, reuse often.",ar:"الوراثة بتخلّي كلاس يعيد استخدام كلاس ثاني ويوسّعه: اكتب مرّة، استخدم كثير."},code:`# data frames: R's superpower
df <- data.frame(name = c("Sara", "Ali"), age = c(20, 25))
print(df)
print(mean(df$age))`},{t:{en:"Mini project",ar:"مشروع صغير"},body:{en:"Combine the basics into a small working program of your own.",ar:"اجمع الأساسيات ببرنامج صغير شغّال من عندك."},code:`cart <- c(10, 25, 5)
total <- sum(cart)
cat("Total: $", total)`,sec:{en:"Project",ar:"المشروع"}},{t:{en:"Final project + certificate",ar:"المشروع النهائي + الشهادة"},body:{en:"Build a final project that ties everything together. 🏆 Then claim your certificate!",ar:"ابنِ مشروع نهائي بيجمع كل شي تعلّمته. 🏆 وبعدها استلم شهادتك!",cert:!0},code:`grade <- function(s) {
  if (s >= 90) return("A")
  if (s >= 80) return("B")
  "C"
}
print(grade(95))`}]},mongodb:{name:"MongoDB",icon:"🍃",lessons:[{t:{en:"What is MongoDB?",ar:"ما هو MongoDB؟"},body:{en:"<p>MongoDB stores data as flexible JSON-like documents instead of rigid tables.</p>",ar:"<p>MongoDB بيخزّن البيانات كمستندات مرنة تشبه JSON بدل الجداول الجامدة.</p>"},code:`// a document looks like JSON
{ name: "Sara", age: 20 }`,sec:{en:"Start",ar:"البداية"}},{t:{en:"Databases & collections",ar:"قواعد البيانات والمجموعات"},body:{en:"<p>A database holds collections; a collection holds documents.</p>",ar:"<p>قاعدة البيانات بتحوي مجموعات، والمجموعة بتحوي مستندات.</p>"},code:`use myapp
db.createCollection("users")`},{t:{en:"Show what exists",ar:"اعرض الموجود"},body:{en:"<p>List databases and collections to explore your data.</p>",ar:"<p>اعرض قواعد البيانات والمجموعات لتستكشف بياناتك.</p>"},code:`show dbs
show collections`},{t:{en:"Insert one document",ar:"أدرج مستند"},body:{en:"<p>insertOne adds a single document to a collection.</p>",ar:"<p>insertOne بتضيف مستند واحد للمجموعة.</p>"},code:'db.users.insertOne({ name: "Sara", age: 20 })',sec:{en:"Create",ar:"الإضافة"}},{t:{en:"Insert many",ar:"أدرج عدّة"},body:{en:"<p>insertMany adds several documents at once.</p>",ar:"<p>insertMany بتضيف عدّة مستندات دفعة وحدة.</p>"},code:`db.users.insertMany([
  { name: "Ali", age: 25 },
  { name: "Lina", age: 22 }
])`},{t:{en:"Find documents",ar:"ابحث عن مستندات"},body:{en:"<p>find returns documents; an empty filter returns all.</p>",ar:"<p>find بترجّع المستندات، والفلتر الفاضي بيرجّع الكل.</p>"},code:`db.users.find()
db.users.find({ name: "Sara" })`,sec:{en:"Read",ar:"القراءة"}},{t:{en:"Find one",ar:"ابحث عن واحد"},body:{en:"<p>findOne returns the first matching document.</p>",ar:"<p>findOne بترجّع أول مستند مطابق.</p>"},code:'db.users.findOne({ name: "Ali" })'},{t:{en:"Comparison queries",ar:"استعلامات المقارنة"},body:{en:"<p>Operators like $gt and $lt filter by ranges.</p>",ar:"<p>معاملات مثل $gt و $lt بتفلتر حسب النطاقات.</p>"},code:"db.users.find({ age: { $gte: 18, $lt: 30 } })"},{t:{en:"Logical queries",ar:"استعلامات منطقية"},body:{en:"<p>$or and $and combine multiple conditions.</p>",ar:"<p>$or و $and بيجمعوا عدّة شروط.</p>"},code:`db.users.find({
  $or: [{ age: { $lt: 18 } }, { name: "Sara" }]
})`},{t:{en:"Pick fields",ar:"اختر الحقول"},body:{en:"<p>Projection returns only the fields you ask for.</p>",ar:"<p>الإسقاط بيرجّع فقط الحقول اللي طلبتها.</p>"},code:"db.users.find({}, { name: 1, _id: 0 })"},{t:{en:"Update one",ar:"عدّل واحد"},body:{en:"<p>updateOne changes fields with the $set operator.</p>",ar:"<p>updateOne بتغيّر الحقول بمعامل $set.</p>"},code:`db.users.updateOne(
  { name: "Sara" },
  { $set: { age: 21 } }
)`,sec:{en:"Update",ar:"التعديل"}},{t:{en:"Update many",ar:"عدّل عدّة"},body:{en:"<p>updateMany changes every matching document.</p>",ar:"<p>updateMany بتغيّر كل مستند مطابق.</p>"},code:`db.users.updateMany(
  { age: { $lt: 18 } },
  { $set: { minor: true } }
)`},{t:{en:"Increment values",ar:"زد القيم"},body:{en:"<p>$inc adds to a number field atomically.</p>",ar:"<p>$inc بتضيف لحقل رقمي بأمان.</p>"},code:`db.users.updateOne(
  { name: "Ali" },
  { $inc: { age: 1 } }
)`},{t:{en:"Upsert",ar:"إدراج أو تعديل"},body:{en:"<p>upsert inserts the document if it does not exist.</p>",ar:"<p>upsert بتدرج المستند إذا مش موجود.</p>"},code:`db.users.updateOne(
  { name: "Zaid" },
  { $set: { age: 30 } },
  { upsert: true }
)`},{t:{en:"Delete one",ar:"احذف واحد"},body:{en:"<p>deleteOne removes the first matching document.</p>",ar:"<p>deleteOne بتحذف أول مستند مطابق.</p>"},code:'db.users.deleteOne({ name: "Ali" })',sec:{en:"Delete",ar:"الحذف"}},{t:{en:"Delete many",ar:"احذف عدّة"},body:{en:"<p>deleteMany removes all matching documents.</p>",ar:"<p>deleteMany بتحذف كل المستندات المطابقة.</p>"},code:"db.users.deleteMany({ age: { $lt: 18 } })"},{t:{en:"Sort results",ar:"رتّب النتائج"},body:{en:"<p>sort orders results: 1 ascending, -1 descending.</p>",ar:"<p>sort بترتّب النتائج: 1 تصاعدي، -1 تنازلي.</p>"},code:"db.users.find().sort({ age: -1 })",sec:{en:"Organize",ar:"التنظيم"}},{t:{en:"Limit & skip",ar:"حدّد وتخطَّ"},body:{en:"<p>limit caps results; skip pages through them.</p>",ar:"<p>limit بتحدّد العدد، skip بتتخطّى للصفحات.</p>"},code:"db.users.find().limit(5).skip(10)"},{t:{en:"Count documents",ar:"عدّ المستندات"},body:{en:"<p>countDocuments tells you how many match.</p>",ar:"<p>countDocuments بتقول كم مستند مطابق.</p>"},code:"db.users.countDocuments({ age: { $gte: 18 } })"},{t:{en:"Distinct values",ar:"القيم الفريدة"},body:{en:"<p>distinct lists unique values for a field.</p>",ar:"<p>distinct بتعرض القيم الفريدة لحقل.</p>"},code:'db.users.distinct("city")'},{t:{en:"Why indexes?",ar:"ليش الفهارس؟"},body:{en:"<p>Indexes make queries fast by avoiding full scans.</p>",ar:"<p>الفهارس بتسرّع الاستعلامات بتجنّب المسح الكامل.</p>"},code:"db.users.createIndex({ name: 1 })",sec:{en:"Indexes",ar:"الفهارس"}},{t:{en:"Unique index",ar:"فهرس فريد"},body:{en:"<p>A unique index blocks duplicate values.</p>",ar:"<p>الفهرس الفريد بيمنع القيم المكرّرة.</p>"},code:"db.users.createIndex({ email: 1 }, { unique: true })"},{t:{en:"Aggregation intro",ar:"مقدمة التجميع"},body:{en:"<p>The aggregation pipeline transforms data in stages.</p>",ar:"<p>خط التجميع بيحوّل البيانات على مراحل.</p>"},code:`db.users.aggregate([
  { $match: { age: { $gte: 18 } } }
])`,sec:{en:"Aggregation",ar:"التجميع"}},{t:{en:"Group & count",ar:"جمّع وعُدّ"},body:{en:"<p>$group buckets documents and computes totals.</p>",ar:"<p>$group بيجمّع المستندات ويحسب المجاميع.</p>"},code:`db.users.aggregate([
  { $group: { _id: "$city", total: { $sum: 1 } } }
])`},{t:{en:"Averages",ar:"المتوسطات"},body:{en:"<p>$avg computes an average across a group.</p>",ar:"<p>$avg بيحسب المتوسط عبر مجموعة.</p>"},code:`db.users.aggregate([
  { $group: { _id: null, avgAge: { $avg: "$age" } } }
])`},{t:{en:"Sort in pipeline",ar:"رتّب بالخط"},body:{en:"<p>$sort orders documents inside a pipeline.</p>",ar:"<p>$sort بيرتّب المستندات جوّا الخط.</p>"},code:`db.users.aggregate([
  { $sort: { age: -1 } },
  { $limit: 3 }
])`},{t:{en:"Embedding data",ar:"تضمين البيانات"},body:{en:"<p>Store related data inside a document for fast reads.</p>",ar:"<p>خزّن البيانات المرتبطة جوّا المستند لقراءة سريعة.</p>"},code:`db.users.insertOne({
  name: "Sara",
  orders: [{ item: "book", price: 10 }]
})`,sec:{en:"Design",ar:"التصميم"}},{t:{en:"References",ar:"المراجع"},body:{en:"<p>Link documents by storing another document's _id.</p>",ar:"<p>اربط المستندات بتخزين _id لمستند ثاني.</p>"},code:`db.orders.insertOne({
  userId: ObjectId("..."),
  total: 50
})`},{t:{en:"Mini project: a blog DB",ar:"مشروع صغير: قاعدة مدوّنة"},body:{en:"<p>Model posts and comments, then query the latest posts.</p>",ar:"<p>صمّم منشورات وتعليقات، ثم استعلم عن أحدث المنشورات.</p>"},code:`db.posts.insertOne({ title: "Hi", likes: 0 })
db.posts.updateOne({ title: "Hi" }, { $inc: { likes: 1 } })
db.posts.find().sort({ likes: -1 })`,sec:{en:"Project",ar:"المشروع"}},{t:{en:"Full CRUD app + certificate",ar:"تطبيق CRUD كامل + الشهادة"},body:{en:"<p>Combine insert, find, update and delete into one flow. 🏆 Get your certificate!</p>",ar:"<p>اجمع الإدراج والبحث والتعديل والحذف بمسار واحد. 🏆 استلم شهادتك!</p>",cert:!0},code:`db.tasks.insertOne({ text: "Learn Mongo", done: false })
db.tasks.updateOne({ text: "Learn Mongo" }, { $set: { done: true } })
db.tasks.find({ done: true })`}]},django:{name:"Django",icon:"🎸",lessons:[{t:{en:"What is Django?",ar:"ما هو Django؟"},body:{en:"<p>Django is a Python web framework that ships with everything to build sites fast.</p>",ar:"<p>Django إطار ويب بايثون بيجي بكل شي لبناء المواقع بسرعة.</p>"},code:`pip install django
django-admin --version`,sec:{en:"Start",ar:"البداية"}},{t:{en:"Create a project",ar:"أنشئ مشروع"},body:{en:"<p>startproject scaffolds a new Django project.</p>",ar:"<p>startproject بينشئ هيكل مشروع Django جديد.</p>"},code:`django-admin startproject mysite
cd mysite`},{t:{en:"Run the server",ar:"شغّل الخادم"},body:{en:"<p>runserver starts a local development server.</p>",ar:"<p>runserver بيشغّل خادم تطوير محلي.</p>"},code:`python manage.py runserver
# open http://127.0.0.1:8000`},{t:{en:"Create an app",ar:"أنشئ تطبيق"},body:{en:"<p>A Django project is split into focused apps.</p>",ar:"<p>مشروع Django بينقسم لتطبيقات مركّزة.</p>"},code:"python manage.py startapp blog"},{t:{en:"Your first view",ar:"أول view"},body:{en:"<p>A view is a function that returns a response.</p>",ar:"<p>الـ view دالة بترجّع استجابة.</p>"},code:`# blog/views.py
from django.http import HttpResponse

def home(request):
    return HttpResponse("Hello, Django!")`,sec:{en:"Views & URLs",ar:"العروض والروابط"}},{t:{en:"Map a URL",ar:"اربط رابط"},body:{en:"<p>urls.py connects a URL path to a view.</p>",ar:"<p>urls.py بيربط مسار الرابط بـ view.</p>"},code:`# blog/urls.py
from django.urls import path
from . import views

urlpatterns = [ path("", views.home) ]`},{t:{en:"Include app URLs",ar:"ضمّ روابط التطبيق"},body:{en:"<p>The project urls.py includes each app's URLs.</p>",ar:"<p>urls.py الرئيسي بيضمّ روابط كل تطبيق.</p>"},code:`# mysite/urls.py
from django.urls import path, include

urlpatterns = [ path("blog/", include("blog.urls")) ]`},{t:{en:"URL parameters",ar:"معطيات الرابط"},body:{en:"<p>Capture parts of the URL and pass them to the view.</p>",ar:"<p>التقط أجزاء من الرابط ومرّرها للـ view.</p>"},code:`path("post/<int:id>/", views.detail)

def detail(request, id):
    return HttpResponse(f"Post {id}")`},{t:{en:"Render a template",ar:"اعرض قالب"},body:{en:"<p>render sends an HTML template back to the browser.</p>",ar:"<p>render بترجّع قالب HTML للمتصفح.</p>"},code:`def home(request):
    return render(request, "home.html")`,sec:{en:"Templates",ar:"القوالب"}},{t:{en:"Template variables",ar:"متغيرات القالب"},body:{en:"<p>Pass data to templates via a context dictionary.</p>",ar:"<p>مرّر بيانات للقوالب عبر قاموس السياق.</p>"},code:`return render(request, "home.html", { "name": "Sara" })
<!-- home.html -->
<h1>Hi {{ name }}</h1>`},{t:{en:"Template loops",ar:"حلقات القالب"},body:{en:"<p>Loop over lists right inside the template.</p>",ar:"<p>مُرّ على القوائم جوّا القالب.</p>"},code:`{% for post in posts %}
  <p>{{ post.title }}</p>
{% endfor %}`},{t:{en:"Template conditions",ar:"شروط القالب"},body:{en:"<p>Show content conditionally with if/else tags.</p>",ar:"<p>اعرض المحتوى بشرط بوسوم if/else.</p>"},code:`{% if user.is_authenticated %}
  <p>Welcome back</p>
{% else %}
  <p>Please log in</p>
{% endif %}`},{t:{en:"Define a model",ar:"عرّف نموذج"},body:{en:"<p>A model is a Python class that maps to a database table.</p>",ar:"<p>النموذج كلاس بايثون بيقابل جدول بقاعدة البيانات.</p>"},code:`# models.py
from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=120)
    body = models.TextField()`,sec:{en:"Models",ar:"النماذج"}},{t:{en:"Migrations",ar:"الترحيلات"},body:{en:"<p>Migrations turn model changes into database tables.</p>",ar:"<p>الترحيلات بتحوّل تغييرات النماذج لجداول.</p>"},code:`python manage.py makemigrations
python manage.py migrate`},{t:{en:"Create records",ar:"أنشئ سجلات"},body:{en:"<p>Use the model to insert rows from Python.</p>",ar:"<p>استخدم النموذج لإدراج صفوف من بايثون.</p>"},code:'Post.objects.create(title="Hello", body="First post")'},{t:{en:"Query records",ar:"استعلم عن سجلات"},body:{en:"<p>The ORM fetches data without writing SQL.</p>",ar:"<p>الـ ORM بيجيب البيانات بدون كتابة SQL.</p>"},code:`Post.objects.all()
Post.objects.filter(title="Hello")`},{t:{en:"Update & delete",ar:"عدّل واحذف"},body:{en:"<p>Change or remove records through the ORM.</p>",ar:"<p>غيّر أو احذف السجلات عبر الـ ORM.</p>"},code:`p = Post.objects.get(id=1)
p.title = "Edited"
p.save()
p.delete()`},{t:{en:"The admin site",ar:"موقع الإدارة"},body:{en:"<p>Django gives you a ready admin panel for your data.</p>",ar:"<p>Django بيعطيك لوحة إدارة جاهزة لبياناتك.</p>"},code:"python manage.py createsuperuser",sec:{en:"Admin",ar:"لوحة التحكم"}},{t:{en:"Register a model",ar:"سجّل نموذج"},body:{en:"<p>Register models to manage them in the admin.</p>",ar:"<p>سجّل النماذج لتديرها من لوحة الإدارة.</p>"},code:`# admin.py
from .models import Post
admin.site.register(Post)`},{t:{en:"Handle forms",ar:"تعامل مع النماذج"},body:{en:"<p>Read submitted form data from request.POST.</p>",ar:"<p>اقرأ بيانات النموذج المرسلة من request.POST.</p>"},code:`def add(request):
    if request.method == "POST":
        title = request.POST["title"]`,sec:{en:"Forms",ar:"النماذج التفاعلية"}},{t:{en:"Model forms",ar:"نماذج من الموديل"},body:{en:"<p>ModelForm builds a form straight from a model.</p>",ar:"<p>ModelForm بيبني نموذج مباشرة من الموديل.</p>"},code:`from django.forms import ModelForm
class PostForm(ModelForm):
    class Meta:
        model = Post
        fields = ["title", "body"]`},{t:{en:"Validate input",ar:"تحقّق من المدخلات"},body:{en:"<p>is_valid() checks the form before saving.</p>",ar:"<p>is_valid() بتفحص النموذج قبل الحفظ.</p>"},code:`form = PostForm(request.POST)
if form.is_valid():
    form.save()`},{t:{en:"Static files",ar:"الملفات الثابتة"},body:{en:"<p>Serve CSS, JS and images from the static folder.</p>",ar:"<p>قدّم CSS و JS والصور من مجلد static.</p>"},code:`{% load static %}
<link rel="stylesheet" href="{% static 'style.css' %}">`,sec:{en:"Static & extras",ar:"ملفات ثابتة وإضافات"}},{t:{en:"Template inheritance",ar:"وراثة القوالب"},body:{en:"<p>A base template shares layout across pages.</p>",ar:"<p>قالب أساسي بيشارك التخطيط بين الصفحات.</p>"},code:`<!-- base.html -->
{% block content %}{% endblock %}
<!-- page.html -->
{% extends "base.html" %}`},{t:{en:"Users & auth",ar:"المستخدمون والدخول"},body:{en:"<p>Django has built-in login, logout and users.</p>",ar:"<p>Django فيه تسجيل دخول وخروج ومستخدمين جاهزين.</p>"},code:`from django.contrib.auth import login
# @login_required protects a view`},{t:{en:"Messages",ar:"الرسائل"},body:{en:"<p>Flash one-time messages to the user.</p>",ar:"<p>اعرض رسائل لمرّة وحدة للمستخدم.</p>"},code:`from django.contrib import messages
messages.success(request, "Saved!")`},{t:{en:"Settings & apps",ar:"الإعدادات والتطبيقات"},body:{en:"<p>settings.py configures apps, database and more.</p>",ar:"<p>settings.py بيضبط التطبيقات وقاعدة البيانات وغيرها.</p>"},code:`INSTALLED_APPS = [
    "blog",
    "django.contrib.admin",
]`},{t:{en:"Deploy basics",ar:"أساسيات النشر"},body:{en:"<p>Set DEBUG=False and collect static files to go live.</p>",ar:"<p>ضبط DEBUG=False واجمع الملفات الثابتة للنشر.</p>"},code:`DEBUG = False
ALLOWED_HOSTS = ["mysite.com"]
python manage.py collectstatic`},{t:{en:"Mini project: a blog",ar:"مشروع صغير: مدوّنة"},body:{en:"<p>Wire a model, view, URL and template into a working blog page.</p>",ar:"<p>اربط نموذج و view ورابط وقالب بصفحة مدوّنة شغّالة.</p>"},code:`def posts(request):
    items = Post.objects.all()
    return render(request, "posts.html", { "posts": items })`,sec:{en:"Project",ar:"المشروع"}},{t:{en:"Full CRUD site + certificate",ar:"موقع CRUD كامل + الشهادة"},body:{en:"<p>Combine models, forms and templates into a full app. 🏆 Get your certificate!</p>",ar:"<p>اجمع النماذج والفورمات والقوالب بتطبيق كامل. 🏆 استلم شهادتك!</p>",cert:!0},code:`# list, create, edit, delete posts — the classic CRUD blog
Post.objects.create(title="Done!", body="I built a Django app")`}]},bash:{name:"Bash",icon:"🖥️",lessons:[{t:{en:"What is Bash?",ar:"ما هو Bash؟"},body:{en:"<p>Bash is the language of the terminal — automate tasks with short commands.</p>",ar:"<p>Bash لغة الطرفية، بتأتمت المهام بأوامر قصيرة.</p>"},code:'echo "Hello, World!"',sec:{en:"Start",ar:"البداية"}},{t:{en:"Navigate folders",ar:"تنقّل بالمجلدات"},body:{en:"<p>pwd, ls and cd let you move around the filesystem.</p>",ar:"<p>pwd و ls و cd بتخلّيك تتنقّل بنظام الملفات.</p>"},code:`pwd
ls -la
cd projects`},{t:{en:"Create files & folders",ar:"أنشئ ملفات ومجلدات"},body:{en:"<p>mkdir makes folders; touch makes empty files.</p>",ar:"<p>mkdir بتعمل مجلدات، و touch بتعمل ملفات فاضية.</p>"},code:`mkdir myapp
touch myapp/index.html`},{t:{en:"Copy, move, delete",ar:"انسخ وانقل واحذف"},body:{en:"<p>cp copies, mv moves/renames, rm deletes.</p>",ar:"<p>cp بتنسخ، mv بتنقل/تعيد تسمية، rm بتحذف.</p>"},code:`cp a.txt b.txt
mv b.txt docs/
rm a.txt`},{t:{en:"Variables",ar:"المتغيرات"},body:{en:"<p>Store values in variables and read them back with $.</p>",ar:"<p>خزّن قيم بمتغيرات واقرأها بـ $.</p>"},code:`name="Sara"
echo "Hi $name"`,sec:{en:"Variables",ar:"المتغيرات"}},{t:{en:"Read input",ar:"اقرأ مدخلات"},body:{en:"<p>read pauses and stores what the user types.</p>",ar:"<p>read بتوقف وبتخزّن اللي بيكتبه المستخدم.</p>"},code:`read -p "Your name? " name
echo "Hi $name"`},{t:{en:"Command substitution",ar:"نتيجة أمر بمتغير"},body:{en:"<p>Capture a command's output into a variable.</p>",ar:"<p>خزّن مخرجات أمر داخل متغير.</p>"},code:`today=$(date +%Y-%m-%d)
echo "Today is $today"`},{t:{en:"Arithmetic",ar:"العمليات الحسابية"},body:{en:"<p>Do math inside double parentheses.</p>",ar:"<p>اعمل حسابات جوّا قوسين مزدوجين.</p>"},code:`a=5; b=3
echo $((a + b))`},{t:{en:"Conditions",ar:"الشروط"},body:{en:"<p>if tests a condition; brackets check files and values.</p>",ar:"<p>if بتفحص شرط، والأقواس بتتحقق من الملفات والقيم.</p>"},code:`if [ "$name" = "Sara" ]; then
  echo "Welcome"
fi`,sec:{en:"Control",ar:"التحكم"}},{t:{en:"Compare numbers",ar:"قارن الأرقام"},body:{en:"<p>Use -gt, -lt, -eq for numeric comparisons.</p>",ar:"<p>استخدم -gt و -lt و -eq لمقارنة الأرقام.</p>"},code:`age=20
if [ $age -ge 18 ]; then echo "Adult"; fi`},{t:{en:"For loops",ar:"حلقات for"},body:{en:"<p>Loop over a list of items or a number range.</p>",ar:"<p>مُرّ على قائمة عناصر أو نطاق أرقام.</p>"},code:`for i in 1 2 3 4 5; do
  echo "Number $i"
done`},{t:{en:"While loops",ar:"حلقات while"},body:{en:"<p>Repeat while a condition holds true.</p>",ar:"<p>كرّر طالما الشرط صحيح.</p>"},code:`i=1
while [ $i -le 5 ]; do
  echo $i
  i=$((i + 1))
done`},{t:{en:"Case statement",ar:"جملة case"},body:{en:"<p>case is a clean multi-way switch on a value.</p>",ar:"<p>case هي تبديل متعدد نظيف حسب قيمة.</p>"},code:`case $day in
  mon) echo "Monday";;
  *) echo "Other";;
esac`},{t:{en:"Read a file",ar:"اقرأ ملف"},body:{en:"<p>cat prints a file; head/tail show parts of it.</p>",ar:"<p>cat بتطبع ملف، head/tail بيعرضوا أجزاء منه.</p>"},code:`cat notes.txt
head -n 5 notes.txt`,sec:{en:"Files & text",ar:"الملفات والنصوص"}},{t:{en:"Search with grep",ar:"ابحث بـ grep"},body:{en:"<p>grep finds lines that match a pattern.</p>",ar:"<p>grep بتلاقي الأسطر اللي بتطابق نمط.</p>"},code:`grep "error" log.txt
grep -i "warn" log.txt`},{t:{en:"Pipes",ar:"الأنابيب"},body:{en:"<p>A pipe sends one command's output into another.</p>",ar:"<p>الأنبوب بيبعت مخرجات أمر لأمر ثاني.</p>"},code:'ls -l | grep ".txt" | wc -l'},{t:{en:"Redirection",ar:"إعادة التوجيه"},body:{en:"<p>> writes output to a file; >> appends to it.</p>",ar:"<p>> بتكتب المخرجات لملف، و>> بتضيف عليه.</p>"},code:`echo "log line" >> app.log
ls > files.txt`},{t:{en:"Your first script",ar:"أول سكربت"},body:{en:"<p>A script is a file of commands. The first line picks the interpreter.</p>",ar:"<p>السكربت ملف أوامر، وأول سطر بيحدد المفسّر.</p>"},code:`#!/bin/bash
echo "This is a script"`,sec:{en:"Scripts",ar:"السكربتات"}},{t:{en:"Make it executable",ar:"خلّيه قابل للتنفيذ"},body:{en:"<p>chmod +x lets you run a script directly.</p>",ar:"<p>chmod +x بتخلّيك تشغّل السكربت مباشرة.</p>"},code:`chmod +x run.sh
./run.sh`},{t:{en:"Script arguments",ar:"معطيات السكربت"},body:{en:"<p>$1, $2 hold arguments passed to your script.</p>",ar:"<p>$1 و $2 بيحملوا المعطيات الممرّرة للسكربت.</p>"},code:`#!/bin/bash
echo "Hello, $1"
# ./greet.sh Sara`},{t:{en:"Functions",ar:"الدوال"},body:{en:"<p>Group commands into reusable functions.</p>",ar:"<p>اجمع الأوامر بدوال قابلة لإعادة الاستخدام.</p>"},code:`greet() {
  echo "Hi $1"
}
greet "Sara"`},{t:{en:"Exit codes",ar:"رموز الخروج"},body:{en:"<p>$? holds whether the last command succeeded (0) or failed.</p>",ar:"<p>$? بيحمل إذا آخر أمر نجح (0) أو فشل.</p>"},code:`ls /tmp
echo $?   # 0 means success`},{t:{en:"Wildcards",ar:"الرموز البديلة"},body:{en:"<p>* and ? match many filenames at once.</p>",ar:"<p>* و ؟ بيطابقوا أسماء ملفات كثيرة مرّة وحدة.</p>"},code:`ls *.txt
rm temp_?.log`,sec:{en:"Power tools",ar:"أدوات قوية"}},{t:{en:"Environment variables",ar:"متغيرات البيئة"},body:{en:"<p>env vars like $HOME and $PATH configure your shell.</p>",ar:"<p>متغيرات البيئة مثل $HOME و $PATH بتضبط الطرفية.</p>"},code:`echo $HOME
export API_KEY="123"`},{t:{en:"Chaining commands",ar:"ربط الأوامر"},body:{en:"<p>&& runs the next command only if the first succeeds.</p>",ar:"<p>&& بتشغّل الأمر التالي فقط إذا الأول نجح.</p>"},code:'mkdir build && cd build && echo "ready"'},{t:{en:"Cron basics",ar:"أساسيات cron"},body:{en:"<p>cron schedules commands to run automatically.</p>",ar:"<p>cron بيجدول أوامر لتشتغل تلقائياً.</p>"},code:`# run every day at 9am
0 9 * * * /home/backup.sh`},{t:{en:"Permissions",ar:"الصلاحيات"},body:{en:"<p>chmod and chown control who can read/write/run files.</p>",ar:"<p>chmod و chown بيتحكموا مين يقدر يقرأ/يكتب/يشغّل.</p>"},code:`chmod 755 script.sh
ls -l script.sh`},{t:{en:"Find files",ar:"ابحث عن ملفات"},body:{en:"<p>find locates files by name, type, or age.</p>",ar:"<p>find بتلاقي الملفات بالاسم أو النوع أو العمر.</p>"},code:`find . -name "*.log"
find . -type d`},{t:{en:"Mini project: backup script",ar:"مشروع صغير: سكربت نسخ احتياطي"},body:{en:"<p>Write a script that copies a folder into a timestamped backup.</p>",ar:"<p>اكتب سكربت بينسخ مجلد لنسخة احتياطية بتاريخها.</p>"},code:`#!/bin/bash
src="myapp"
dest="backup_$(date +%F)"
cp -r "$src" "$dest"
echo "Backed up to $dest"`,sec:{en:"Project",ar:"المشروع"}},{t:{en:"Full automation + certificate",ar:"أتمتة كاملة + الشهادة"},body:{en:"<p>Combine variables, loops and conditions into one useful tool. 🏆 Get your certificate!</p>",ar:"<p>اجمع المتغيرات والحلقات والشروط بأداة مفيدة. 🏆 استلم شهادتك!</p>",cert:!0},code:`#!/bin/bash
for f in *.txt; do
  echo "Processing $f"
done
echo "Done!"`}]},git:{name:"Git",icon:"🌿",lessons:[{t:{en:"What is Git?",ar:"ما هو Git؟"},body:{en:"<p>Git tracks every change to your code so you never lose work and can travel back in time.</p>",ar:"<p>Git بيتابع كل تغيير بكودك فما بتخسر شغلك وبتقدر ترجع بالزمن.</p>"},code:"git --version",sec:{en:"Start",ar:"البداية"}},{t:{en:"Configure Git",ar:"إعداد Git"},body:{en:"<p>Set your name and email once; every commit is signed with them.</p>",ar:"<p>حدّد اسمك وإيميلك مرّة، وكل commit بينحفظ فيهم.</p>"},code:`git config --global user.name "Sara"
git config --global user.email "sara@mail.com"`},{t:{en:"Start a repository",ar:"ابدأ مستودع"},body:{en:"<p>git init turns any folder into a tracked repository.</p>",ar:"<p>git init بيحوّل أي مجلد لمستودع متتبَّع.</p>"},code:"git init"},{t:{en:"Check status",ar:"افحص الحالة"},body:{en:"<p>git status shows what changed and what is ready to commit.</p>",ar:"<p>git status بيعرض شو تغيّر وشو جاهز للـ commit.</p>"},code:"git status"},{t:{en:"Stage files",ar:"جهّز الملفات"},body:{en:"<p>git add moves changes to the staging area, ready to be saved.</p>",ar:"<p>git add بينقل التغييرات لمنطقة التجهيز، جاهزة للحفظ.</p>"},code:`git add index.html
git add .   # stage everything`,sec:{en:"Saving work",ar:"حفظ العمل"}},{t:{en:"Your first commit",ar:"أول commit"},body:{en:"<p>A commit is a saved snapshot with a message describing it.</p>",ar:"<p>الـ commit لقطة محفوظة مع رسالة بتوصفها.</p>"},code:'git commit -m "Add homepage"'},{t:{en:"View history",ar:"شوف السجل"},body:{en:"<p>git log lists every commit; --oneline keeps it compact.</p>",ar:"<p>git log بيعرض كل commit، و--oneline بيخلّيه مختصر.</p>"},code:"git log --oneline"},{t:{en:"See differences",ar:"شوف الفروقات"},body:{en:"<p>git diff shows exactly what lines you changed.</p>",ar:"<p>git diff بيعرض بالضبط أي أسطر غيّرتها.</p>"},code:"git diff"},{t:{en:"Undo changes",ar:"تراجع"},body:{en:"<p>Restore a file to its last committed state.</p>",ar:"<p>ارجّع ملف لآخر حالة محفوظة.</p>"},code:"git restore index.html"},{t:{en:"Why branches?",ar:"ليش الفروع؟"},body:{en:"<p>Branches let you build features safely without touching the main code.</p>",ar:"<p>الفروع بتخلّيك تبني ميزات بأمان بدون ما تلمس الكود الرئيسي.</p>"},code:"git branch",sec:{en:"Branches",ar:"الفروع"}},{t:{en:"Create a branch",ar:"أنشئ فرع"},body:{en:"<p>Make a new branch to work on a feature in isolation.</p>",ar:"<p>اعمل فرع جديد لتشتغل على ميزة لحالها.</p>"},code:"git branch feature-login"},{t:{en:"Switch branches",ar:"بدّل الفروع"},body:{en:"<p>Move between branches with switch (or checkout).</p>",ar:"<p>تنقّل بين الفروع بـ switch (أو checkout).</p>"},code:"git switch feature-login"},{t:{en:"Create + switch",ar:"أنشئ وبدّل"},body:{en:"<p>One command to create a branch and jump onto it.</p>",ar:"<p>أمر واحد لإنشاء فرع والقفز عليه.</p>"},code:"git switch -c feature-login"},{t:{en:"Merge a branch",ar:"ادمج فرع"},body:{en:"<p>Bring a finished feature back into main.</p>",ar:"<p>ارجّع ميزة جاهزة للفرع الرئيسي.</p>"},code:`git switch main
git merge feature-login`},{t:{en:"Delete a branch",ar:"احذف فرع"},body:{en:"<p>Clean up a branch after merging it.</p>",ar:"<p>نظّف الفرع بعد ما دمجته.</p>"},code:"git branch -d feature-login"},{t:{en:"What is a remote?",ar:"ما هو الـ remote؟"},body:{en:"<p>A remote is a copy of your repo hosted online, like on GitHub.</p>",ar:"<p>الـ remote نسخة من مستودعك مستضافة أونلاين، مثل GitHub.</p>"},code:"git remote -v",sec:{en:"Remote (GitHub)",ar:"السحابة (GitHub)"}},{t:{en:"Connect to GitHub",ar:"اربط مع GitHub"},body:{en:"<p>Link your local repo to a GitHub URL named origin.</p>",ar:"<p>اربط مستودعك المحلي برابط GitHub اسمه origin.</p>"},code:"git remote add origin https://github.com/you/repo.git"},{t:{en:"Push your code",ar:"ارفع كودك"},body:{en:"<p>Upload your commits to GitHub with push.</p>",ar:"<p>ارفع الـ commits تبعتك لـ GitHub بـ push.</p>"},code:"git push -u origin main"},{t:{en:"Clone a repo",ar:"انسخ مستودع"},body:{en:"<p>Download an entire project from GitHub.</p>",ar:"<p>نزّل مشروع كامل من GitHub.</p>"},code:"git clone https://github.com/you/repo.git"},{t:{en:"Pull updates",ar:"اسحب التحديثات"},body:{en:"<p>Fetch and merge the latest changes from GitHub.</p>",ar:"<p>اجلب وادمج آخر التغييرات من GitHub.</p>"},code:"git pull origin main"},{t:{en:"Amend a commit",ar:"عدّل آخر commit"},body:{en:"<p>Fix the message or contents of your last commit.</p>",ar:"<p>صلّح رسالة أو محتوى آخر commit.</p>"},code:'git commit --amend -m "Better message"',sec:{en:"Fixing things",ar:"إصلاح الأمور"}},{t:{en:"Unstage a file",ar:"ألغِ التجهيز"},body:{en:"<p>Remove a file from staging without losing changes.</p>",ar:"<p>شيل ملف من التجهيز بدون ما تخسر التغييرات.</p>"},code:"git restore --staged index.html"},{t:{en:"Ignore files",ar:"تجاهل ملفات"},body:{en:"<p>A .gitignore file tells Git which files to skip.</p>",ar:"<p>ملف .gitignore بيقول لـ Git أي ملفات يتجاهل.</p>"},code:`# .gitignore
node_modules/
.env`},{t:{en:"Stash work",ar:"خبّئ الشغل"},body:{en:"<p>Temporarily shelve changes to switch tasks quickly.</p>",ar:"<p>خبّئ التغييرات مؤقتاً لتبدّل المهمة بسرعة.</p>"},code:`git stash
git stash pop`},{t:{en:"Tag a version",ar:"علّم إصدار"},body:{en:"<p>Tags mark important points like releases (v1.0).</p>",ar:"<p>الوسوم بتعلّم نقاط مهمة مثل الإصدارات (v1.0).</p>"},code:`git tag v1.0
git push origin v1.0`},{t:{en:"Pull requests",ar:"طلبات الدمج"},body:{en:"<p>A pull request proposes your branch to be merged, with review.</p>",ar:"<p>الـ pull request بيقترح دمج فرعك مع مراجعة.</p>"},code:"# push your branch, then open a PR on GitHub",sec:{en:"Teamwork",ar:"العمل الجماعي"}},{t:{en:"Resolve conflicts",ar:"حل التعارضات"},body:{en:"<p>When two people edit the same line, Git asks you to choose.</p>",ar:"<p>لمّا شخصين يعدّلوا نفس السطر، Git بيطلب منك تختار.</p>"},code:`# edit the marked file, then:
git add file.txt
git commit`},{t:{en:"Review history",ar:"راجع التاريخ"},body:{en:"<p>Blame shows who changed each line and when.</p>",ar:"<p>blame بيعرض مين غيّر كل سطر وإمتى.</p>"},code:"git blame index.html"},{t:{en:"Mini project: a real repo",ar:"مشروع صغير: مستودع حقيقي"},body:{en:"<p>Init a repo, commit twice, branch, merge — the full daily loop.</p>",ar:"<p>اعمل مستودع، commit مرتين، فرّع، ادمج — الدورة اليومية الكاملة.</p>"},code:`git init
git add .
git commit -m "v1"
git switch -c feature
git commit -am "v2"
git switch main
git merge feature`,sec:{en:"Project",ar:"المشروع"}},{t:{en:"Publish to GitHub + certificate",ar:"انشر على GitHub + الشهادة"},body:{en:"<p>Push your project live to GitHub. 🏆 Then claim your certificate!</p>",ar:"<p>ارفع مشروعك لـ GitHub. 🏆 وبعدها استلم شهادتك!</p>",cert:!0},code:`git remote add origin <url>
git push -u origin main`}]}};Object.keys(e).forEach(function(n){var o=e[n];window.COURSES[n]={title:{en:o.name+" — from zero",ar:o.name+" — من الصفر"},subtitle:{en:o.name+" from Scratch",ar:o.name+" من الصفر"},icon:o.icon,level:{en:"Beginner",ar:"مبتدئ"},run:"none",lessons:o.lessons}}),window.COURSE_ORDER=["python","javascript","typescript","web","java","csharp","cpp","c","php","go","ruby","rust","kotlin","swift","r","sql","mongodb","node","react","django","data","dsa","mobile","bash","git"]})(),(function(){var e={web:[{t:{en:"CSS: styling pages",ar:"CSS: تنسيق الصفحات"},body:{en:"<p>CSS controls how your HTML looks — colors, fonts, spacing and layout.</p>",ar:"<p>CSS بتتحكم بشكل الـ HTML: الألوان والخطوط والمسافات والتخطيط.</p>"},code:`<style>
  p { color: green; font-size: 18px; }
</style>
<p>Styled text</p>`,sec:{en:"Styling (CSS)",ar:"التنسيق CSS"}},{t:{en:"Colors & text",ar:"الألوان والنصوص"},body:{en:"<p>Set text color, background, size and alignment with CSS properties.</p>",ar:"<p>حدّد لون النص والخلفية والحجم والمحاذاة بخصائص CSS.</p>"},code:`h1 {
  color: #4f46e5;
  text-align: center;
  font-family: sans-serif;
}`},{t:{en:"The box model",ar:"نموذج الصندوق"},body:{en:"<p>Every element is a box with content, padding, border and margin.</p>",ar:"<p>كل عنصر عبارة عن صندوق فيه محتوى وحشو وحدود وهامش.</p>"},code:`.card {
  padding: 20px;
  border: 1px solid #ccc;
  margin: 10px;
}`},{t:{en:"Classes & selectors",ar:"الكلاسات والمحددات"},body:{en:"<p>Target elements by tag, .class or #id to style exactly what you want.</p>",ar:"<p>استهدف العناصر بالوسم أو .class أو #id لتنسّق بالضبط اللي بدك.</p>"},code:`<p class="note">Hi</p>
<style>
.note { background: #eef; }
</style>`},{t:{en:"Flexbox",ar:"Flexbox"},body:{en:"<p>Flexbox arranges items in a row or column and spaces them beautifully.</p>",ar:"<p>Flexbox بترتّب العناصر بصف أو عمود وبتوزّع المسافات بشكل جميل.</p>"},code:`.row {
  display: flex;
  gap: 12px;
  justify-content: space-between;
}`,sec:{en:"Layout",ar:"التخطيط"}},{t:{en:"CSS Grid",ar:"CSS Grid"},body:{en:"<p>Grid builds two-dimensional layouts with rows and columns.</p>",ar:"<p>Grid بتبني تخطيطات ثنائية الأبعاد بصفوف وأعمدة.</p>"},code:`.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
}`},{t:{en:"Responsive design",ar:"التصميم المتجاوب"},body:{en:"<p>Media queries adapt your layout to phones, tablets and desktops.</p>",ar:"<p>استعلامات الوسائط بتكيّف التخطيط للجوال والتابلت والحاسوب.</p>"},code:`@media (max-width: 600px) {
  .grid { grid-template-columns: 1fr; }
}`},{t:{en:"Position & hover",ar:"الموضع والتحويم"},body:{en:"<p>Position elements precisely and react to the mouse with :hover.</p>",ar:"<p>ثبّت العناصر بدقّة وتفاعل مع الماوس بـ :hover.</p>"},code:`.btn:hover {
  background: #0369a1;
  transition: 0.3s;
}`},{t:{en:"JavaScript in a page",ar:"JavaScript بالصفحة"},body:{en:"<p>JavaScript makes pages interactive. Add it with a <script> tag.</p>",ar:"<p>JavaScript بتخلّي الصفحات تفاعلية. أضفها بوسم <script>.</p>"},code:`<script>
  console.log("Page loaded!");
  alert("Welcome");
<\/script>`,sec:{en:"Interactivity (JS)",ar:"التفاعل JS"}},{t:{en:"Select elements",ar:"اختيار العناصر"},body:{en:"<p>Grab an HTML element from JavaScript to read or change it.</p>",ar:"<p>امسك عنصر HTML من JavaScript لتقرأه أو تغيّره.</p>"},code:`const title = document.querySelector("h1");
console.log(title.textContent);`},{t:{en:"Change content & style",ar:"غيّر المحتوى والشكل"},body:{en:"<p>Update text and CSS live from JavaScript.</p>",ar:"<p>حدّث النص و CSS مباشرة من JavaScript.</p>"},code:`const el = document.querySelector("#msg");
el.textContent = "Changed!";
el.style.color = "green";`},{t:{en:"Handle clicks",ar:"تعامل مع النقر"},body:{en:"<p>Run code when the user clicks with addEventListener.</p>",ar:"<p>شغّل كود لمّا المستخدم يضغط بـ addEventListener.</p>"},code:`const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  alert("Clicked!");
});`},{t:{en:"Read form input",ar:"اقرأ مدخلات النموذج"},body:{en:"<p>Get what the user typed into an input field.</p>",ar:"<p>اجلب اللي كتبه المستخدم بحقل الإدخال.</p>"},code:`const name = document.querySelector("#name").value;
console.log("Hi " + name);`},{t:{en:"Show/hide with logic",ar:"إظهار/إخفاء بالمنطق"},body:{en:"<p>Use if/else to decide what appears on the page.</p>",ar:"<p>استخدم if/else لتقرّر شو بيظهر بالصفحة.</p>"},code:`if (score >= 50) {
  box.textContent = "Pass";
} else {
  box.textContent = "Try again";
}`},{t:{en:"Build a list",ar:"ابنِ قائمة"},body:{en:"<p>Loop over data and add elements to the page.</p>",ar:"<p>مُرّ على البيانات وأضف عناصر للصفحة.</p>"},code:`const items = ["a", "b", "c"];
items.forEach(t => {
  const li = document.createElement("li");
  li.textContent = t;
  list.appendChild(li);
});`},{t:{en:"Fetch data from the web",ar:"اجلب بيانات من الويب"},body:{en:"<p>fetch loads data from an API without reloading the page.</p>",ar:"<p>fetch بتحمّل بيانات من API بدون إعادة تحميل الصفحة.</p>"},code:`fetch("https://api.example.com/user")
  .then(r => r.json())
  .then(data => console.log(data));`},{t:{en:"Style + script together",ar:"التنسيق والكود معاً"},body:{en:"<p>Combine HTML, CSS and JS into one interactive component.</p>",ar:"<p>اجمع HTML و CSS و JS بمكوّن تفاعلي واحد.</p>"},code:`<button id="like">Like (0)</button>
<script>
let n = 0;
like.onclick = () => like.textContent = "Like (" + (++n) + ")";
<\/script>`,sec:{en:"Project",ar:"المشروع"}},{t:{en:"Mini project: counter",ar:"مشروع صغير: عدّاد"},body:{en:"<p>Build a click counter with a styled button and live number.</p>",ar:"<p>ابنِ عدّاد نقرات بزر منسّق ورقم حيّ.</p>"},code:`<style>#c{font-size:2rem}</style>
<p id="c">0</p>
<button onclick="c.textContent++">+1</button>`},{t:{en:"Mini project: to-do",ar:"مشروع صغير: مهام"},body:{en:"<p>Add tasks to a list from an input box.</p>",ar:"<p>أضف مهام لقائمة من صندوق إدخال.</p>"},code:`function add() {
  const li = document.createElement("li");
  li.textContent = box.value;
  list.appendChild(li);
}`},{t:{en:"Final project + certificate",ar:"المشروع النهائي + الشهادة"},body:{en:"<p>Build a small personal page with sections, style and one interactive feature. 🏆 Then claim your certificate!</p>",ar:"<p>ابنِ صفحة شخصية صغيرة فيها أقسام وتنسيق وميزة تفاعلية. 🏆 وبعدها استلم شهادتك!</p>",cert:!0},code:`<!-- your portfolio: header, about, projects -->
<h1>Sara — Web Developer</h1>
<button onclick="alert('Hire me!')">Contact</button>`}],sql:[{t:{en:"ORDER BY",ar:"الترتيب"},body:{en:"<p>ORDER BY sorts your results ascending (ASC) or descending (DESC).</p>",ar:"<p>ORDER BY بترتّب النتائج تصاعدي (ASC) أو تنازلي (DESC).</p>"},code:`SELECT name, age FROM users
ORDER BY age DESC;`,sec:{en:"Reading data",ar:"قراءة البيانات"}},{t:{en:"LIMIT",ar:"تحديد العدد"},body:{en:"<p>LIMIT returns only the first N rows — great for top lists.</p>",ar:"<p>LIMIT بترجّع أول N صف فقط، ممتازة لقوائم الأفضل.</p>"},code:`SELECT * FROM products
ORDER BY price DESC
LIMIT 5;`},{t:{en:"DISTINCT",ar:"القيم الفريدة"},body:{en:"<p>DISTINCT removes duplicate values from a column.</p>",ar:"<p>DISTINCT بتشيل القيم المكرّرة من العمود.</p>"},code:"SELECT DISTINCT city FROM users;"},{t:{en:"LIKE (search)",ar:"البحث LIKE"},body:{en:"<p>LIKE finds text patterns with % as a wildcard.</p>",ar:"<p>LIKE بتلاقي أنماط نصية مع % كرمز بديل.</p>"},code:`SELECT * FROM users
WHERE name LIKE 'S%';`},{t:{en:"IN & BETWEEN",ar:"ضمن ومابين"},body:{en:"<p>IN matches a list; BETWEEN matches a range.</p>",ar:"<p>IN بتطابق قائمة، و BETWEEN بتطابق نطاق.</p>"},code:`SELECT * FROM users
WHERE age BETWEEN 18 AND 30
AND city IN ('Amman', 'Irbid');`},{t:{en:"COUNT",ar:"العدّ"},body:{en:"<p>COUNT tells you how many rows match.</p>",ar:"<p>COUNT بتقول كم صف مطابق.</p>"},code:`SELECT COUNT(*) FROM users
WHERE age >= 18;`,sec:{en:"Aggregating",ar:"التجميع"}},{t:{en:"SUM, AVG",ar:"المجموع والمتوسط"},body:{en:"<p>SUM adds a column; AVG averages it.</p>",ar:"<p>SUM بتجمع العمود، و AVG بتحسب متوسطه.</p>"},code:`SELECT SUM(price), AVG(price)
FROM orders;`},{t:{en:"MIN & MAX",ar:"الأصغر والأكبر"},body:{en:"<p>MIN and MAX find the smallest and largest values.</p>",ar:"<p>MIN و MAX بيلاقوا أصغر وأكبر قيمة.</p>"},code:`SELECT MIN(price), MAX(price)
FROM products;`},{t:{en:"GROUP BY",ar:"التجميع حسب"},body:{en:"<p>GROUP BY buckets rows so you can total each group.</p>",ar:"<p>GROUP BY بتجمّع الصفوف لتحسب مجموع كل مجموعة.</p>"},code:`SELECT city, COUNT(*)
FROM users
GROUP BY city;`},{t:{en:"HAVING",ar:"تصفية المجموعات"},body:{en:"<p>HAVING filters groups after GROUP BY (WHERE filters rows).</p>",ar:"<p>HAVING بتصفّي المجموعات بعد GROUP BY (وWHERE بتصفّي الصفوف).</p>"},code:`SELECT city, COUNT(*) AS n
FROM users
GROUP BY city
HAVING n > 10;`},{t:{en:"Aliases",ar:"الأسماء المستعارة"},body:{en:"<p>AS gives a table or column a short nickname.</p>",ar:"<p>AS بتعطي الجدول أو العمود اسم مختصر.</p>"},code:`SELECT u.name AS user, o.total
FROM users AS u, orders AS o;`,sec:{en:"Joining tables",ar:"دمج الجداول"}},{t:{en:"INNER JOIN",ar:"الدمج الداخلي"},body:{en:"<p>JOIN combines rows from two tables on a matching key.</p>",ar:"<p>JOIN بيجمع صفوف من جدولين على مفتاح مشترك.</p>"},code:`SELECT users.name, orders.total
FROM users
JOIN orders ON users.id = orders.user_id;`},{t:{en:"LEFT JOIN",ar:"الدمج الأيسر"},body:{en:"<p>LEFT JOIN keeps all left rows even without a match.</p>",ar:"<p>LEFT JOIN بيبقي كل صفوف اليسار حتى بدون تطابق.</p>"},code:`SELECT users.name, orders.total
FROM users
LEFT JOIN orders ON users.id = orders.user_id;`},{t:{en:"Join + aggregate",ar:"دمج وتجميع"},body:{en:"<p>Join tables then group to get totals per user.</p>",ar:"<p>ادمج الجداول ثم جمّع لتجيب المجاميع لكل مستخدم.</p>"},code:`SELECT u.name, SUM(o.total)
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.name;`},{t:{en:"Subqueries",ar:"الاستعلامات الفرعية"},body:{en:"<p>A subquery is a query inside another query.</p>",ar:"<p>الاستعلام الفرعي استعلام جوّا استعلام ثاني.</p>"},code:`SELECT name FROM users
WHERE age > (SELECT AVG(age) FROM users);`},{t:{en:"INSERT",ar:"الإضافة"},body:{en:"<p>INSERT adds a new row to a table.</p>",ar:"<p>INSERT بتضيف صف جديد للجدول.</p>"},code:`INSERT INTO users (name, age)
VALUES ('Sara', 20);`,sec:{en:"Changing data",ar:"تعديل البيانات"}},{t:{en:"UPDATE",ar:"التعديل"},body:{en:"<p>UPDATE changes existing rows — always use WHERE!</p>",ar:"<p>UPDATE بتعدّل صفوف موجودة، دايماً استخدم WHERE!</p>"},code:`UPDATE users
SET age = 21
WHERE name = 'Sara';`},{t:{en:"DELETE",ar:"الحذف"},body:{en:"<p>DELETE removes rows that match a condition.</p>",ar:"<p>DELETE بتحذف الصفوف اللي بتطابق شرط.</p>"},code:`DELETE FROM users
WHERE age < 13;`},{t:{en:"CREATE TABLE",ar:"إنشاء جدول"},body:{en:"<p>CREATE TABLE defines a new table and its columns.</p>",ar:"<p>CREATE TABLE بتعرّف جدول جديد وأعمدته.</p>"},code:`CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT,
  age INTEGER
);`,sec:{en:"Designing tables",ar:"تصميم الجداول"}},{t:{en:"Constraints",ar:"القيود"},body:{en:"<p>Constraints like NOT NULL and UNIQUE protect your data.</p>",ar:"<p>القيود مثل NOT NULL و UNIQUE بتحمي بياناتك.</p>"},code:`CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  email TEXT UNIQUE NOT NULL
);`},{t:{en:"Primary & foreign keys",ar:"المفاتيح الأساسية والخارجية"},body:{en:"<p>A foreign key links one table to another.</p>",ar:"<p>المفتاح الخارجي بيربط جدول بجدول ثاني.</p>"},code:`CREATE TABLE orders (
  id INTEGER PRIMARY KEY,
  user_id INTEGER REFERENCES users(id)
);`},{t:{en:"Indexes",ar:"الفهارس"},body:{en:"<p>An index makes lookups on a column much faster.</p>",ar:"<p>الفهرس بيسرّع البحث على العمود كثير.</p>"},code:"CREATE INDEX idx_name ON users(name);"},{t:{en:"ALTER TABLE",ar:"تعديل الجدول"},body:{en:"<p>ALTER TABLE adds or changes columns later.</p>",ar:"<p>ALTER TABLE بتضيف أو تعدّل الأعمدة لاحقاً.</p>"},code:`ALTER TABLE users
ADD COLUMN city TEXT;`},{t:{en:"Mini project: a shop DB",ar:"مشروع صغير: قاعدة متجر"},body:{en:"<p>Create users and orders tables, then join them in a report.</p>",ar:"<p>أنشئ جداول المستخدمين والطلبات، ثم ادمجهم بتقرير.</p>"},code:`SELECT u.name, COUNT(o.id) AS orders
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.name;`,sec:{en:"Project",ar:"المشروع"}},{t:{en:"Full query project + certificate",ar:"مشروع استعلامات كامل + الشهادة"},body:{en:"<p>Combine JOIN, GROUP BY and ORDER BY into one real report. 🏆 Then claim your certificate!</p>",ar:"<p>اجمع JOIN و GROUP BY و ORDER BY بتقرير حقيقي. 🏆 وبعدها استلم شهادتك!</p>",cert:!0},code:`SELECT u.city, SUM(o.total) AS revenue
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.city
ORDER BY revenue DESC;`}],node:[{t:{en:"Run a file",ar:"شغّل ملف"},body:{en:"<p>Node runs JavaScript outside the browser, right on your machine.</p>",ar:"<p>Node بتشغّل JavaScript برّا المتصفح، على جهازك مباشرة.</p>"},code:`// hello.js
console.log("Hello from Node!");
// run: node hello.js`,sec:{en:"Foundations",ar:"الأساسيات"}},{t:{en:"Modules: export",ar:"الوحدات: التصدير"},body:{en:"<p>Split code into files and share functions with module.exports.</p>",ar:"<p>قسّم الكود لملفات وشارك الدوال بـ module.exports.</p>"},code:`// math.js
function add(a, b) { return a + b; }
module.exports = { add };`},{t:{en:"Modules: require",ar:"الوحدات: الاستيراد"},body:{en:"<p>require pulls in another file or a built-in module.</p>",ar:"<p>require بتجيب ملف ثاني أو وحدة مدمجة.</p>"},code:`const { add } = require("./math");
console.log(add(5, 3));`},{t:{en:"Built-in modules",ar:"الوحدات المدمجة"},body:{en:"<p>Node ships with modules like os, path and fs.</p>",ar:"<p>Node بتجي مع وحدات مثل os و path و fs.</p>"},code:`const os = require("os");
console.log(os.platform());`},{t:{en:"Read a file",ar:"اقرأ ملف"},body:{en:"<p>The fs module reads and writes files on disk.</p>",ar:"<p>وحدة fs بتقرأ وتكتب الملفات على القرص.</p>"},code:`const fs = require("fs");
const text = fs.readFileSync("data.txt", "utf8");
console.log(text);`,sec:{en:"Files & data",ar:"الملفات والبيانات"}},{t:{en:"Write a file",ar:"اكتب ملف"},body:{en:"<p>Save data to disk with writeFileSync.</p>",ar:"<p>احفظ البيانات على القرص بـ writeFileSync.</p>"},code:`const fs = require("fs");
fs.writeFileSync("out.txt", "Saved!");`},{t:{en:"Work with JSON",ar:"تعامل مع JSON"},body:{en:"<p>Parse and stringify JSON — the language of APIs.</p>",ar:"<p>حوّل JSON نصاً وكائناً — لغة الـ APIs.</p>"},code:`const data = JSON.parse('{"name":"Sara"}');
console.log(data.name);
const s = JSON.stringify(data);`},{t:{en:"A basic HTTP server",ar:"خادم HTTP بسيط"},body:{en:"<p>The http module can serve responses to browsers.</p>",ar:"<p>وحدة http بتقدر تخدم استجابات للمتصفحات.</p>"},code:`const http = require("http");
http.createServer((req, res) => {
  res.end("Hello Web!");
}).listen(3000);`,sec:{en:"Web servers",ar:"خوادم الويب"}},{t:{en:"Handle routes",ar:"تعامل مع المسارات"},body:{en:"<p>Check req.url to return different content per path.</p>",ar:"<p>افحص req.url لترجّع محتوى مختلف لكل مسار.</p>"},code:`if (req.url === "/about") {
  res.end("About page");
} else {
  res.end("Home");
}`},{t:{en:"Send JSON",ar:"أرسل JSON"},body:{en:"<p>APIs return JSON with the right content-type header.</p>",ar:"<p>الـ APIs بترجّع JSON مع ترويسة النوع الصحيحة.</p>"},code:`res.setHeader("Content-Type", "application/json");
res.end(JSON.stringify({ ok: true }));`},{t:{en:"npm & packages",ar:"npm والحزم"},body:{en:"<p>npm installs reusable packages from the community.</p>",ar:"<p>npm بتثبّت حزم جاهزة من المجتمع.</p>"},code:`npm init -y
npm install express`,sec:{en:"npm & Express",ar:"npm و Express"}},{t:{en:"Express intro",ar:"مقدمة Express"},body:{en:"<p>Express makes building web servers simple and clean.</p>",ar:"<p>Express بتخلّي بناء الخوادم بسيط ونظيف.</p>"},code:`const express = require("express");
const app = express();
app.listen(3000);`},{t:{en:"Express routes",ar:"مسارات Express"},body:{en:"<p>app.get defines what to send for each URL.</p>",ar:"<p>app.get بتحدّد شو ترسل لكل رابط.</p>"},code:`app.get("/", (req, res) => {
  res.send("Home page");
});`},{t:{en:"Route parameters",ar:"معطيات المسار"},body:{en:"<p>Capture dynamic parts of the URL with :id.</p>",ar:"<p>التقط أجزاء متغيّرة من الرابط بـ :id.</p>"},code:`app.get("/user/:id", (req, res) => {
  res.send("User " + req.params.id);
});`},{t:{en:"Query strings",ar:"سلسلة الاستعلام"},body:{en:"<p>Read ?key=value data from req.query.</p>",ar:"<p>اقرأ بيانات ?key=value من req.query.</p>"},code:`app.get("/search", (req, res) => {
  res.send("You searched: " + req.query.q);
});`},{t:{en:"Return JSON",ar:"أرجع JSON"},body:{en:"<p>res.json sends objects as a JSON API response.</p>",ar:"<p>res.json بترسل الكائنات كاستجابة JSON.</p>"},code:`app.get("/api/users", (req, res) => {
  res.json([{ name: "Sara" }]);
});`,sec:{en:"Building APIs",ar:"بناء الـ APIs"}},{t:{en:"Read POST body",ar:"اقرأ جسم POST"},body:{en:"<p>express.json() lets you read data sent by the client.</p>",ar:"<p>express.json() بتخلّيك تقرأ البيانات المرسلة من العميل.</p>"},code:`app.use(express.json());
app.post("/api/users", (req, res) => {
  res.json(req.body);
});`},{t:{en:"Middleware",ar:"الوسيط"},body:{en:"<p>Middleware runs on every request — great for logging.</p>",ar:"<p>الوسيط بيشتغل على كل طلب، ممتاز للتسجيل.</p>"},code:`app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});`},{t:{en:"Serve static files",ar:"قدّم ملفات ثابتة"},body:{en:"<p>Serve HTML, CSS and images from a folder.</p>",ar:"<p>قدّم HTML و CSS والصور من مجلد.</p>"},code:'app.use(express.static("public"));'},{t:{en:"Full REST API",ar:"واجهة REST كاملة"},body:{en:"<p>GET, POST, PUT and DELETE form a complete API.</p>",ar:"<p>GET و POST و PUT و DELETE بيشكّلوا API كامل.</p>"},code:`app.get("/items", getAll);
app.post("/items", create);
app.delete("/items/:id", remove);`},{t:{en:"Async / await",ar:"async / await"},body:{en:"<p>Handle asynchronous work cleanly with async/await.</p>",ar:"<p>تعامل مع العمليات غير المتزامنة بأناقة بـ async/await.</p>"},code:`app.get("/data", async (req, res) => {
  const rows = await loadData();
  res.json(rows);
});`,sec:{en:"Robust apps",ar:"تطبيقات متينة"}},{t:{en:"Error handling",ar:"معالجة الأخطاء"},body:{en:"<p>Catch errors so the server never crashes on one bad request.</p>",ar:"<p>امسك الأخطاء لما يوقع الخادم من طلب واحد سيّئ.</p>"},code:`try {
  const d = await load();
  res.json(d);
} catch (e) {
  res.status(500).json({ error: e.message });
}`},{t:{en:"Environment variables",ar:"متغيرات البيئة"},body:{en:"<p>Keep secrets like keys out of code with process.env.</p>",ar:"<p>خبّي الأسرار مثل المفاتيح برّا الكود بـ process.env.</p>"},code:`const port = process.env.PORT || 3000;
app.listen(port);`},{t:{en:"Mini project: notes API",ar:"مشروع صغير: واجهة ملاحظات"},body:{en:"<p>Build GET and POST routes that store notes in an array.</p>",ar:"<p>ابنِ مسارات GET و POST بتخزّن ملاحظات بمصفوفة.</p>"},code:`const notes = [];
app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.json(notes);
});`,sec:{en:"Project",ar:"المشروع"}},{t:{en:"Full API project + certificate",ar:"مشروع API كامل + الشهادة"},body:{en:"<p>Combine routes, JSON body and error handling into a real API. 🏆 Then claim your certificate!</p>",ar:"<p>اجمع المسارات وجسم JSON ومعالجة الأخطاء بـ API حقيقي. 🏆 وبعدها استلم شهادتك!</p>",cert:!0},code:`// a complete tasks API: list, add, complete, delete
app.get("/tasks", (req, res) => res.json(tasks));`}],react:[{t:{en:"What is React?",ar:"ما هو React؟"},body:{en:"<p>React builds user interfaces from small, reusable components.</p>",ar:"<p>React بتبني الواجهات من مكوّنات صغيرة قابلة لإعادة الاستخدام.</p>"},code:`function App() {
  return <h1>Hello React</h1>;
}`,sec:{en:"Foundations",ar:"الأساسيات"}},{t:{en:"JSX",ar:"JSX"},body:{en:"<p>JSX lets you write HTML-like markup inside JavaScript.</p>",ar:"<p>JSX بتخلّيك تكتب كود يشبه HTML جوّا JavaScript.</p>"},code:'const el = <p className="note">Hi {2 + 3}</p>;'},{t:{en:"Your first component",ar:"أول مكوّن"},body:{en:"<p>A component is a function that returns JSX.</p>",ar:"<p>المكوّن دالة بترجّع JSX.</p>"},code:`function Welcome() {
  return <h2>Welcome!</h2>;
}`},{t:{en:"Nesting components",ar:"تداخل المكوّنات"},body:{en:"<p>Build big UIs by composing small components.</p>",ar:"<p>ابنِ واجهات كبيرة بتركيب مكوّنات صغيرة.</p>"},code:`function App() {
  return (<div><Welcome /><Welcome /></div>);
}`},{t:{en:"Props",ar:"الخصائص Props"},body:{en:"<p>Props pass data from a parent into a child component.</p>",ar:"<p>الخصائص بتمرّر بيانات من الأب للمكوّن الابن.</p>"},code:`function Hello({ name }) {
  return <p>Hi {name}</p>;
}
<Hello name="Sara" />`,sec:{en:"Data flow",ar:"تدفق البيانات"}},{t:{en:"Children",ar:"المحتوى الداخلي"},body:{en:"<p>props.children renders whatever you put between tags.</p>",ar:"<p>props.children بتعرض اللي بتحطه بين الوسمين.</p>"},code:`function Card({ children }) {
  return <div className="card">{children}</div>;
}`},{t:{en:"State with useState",ar:"الحالة useState"},body:{en:"<p>State is data that changes and re-renders the UI.</p>",ar:"<p>الحالة بيانات بتتغيّر وبتعيد رسم الواجهة.</p>"},code:`const [count, setCount] = useState(0);
<button onClick={() => setCount(count + 1)}>{count}</button>`},{t:{en:"Handling events",ar:"معالجة الأحداث"},body:{en:"<p>Respond to clicks, typing and more with event handlers.</p>",ar:"<p>تفاعل مع النقر والكتابة وغيرها بمعالجات الأحداث.</p>"},code:'<button onClick={() => alert("Hi")}>Click</button>'},{t:{en:"Conditional rendering",ar:"العرض الشرطي"},body:{en:"<p>Show different UI based on a condition.</p>",ar:"<p>اعرض واجهات مختلفة حسب شرط.</p>"},code:"{isLoggedIn ? <Dashboard /> : <Login />}",sec:{en:"Rendering",ar:"العرض"}},{t:{en:"Lists & keys",ar:"القوائم والمفاتيح"},body:{en:"<p>Render arrays with map, and give each item a key.</p>",ar:"<p>اعرض المصفوفات بـ map، وأعطِ كل عنصر مفتاح.</p>"},code:`{users.map(u => (
  <li key={u.id}>{u.name}</li>
))}`},{t:{en:"Forms & inputs",ar:"النماذج والمدخلات"},body:{en:"<p>Controlled inputs keep form data in state.</p>",ar:"<p>المدخلات المتحكَّم فيها بتحفظ بيانات النموذج بالحالة.</p>"},code:`const [text, setText] = useState("");
<input value={text} onChange={e => setText(e.target.value)} />`},{t:{en:"useEffect",ar:"useEffect"},body:{en:"<p>useEffect runs code after render — like loading data.</p>",ar:"<p>useEffect بتشغّل كود بعد الرسم، مثل تحميل البيانات.</p>"},code:`useEffect(() => {
  console.log("mounted");
}, []);`,sec:{en:"Hooks",ar:"الـ Hooks"}},{t:{en:"Fetching data",ar:"جلب البيانات"},body:{en:"<p>Load data from an API inside useEffect.</p>",ar:"<p>حمّل بيانات من API جوّا useEffect.</p>"},code:`useEffect(() => {
  fetch("/api/users")
    .then(r => r.json())
    .then(setUsers);
}, []);`},{t:{en:"Lifting state up",ar:"رفع الحالة"},body:{en:"<p>Share state by moving it to a common parent.</p>",ar:"<p>شارك الحالة بنقلها للأب المشترك.</p>"},code:`function Parent() {
  const [n, setN] = useState(0);
  return <Child n={n} onAdd={() => setN(n + 1)} />;
}`},{t:{en:"useRef",ar:"useRef"},body:{en:"<p>useRef holds a value or DOM node without re-rendering.</p>",ar:"<p>useRef بتمسك قيمة أو عنصر DOM بدون إعادة رسم.</p>"},code:`const inputRef = useRef(null);
<input ref={inputRef} />`},{t:{en:"Context",ar:"السياق"},body:{en:"<p>Context shares data with deep components without prop drilling.</p>",ar:"<p>السياق بيشارك البيانات مع مكوّنات عميقة بدون تمرير متسلسل.</p>"},code:`const Theme = createContext("dark");
<Theme.Provider value="light">...</Theme.Provider>`},{t:{en:"Custom hooks",ar:"hooks مخصّصة"},body:{en:"<p>Extract reusable logic into your own hook.</p>",ar:"<p>استخرج منطق قابل لإعادة الاستخدام بـ hook خاص.</p>"},code:`function useCounter() {
  const [n, setN] = useState(0);
  return { n, inc: () => setN(n + 1) };
}`},{t:{en:"useReducer",ar:"useReducer"},body:{en:"<p>useReducer manages complex state with actions.</p>",ar:"<p>useReducer بتدير حالة معقّدة بالأفعال.</p>"},code:`const [state, dispatch] = useReducer(reducer, { count: 0 });
dispatch({ type: "inc" });`},{t:{en:"Component styling",ar:"تنسيق المكوّنات"},body:{en:"<p>Style components with className or inline style objects.</p>",ar:"<p>نسّق المكوّنات بـ className أو كائنات style.</p>"},code:'<div style={{ color: "green", padding: 10 }}>Styled</div>',sec:{en:"Building apps",ar:"بناء التطبيقات"}},{t:{en:"Composition patterns",ar:"أنماط التركيب"},body:{en:"<p>Compose components to avoid repeating yourself.</p>",ar:"<p>ركّب المكوّنات لتتجنّب التكرار.</p>"},code:`<Layout>
  <Header />
  <Content />
</Layout>`},{t:{en:"Fragments",ar:"الأجزاء"},body:{en:"<p>Return multiple elements without an extra div.</p>",ar:"<p>أرجع عدّة عناصر بدون div زيادة.</p>"},code:"return (<><h1>Title</h1><p>Text</p></>);"},{t:{en:"Routing intro",ar:"مقدمة التوجيه"},body:{en:"<p>React Router shows different pages without reloading.</p>",ar:"<p>React Router بيعرض صفحات مختلفة بدون إعادة تحميل.</p>"},code:'<Route path="/about" element={<About />} />'},{t:{en:"Deploying",ar:"النشر"},body:{en:"<p>Build your app and host it on Netlify or Vercel.</p>",ar:"<p>ابنِ تطبيقك واستضفه على Netlify أو Vercel.</p>"},code:`npm run build
// upload the "build" folder`},{t:{en:"Mini project: to-do app",ar:"مشروع صغير: تطبيق مهام"},body:{en:"<p>Combine state, input and a list into a working to-do.</p>",ar:"<p>اجمع الحالة والإدخال والقائمة بتطبيق مهام شغّال.</p>"},code:`const [tasks, setTasks] = useState([]);
const add = t => setTasks([...tasks, t]);`,sec:{en:"Project",ar:"المشروع"}},{t:{en:"Full component app + certificate",ar:"تطبيق مكوّنات كامل + الشهادة"},body:{en:"<p>Build a multi-component app with state and events. 🏆 Then claim your certificate!</p>",ar:"<p>ابنِ تطبيق متعدد المكوّنات فيه حالة وأحداث. 🏆 وبعدها استلم شهادتك!</p>",cert:!0},code:`// a todo app: add, toggle done, delete, filter
function App() { return <TodoList />; }`}],data:[{t:{en:"What is data science?",ar:"ما هو علم البيانات؟"},body:{en:"<p>Data science turns raw numbers into insight using Python tools.</p>",ar:"<p>علم البيانات بيحوّل الأرقام الخام لرؤى باستخدام أدوات بايثون.</p>"},code:`import numpy as np
import pandas as pd
print("Tools ready")`,sec:{en:"NumPy",ar:"NumPy"}},{t:{en:"NumPy arrays",ar:"مصفوفات NumPy"},body:{en:"<p>NumPy arrays store numbers efficiently for fast math.</p>",ar:"<p>مصفوفات NumPy بتخزّن الأرقام بكفاءة لحساب سريع.</p>"},code:`import numpy as np
a = np.array([1, 2, 3, 4])
print(a.mean())`},{t:{en:"Array math",ar:"حساب المصفوفات"},body:{en:"<p>Do math on whole arrays at once — no loops needed.</p>",ar:"<p>اعمل حساب على مصفوفات كاملة مرّة وحدة، بدون حلقات.</p>"},code:`a = np.array([1, 2, 3])
print(a * 2)
print(a + 10)`},{t:{en:"Array stats",ar:"إحصاءات المصفوفة"},body:{en:"<p>Get sum, mean, max and std in one call.</p>",ar:"<p>اجلب المجموع والمتوسط والأكبر والانحراف بأمر واحد.</p>"},code:`a = np.array([4, 8, 15, 16, 23])
print(a.sum(), a.mean(), a.max())`},{t:{en:"Series",ar:"السلسلة Series"},body:{en:"<p>A Series is a labeled 1-D column of data.</p>",ar:"<p>السلسلة عمود بيانات أحادي مع تسميات.</p>"},code:`s = pd.Series([10, 20, 30], index=["a", "b", "c"])
print(s["b"])`,sec:{en:"Pandas basics",ar:"أساسيات Pandas"}},{t:{en:"DataFrame",ar:"إطار البيانات"},body:{en:"<p>A DataFrame is a table with rows and named columns.</p>",ar:"<p>إطار البيانات جدول بصفوف وأعمدة مسمّاة.</p>"},code:`df = pd.DataFrame({
  "name": ["Sara", "Ali"],
  "age": [20, 25]
})
print(df)`},{t:{en:"Read a CSV",ar:"اقرأ ملف CSV"},body:{en:"<p>Load real data from a CSV file into a DataFrame.</p>",ar:"<p>حمّل بيانات حقيقية من ملف CSV لإطار بيانات.</p>"},code:`df = pd.read_csv("data.csv")
print(df.head())`},{t:{en:"Inspect data",ar:"افحص البيانات"},body:{en:"<p>head, info and shape give a quick overview.</p>",ar:"<p>head و info و shape بيعطوا نظرة سريعة.</p>"},code:`print(df.shape)
print(df.info())
print(df.describe())`},{t:{en:"Select columns",ar:"اختر أعمدة"},body:{en:"<p>Pick one or more columns by name.</p>",ar:"<p>اختر عمود أو أكثر بالاسم.</p>"},code:`print(df["age"])
print(df[["name", "age"]])`,sec:{en:"Wrangling",ar:"معالجة البيانات"}},{t:{en:"Filter rows",ar:"صفِّ الصفوف"},body:{en:"<p>Keep only rows that meet a condition.</p>",ar:"<p>خلّي بس الصفوف اللي بتحقّق شرط.</p>"},code:`adults = df[df["age"] >= 18]
print(adults)`},{t:{en:"Add a column",ar:"أضف عمود"},body:{en:"<p>Create a new column from existing ones.</p>",ar:"<p>أنشئ عمود جديد من الأعمدة الموجودة.</p>"},code:`df["is_adult"] = df["age"] >= 18
print(df)`},{t:{en:"Missing values",ar:"القيم الناقصة"},body:{en:"<p>Find and fill or drop missing (NaN) values.</p>",ar:"<p>لاقِ واملأ أو احذف القيم الناقصة (NaN).</p>"},code:`print(df.isnull().sum())
df = df.dropna()`},{t:{en:"Sort data",ar:"رتّب البيانات"},body:{en:"<p>Order rows by any column.</p>",ar:"<p>رتّب الصفوف حسب أي عمود.</p>"},code:'print(df.sort_values("age", ascending=False))'},{t:{en:"GroupBy",ar:"التجميع"},body:{en:"<p>Group rows and compute a value per group.</p>",ar:"<p>جمّع الصفوف واحسب قيمة لكل مجموعة.</p>"},code:'print(df.groupby("city")["age"].mean())',sec:{en:"Analysis",ar:"التحليل"}},{t:{en:"Aggregations",ar:"التجميعات"},body:{en:"<p>sum, count and mean summarize your data.</p>",ar:"<p>sum و count و mean بتلخّص بياناتك.</p>"},code:`print(df["age"].sum())
print(df["city"].value_counts())`},{t:{en:"Describe statistics",ar:"الإحصاءات الوصفية"},body:{en:"<p>describe gives count, mean, std and quartiles.</p>",ar:"<p>describe بتعطي العدد والمتوسط والانحراف والأرباع.</p>"},code:'print(df["age"].describe())'},{t:{en:"Correlation",ar:"الارتباط"},body:{en:"<p>corr shows how columns move together.</p>",ar:"<p>corr بتبيّن كيف الأعمدة بتتحرّك مع بعض.</p>"},code:"print(df.corr(numeric_only=True))"},{t:{en:"Plot a chart",ar:"ارسم مخطط"},body:{en:"<p>matplotlib turns data into charts.</p>",ar:"<p>matplotlib بتحوّل البيانات لمخططات.</p>"},code:`import matplotlib.pyplot as plt
df["age"].plot(kind="bar")
plt.show()`,sec:{en:"Visualization",ar:"التصوير البياني"}},{t:{en:"Histogram",ar:"المدرج التكراري"},body:{en:"<p>A histogram shows the distribution of values.</p>",ar:"<p>المدرج التكراري بيعرض توزيع القيم.</p>"},code:`df["age"].plot(kind="hist", bins=10)
plt.show()`},{t:{en:"Scatter plot",ar:"مخطط التشتّت"},body:{en:"<p>Scatter plots reveal relationships between two columns.</p>",ar:"<p>مخطط التشتّت بيكشف العلاقات بين عمودين.</p>"},code:`df.plot(kind="scatter", x="age", y="score")
plt.show()`},{t:{en:"Combine datasets",ar:"ادمج البيانات"},body:{en:"<p>merge joins two DataFrames on a shared key.</p>",ar:"<p>merge بتدمج إطارين على مفتاح مشترك.</p>"},code:`result = pd.merge(users, orders, on="user_id")
print(result.head())`,sec:{en:"Real work",ar:"عمل حقيقي"}},{t:{en:"Apply functions",ar:"طبّق دوال"},body:{en:"<p>apply runs your own function on each value.</p>",ar:"<p>apply بتشغّل دالتك على كل قيمة.</p>"},code:'df["grade"] = df["score"].apply(lambda s: "A" if s >= 90 else "B")'},{t:{en:"Clean messy data",ar:"نظّف البيانات"},body:{en:"<p>Rename columns, fix types and trim text.</p>",ar:"<p>أعد تسمية الأعمدة وصلّح الأنواع ونظّف النص.</p>"},code:`df = df.rename(columns={"nm": "name"})
df["name"] = df["name"].str.strip()`},{t:{en:"Mini project: analyze sales",ar:"مشروع صغير: حلّل المبيعات"},body:{en:"<p>Load a CSV, group by product and find the top seller.</p>",ar:"<p>حمّل CSV، جمّع حسب المنتج، ولاقِ الأكثر مبيعاً.</p>"},code:`df = pd.read_csv("sales.csv")
top = df.groupby("product")["amount"].sum().idxmax()
print("Top:", top)`,sec:{en:"Project",ar:"المشروع"}},{t:{en:"Full analysis + certificate",ar:"تحليل كامل + الشهادة"},body:{en:"<p>Load, clean, group and chart a real dataset. 🏆 Then claim your certificate!</p>",ar:"<p>حمّل ونظّف وجمّع وارسم مجموعة بيانات حقيقية. 🏆 وبعدها استلم شهادتك!</p>",cert:!0},code:`df = pd.read_csv("data.csv").dropna()
summary = df.groupby("city")["sales"].sum()
summary.plot(kind="bar"); plt.show()`}],dsa:[{t:{en:"What is DSA?",ar:"ما هي الخوارزميات وهياكل البيانات؟"},body:{en:"<p>DSA is about storing data smartly and solving problems efficiently.</p>",ar:"<p>DSA بتدور حول تخزين البيانات بذكاء وحل المشاكل بكفاءة.</p>"},code:`# A good algorithm saves time and memory
print("Let's think in steps")`,sec:{en:"Thinking",ar:"التفكير"}},{t:{en:"Big-O notation",ar:"تدوين Big-O"},body:{en:"<p>Big-O measures how an algorithm scales as data grows.</p>",ar:"<p>Big-O بتقيس كيف تتوسّع الخوارزمية لمّا تكبر البيانات.</p>"},code:`# O(1) constant, O(n) linear, O(n^2) quadratic
# faster growth = slower on big data`},{t:{en:"Arrays",ar:"المصفوفات"},body:{en:"<p>Arrays store items in order with instant index access.</p>",ar:"<p>المصفوفات بتخزّن العناصر مرتّبة مع وصول فوري بالفهرس.</p>"},code:`nums = [10, 20, 30]
print(nums[1])   # O(1) access`,sec:{en:"Linear structures",ar:"الهياكل الخطية"}},{t:{en:"Array operations",ar:"عمليات المصفوفة"},body:{en:"<p>Insert, delete and search have different costs.</p>",ar:"<p>الإضافة والحذف والبحث إلهم تكاليف مختلفة.</p>"},code:`nums.append(40)   # O(1)
nums.insert(0, 5) # O(n)`},{t:{en:"Linked lists",ar:"القوائم المترابطة"},body:{en:"<p>Each node points to the next — easy inserts, no index jump.</p>",ar:"<p>كل عقدة بتشير للتالية: إضافة سهلة، بدون قفز بالفهرس.</p>"},code:`class Node:
    def __init__(self, val):
        self.val = val
        self.next = None`},{t:{en:"Stacks (LIFO)",ar:"المكدّس (LIFO)"},body:{en:"<p>A stack adds and removes from the top — last in, first out.</p>",ar:"<p>المكدّس بيضيف ويحذف من الأعلى: آخر داخل أول خارج.</p>"},code:`stack = []
stack.append(1)
stack.append(2)
print(stack.pop())  # 2`},{t:{en:"Queues (FIFO)",ar:"الطابور (FIFO)"},body:{en:"<p>A queue adds at the back and removes at the front.</p>",ar:"<p>الطابور بيضيف من الخلف ويحذف من الأمام.</p>"},code:`from collections import deque
q = deque()
q.append(1); q.append(2)
print(q.popleft())  # 1`},{t:{en:"Hash maps",ar:"خرائط الهاش"},body:{en:"<p>Hash maps give near-instant lookup by key.</p>",ar:"<p>خرائط الهاش بتعطي بحث شبه فوري بالمفتاح.</p>"},code:`ages = {"Sara": 20}
print(ages["Sara"])  # O(1) average`},{t:{en:"Recursion",ar:"الاستدعاء الذاتي"},body:{en:"<p>A function that calls itself breaks problems into smaller ones.</p>",ar:"<p>دالة بتنادي حالها بتقسّم المشكلة لأصغر.</p>"},code:`def factorial(n):
    if n <= 1: return 1
    return n * factorial(n - 1)`,sec:{en:"Recursion",ar:"الاستدعاء الذاتي"}},{t:{en:"Recursion: Fibonacci",ar:"فيبوناتشي"},body:{en:"<p>Classic recursive example — and why it can be slow.</p>",ar:"<p>مثال عوْدي كلاسيكي، وليش ممكن يكون بطيء.</p>"},code:`def fib(n):
    if n < 2: return n
    return fib(n-1) + fib(n-2)`},{t:{en:"Linear search",ar:"البحث الخطي"},body:{en:"<p>Check each item one by one — O(n).</p>",ar:"<p>افحص كل عنصر واحد واحد — O(n).</p>"},code:`def search(arr, x):
    for i, v in enumerate(arr):
        if v == x: return i
    return -1`,sec:{en:"Searching",ar:"البحث"}},{t:{en:"Binary search",ar:"البحث الثنائي"},body:{en:"<p>On sorted data, halve the range each step — O(log n).</p>",ar:"<p>على بيانات مرتّبة، نصّف المجال كل خطوة — O(log n).</p>"},code:`def binary(arr, x):
    lo, hi = 0, len(arr)-1
    while lo <= hi:
        m = (lo+hi)//2
        if arr[m] == x: return m
        if arr[m] < x: lo = m+1
        else: hi = m-1
    return -1`},{t:{en:"Bubble sort",ar:"ترتيب الفقاعة"},body:{en:"<p>Swap neighbors repeatedly — simple but O(n^2).</p>",ar:"<p>بدّل الجيران تكراراً: بسيط لكن O(n^2).</p>"},code:`def bubble(a):
    for i in range(len(a)):
        for j in range(len(a)-1-i):
            if a[j] > a[j+1]:
                a[j], a[j+1] = a[j+1], a[j]`,sec:{en:"Sorting",ar:"الترتيب"}},{t:{en:"Selection sort",ar:"ترتيب الاختيار"},body:{en:"<p>Repeatedly pick the smallest remaining item.</p>",ar:"<p>اختر أصغر عنصر متبقّي بشكل متكرر.</p>"},code:`def selection(a):
    for i in range(len(a)):
        m = min(range(i, len(a)), key=lambda k: a[k])
        a[i], a[m] = a[m], a[i]`},{t:{en:"Insertion sort",ar:"ترتيب الإدراج"},body:{en:"<p>Build a sorted part one item at a time.</p>",ar:"<p>ابنِ جزءاً مرتّباً عنصراً عنصراً.</p>"},code:`def insertion(a):
    for i in range(1, len(a)):
        key = a[i]; j = i-1
        while j >= 0 and a[j] > key:
            a[j+1] = a[j]; j -= 1
        a[j+1] = key`},{t:{en:"Merge sort",ar:"الترتيب بالدمج"},body:{en:"<p>Divide, sort halves, then merge — O(n log n).</p>",ar:"<p>قسّم، رتّب النصفين، ثم ادمج — O(n log n).</p>"},code:`def merge_sort(a):
    if len(a) <= 1: return a
    m = len(a)//2
    return merge(merge_sort(a[:m]), merge_sort(a[m:]))`},{t:{en:"Quick sort",ar:"الترتيب السريع"},body:{en:"<p>Pick a pivot, partition around it, recurse.</p>",ar:"<p>اختر محور، قسّم حوله، وكرّر.</p>"},code:`def quick(a):
    if len(a) <= 1: return a
    p = a[0]
    less = [x for x in a[1:] if x < p]
    more = [x for x in a[1:] if x >= p]
    return quick(less) + [p] + quick(more)`},{t:{en:"Two pointers",ar:"المؤشران"},body:{en:"<p>Two pointers scan from both ends to solve pair problems.</p>",ar:"<p>المؤشران بيمسحوا من الطرفين لحل مشاكل الأزواج.</p>"},code:`def has_pair(a, target):
    a.sort(); lo, hi = 0, len(a)-1
    while lo < hi:
        s = a[lo]+a[hi]
        if s == target: return True
        if s < target: lo += 1
        else: hi -= 1
    return False`,sec:{en:"Techniques",ar:"التقنيات"}},{t:{en:"Sliding window",ar:"النافذة المنزلقة"},body:{en:"<p>Slide a window to track subarray sums efficiently.</p>",ar:"<p>حرّك نافذة لتتبّع مجاميع المقاطع بكفاءة.</p>"},code:`def max_sum(a, k):
    w = sum(a[:k]); best = w
    for i in range(k, len(a)):
        w += a[i] - a[i-k]
        best = max(best, w)
    return best`},{t:{en:"Trees",ar:"الأشجار"},body:{en:"<p>A tree is a hierarchy of nodes with one root.</p>",ar:"<p>الشجرة تسلسل هرمي من العقد بجذر واحد.</p>"},code:`class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None`,sec:{en:"Trees & graphs",ar:"الأشجار والرسوم"}},{t:{en:"Tree traversal",ar:"المرور بالشجرة"},body:{en:"<p>Visit every node in order (in/pre/post).</p>",ar:"<p>زُر كل عقدة بترتيب معيّن.</p>"},code:`def inorder(node):
    if not node: return
    inorder(node.left)
    print(node.val)
    inorder(node.right)`},{t:{en:"Binary search tree",ar:"شجرة البحث الثنائية"},body:{en:"<p>A BST keeps values ordered for fast search.</p>",ar:"<p>شجرة البحث الثنائية بتبقي القيم مرتّبة لبحث سريع.</p>"},code:`def insert(root, val):
    if not root: return TreeNode(val)
    if val < root.val: root.left = insert(root.left, val)
    else: root.right = insert(root.right, val)
    return root`},{t:{en:"Graphs & BFS",ar:"الرسوم و BFS"},body:{en:"<p>Graphs model networks; BFS explores level by level.</p>",ar:"<p>الرسوم بتمثّل الشبكات، و BFS بيستكشف مستوى مستوى.</p>"},code:`from collections import deque
def bfs(graph, start):
    seen, q = {start}, deque([start])
    while q:
        node = q.popleft()
        for n in graph[node]:
            if n not in seen:
                seen.add(n); q.append(n)`},{t:{en:"Mini project: sort + search",ar:"مشروع صغير: ترتيب وبحث"},body:{en:"<p>Sort a list then binary-search it — combine two ideas.</p>",ar:"<p>رتّب قائمة ثم ابحث فيها ثنائياً: اجمع فكرتين.</p>"},code:`data = [5, 2, 9, 1, 7]
data.sort()
print(binary(data, 9))`,sec:{en:"Project",ar:"المشروع"}},{t:{en:"Interview challenge + certificate",ar:"تحدّي المقابلات + الشهادة"},body:{en:"<p>Solve a classic interview problem using the right structure. 🏆 Then claim your certificate!</p>",ar:"<p>حل مسألة مقابلة كلاسيكية بالهيكل الصحيح. 🏆 وبعدها استلم شهادتك!</p>",cert:!0},code:`# Two-sum: find indices that add to target
def two_sum(nums, t):
    seen = {}
    for i, n in enumerate(nums):
        if t-n in seen: return [seen[t-n], i]
        seen[n] = i`}],mobile:[{t:{en:"What is Flutter?",ar:"ما هو Flutter؟"},body:{en:"<p>Flutter builds Android and iOS apps from a single Dart codebase.</p>",ar:"<p>Flutter بتبني تطبيقات أندرويد و iOS من كود Dart واحد.</p>"},code:`void main() {
  print("Hello Flutter!");
}`,sec:{en:"Dart basics",ar:"أساسيات Dart"}},{t:{en:"Dart variables",ar:"متغيرات Dart"},body:{en:"<p>Dart uses var, final and typed variables.</p>",ar:"<p>Dart بتستخدم var و final ومتغيرات بأنواع.</p>"},code:`var name = "Sara";
final int age = 20;
String city = "Amman";`},{t:{en:"Dart functions",ar:"دوال Dart"},body:{en:"<p>Functions in Dart look like other C-family languages.</p>",ar:"<p>الدوال بـ Dart تشبه لغات عائلة C.</p>"},code:`int add(int a, int b) => a + b;
print(add(5, 3));`},{t:{en:"Everything is a widget",ar:"كل شي ودجت"},body:{en:"<p>In Flutter, UI is built by composing widgets.</p>",ar:"<p>بـ Flutter الواجهة بتنبني بتركيب الودجات.</p>"},code:`import "package:flutter/material.dart";
void main() => runApp(MyApp());`,sec:{en:"Widgets",ar:"الودجات"}},{t:{en:"MaterialApp & Scaffold",ar:"MaterialApp و Scaffold"},body:{en:"<p>Scaffold gives you an app bar, body and structure.</p>",ar:"<p>Scaffold بيعطيك شريط علوي وجسم وهيكل.</p>"},code:`Scaffold(
  appBar: AppBar(title: Text("Home")),
  body: Center(child: Text("Hi")),
)`},{t:{en:"Text widget",ar:"ودجت النص"},body:{en:"<p>Text displays a string with optional styling.</p>",ar:"<p>ودجت Text بيعرض نص مع تنسيق اختياري.</p>"},code:`Text(
  "Welcome",
  style: TextStyle(fontSize: 24, color: Colors.green),
)`},{t:{en:"Container",ar:"الحاوية"},body:{en:"<p>Container adds padding, margin, color and size.</p>",ar:"<p>Container بيضيف حشو وهامش ولون وحجم.</p>"},code:`Container(
  padding: EdgeInsets.all(16),
  color: Colors.green,
  child: Text("Box"),
)`},{t:{en:"Column & Row",ar:"العمود والصف"},body:{en:"<p>Column stacks widgets vertically; Row lays them horizontally.</p>",ar:"<p>Column بتكدّس عمودياً، و Row بتصفّ أفقياً.</p>"},code:`Column(children: [
  Text("One"),
  Text("Two"),
])`,sec:{en:"Layout",ar:"التخطيط"}},{t:{en:"Images",ar:"الصور"},body:{en:"<p>Show images from assets or the network.</p>",ar:"<p>اعرض صور من الأصول أو الشبكة.</p>"},code:'Image.network("https://example.com/pic.png")'},{t:{en:"Buttons",ar:"الأزرار"},body:{en:"<p>Buttons run code when tapped.</p>",ar:"<p>الأزرار بتشغّل كود لمّا تُضغط.</p>"},code:`ElevatedButton(
  onPressed: () => print("Tapped"),
  child: Text("Press me"),
)`},{t:{en:"Icons & styling",ar:"الأيقونات والتنسيق"},body:{en:"<p>Add icons and colors to make a polished UI.</p>",ar:"<p>أضف أيقونات وألوان لواجهة أنيقة.</p>"},code:"Icon(Icons.favorite, color: Colors.red, size: 30)"},{t:{en:"Stateless widgets",ar:"الودجات الثابتة"},body:{en:"<p>A StatelessWidget never changes after it is built.</p>",ar:"<p>StatelessWidget ما بتتغيّر بعد ما تُبنى.</p>"},code:`class Hello extends StatelessWidget {
  Widget build(context) => Text("Hi");
}`,sec:{en:"State",ar:"الحالة"}},{t:{en:"Stateful widgets",ar:"الودجات المتغيّرة"},body:{en:"<p>A StatefulWidget can rebuild when data changes.</p>",ar:"<p>StatefulWidget بتقدر تُعاد بناؤها لمّا تتغيّر البيانات.</p>"},code:`class Counter extends StatefulWidget {
  createState() => _CounterState();
}`},{t:{en:"setState",ar:"setState"},body:{en:"<p>Call setState to update the UI with new data.</p>",ar:"<p>نادِ setState لتحدّث الواجهة ببيانات جديدة.</p>"},code:`int count = 0;
setState(() {
  count++;
});`},{t:{en:"Text input",ar:"إدخال النص"},body:{en:"<p>TextField collects what the user types.</p>",ar:"<p>TextField بيجمع اللي يكتبه المستخدم.</p>"},code:`TextField(
  onChanged: (value) => print(value),
)`},{t:{en:"ListView",ar:"القائمة ListView"},body:{en:"<p>ListView shows a scrollable list of items.</p>",ar:"<p>ListView بيعرض قائمة عناصر قابلة للتمرير.</p>"},code:`ListView(children: [
  Text("Item 1"),
  Text("Item 2"),
])`,sec:{en:"Lists & navigation",ar:"القوائم والتنقّل"}},{t:{en:"Build lists from data",ar:"ابنِ قوائم من البيانات"},body:{en:"<p>ListView.builder renders items from an array efficiently.</p>",ar:"<p>ListView.builder بيرسم العناصر من مصفوفة بكفاءة.</p>"},code:`ListView.builder(
  itemCount: items.length,
  itemBuilder: (c, i) => Text(items[i]),
)`},{t:{en:"Cards",ar:"البطاقات"},body:{en:"<p>Card wraps content in a nice elevated box.</p>",ar:"<p>Card بتلفّ المحتوى بصندوق مرفوع أنيق.</p>"},code:`Card(
  child: ListTile(title: Text("A card")),
)`},{t:{en:"Navigation",ar:"التنقّل"},body:{en:"<p>Navigator moves between screens (pages).</p>",ar:"<p>Navigator بينقل بين الشاشات (الصفحات).</p>"},code:`Navigator.push(context,
  MaterialPageRoute(builder: (c) => SecondPage()),
);`},{t:{en:"Pass data between screens",ar:"مرّر بيانات بين الشاشات"},body:{en:"<p>Send values to the next page through its constructor.</p>",ar:"<p>ابعت قيم للصفحة التالية عبر الباني.</p>"},code:`SecondPage(name: "Sara")
// class SecondPage { final String name; ... }`},{t:{en:"Forms & validation",ar:"النماذج والتحقّق"},body:{en:"<p>Form and validators check input before submitting.</p>",ar:"<p>Form والمُتحقّقات بتفحص المدخلات قبل الإرسال.</p>"},code:`TextFormField(
  validator: (v) => v!.isEmpty ? "Required" : null,
)`,sec:{en:"Real apps",ar:"تطبيقات حقيقية"}},{t:{en:"Fetch from the internet",ar:"اجلب من الإنترنت"},body:{en:"<p>The http package loads data from an API.</p>",ar:"<p>حزمة http بتحمّل بيانات من API.</p>"},code:`import "package:http/http.dart" as http;
var res = await http.get(Uri.parse(url));`},{t:{en:"Theming",ar:"السمات"},body:{en:"<p>ThemeData sets colors and fonts app-wide.</p>",ar:"<p>ThemeData بتحدّد الألوان والخطوط لكل التطبيق.</p>"},code:`MaterialApp(
  theme: ThemeData(primarySwatch: Colors.green),
)`},{t:{en:"Mini project: counter app",ar:"مشروع صغير: تطبيق عدّاد"},body:{en:"<p>Build a stateful screen with a button that counts taps.</p>",ar:"<p>ابنِ شاشة متغيّرة بزر بيعدّ النقرات.</p>"},code:`floatingActionButton: FloatingActionButton(
  onPressed: () => setState(() => count++),
  child: Icon(Icons.add),
)`,sec:{en:"Project",ar:"المشروع"}},{t:{en:"Full app + certificate",ar:"تطبيق كامل + الشهادة"},body:{en:"<p>Combine widgets, state and navigation into a real app. 🏆 Then claim your certificate!</p>",ar:"<p>اجمع الودجات والحالة والتنقّل بتطبيق حقيقي. 🏆 وبعدها استلم شهادتك!</p>",cert:!0},code:`// a to-do app: add tasks, mark done, delete
// widgets + setState + ListView.builder`}]};Object.keys(e).forEach(function(n){var o=window.COURSES&&window.COURSES[n];o&&(o.lessons=o.lessons.concat(e[n]).slice(0,30))})})(),(function(){var e={python:[{q:{en:"Which function prints text to the screen?",ar:"أي دالة تطبع نصًا على الشاشة؟"},opts:["print()","echo()","cout","printf()"],c:0},{q:{en:'What is the type of the value "Sara"?',ar:'ما نوع القيمة "Sara"؟'},opts:["int","str","bool","float"],c:1},{q:{en:"How do you start a loop over 0,1,2,3,4?",ar:"كيف تبدأ حلقة على 0,1,2,3,4؟"},opts:["for i in range(5):","loop 5:","for(5)","repeat 5"],c:0},{q:{en:"A line that starts with # is a…",ar:"السطر الذي يبدأ بـ # هو…"},opts:[{en:"variable",ar:"متغيّر"},{en:"loop",ar:"حلقة"},{en:"comment",ar:"تعليق"},{en:"function",ar:"دالة"}],c:2},{q:{en:"Which block catches errors?",ar:"أي كتلة تمسك الأخطاء؟"},opts:["try / except","if / else","for / in","def / return"],c:0}],javascript:[{q:{en:"Which prints to the console?",ar:"أي أمر يطبع في الـ console؟"},opts:["console.log()","print()","echo","System.out"],c:0},{q:{en:"Which keyword declares a value that never changes?",ar:"أي كلمة تُعرّف قيمة لا تتغيّر؟"},opts:["let","const","var","def"],c:1},{q:{en:"Which checks equality by value AND type?",ar:"أي عامل يقارن القيمة والنوع معًا؟"},opts:["=","==","===","=>"],c:2},{q:{en:"How do you write an arrow function that adds a and b?",ar:"كيف تكتب دالة سهمية تجمع a و b؟"},opts:["(a,b) => a + b","func a+b","def add","a + b ->"],c:0},{q:{en:"[1,2,3] is a…",ar:"[1,2,3] هي…"},opts:[{en:"object",ar:"كائن"},{en:"string",ar:"نص"},{en:"array",ar:"مصفوفة"},{en:"number",ar:"رقم"}],c:2}],web:[{q:{en:"What does HTML define on a page?",ar:"ماذا تُعرّف HTML في الصفحة؟"},opts:[{en:"Structure",ar:"الهيكل"},{en:"Server logic",ar:"منطق السيرفر"},{en:"Database",ar:"قاعدة البيانات"},{en:"Nothing",ar:"لا شيء"}],c:0},{q:{en:"Which is the biggest heading tag?",ar:"أي وسم عنوان هو الأكبر؟"},opts:["<h6>","<h1>","<p>","<big>"],c:1},{q:{en:"Which language styles the page (colors, spacing)?",ar:"أي لغة تنسّق الصفحة (ألوان، مسافات)؟"},opts:["HTML","CSS","SQL","JSON"],c:1},{q:{en:"Which tag makes a link?",ar:"أي وسم يصنع رابطًا؟"},opts:["<a>","<link>","<href>","<url>"],c:0},{q:{en:"The box model layers are padding, border and…",ar:"طبقات نموذج الصندوق هي padding و border و…"},opts:["margin","color","font","flex"],c:0}],sql:[{q:{en:"Which command reads data?",ar:"أي أمر يقرأ البيانات؟"},opts:["SELECT","INSERT","DELETE","DROP"],c:0},{q:{en:"Which clause filters rows?",ar:"أي جملة تفلتر الصفوف؟"},opts:["WHERE","ORDER","VALUES","JOIN"],c:0},{q:{en:"Which adds a new row?",ar:"أي أمر يضيف صفًا جديدًا؟"},opts:["INSERT","SELECT","WHERE","FROM"],c:0},{q:{en:"JOIN combines two…",ar:"JOIN تدمج…"},opts:[{en:"tables",ar:"جدولين"},{en:"files",ar:"ملفين"},{en:"pages",ar:"صفحتين"},{en:"apps",ar:"تطبيقين"}],c:0}],react:[{q:{en:"React builds UIs from reusable…",ar:"React تبني الواجهات من…"},opts:[{en:"components",ar:"مكوّنات"},{en:"tables",ar:"جداول"},{en:"servers",ar:"خوادم"},{en:"files",ar:"ملفات"}],c:0},{q:{en:"Which passes data into a component?",ar:"ما الذي يمرّر البيانات للمكوّن؟"},opts:["props","state","CSS","SQL"],c:0},{q:{en:"Which hook stores changing data?",ar:"أي hook يخزّن بيانات متغيّرة؟"},opts:["useState","useColor","useSQL","useHTML"],c:0},{q:{en:"The markup React returns is called…",ar:"الترميز الذي ترجعه React يُسمّى…"},opts:["JSX","YAML","CSV","PHP"],c:0}],node:[{q:{en:"Node.js runs JavaScript…",ar:"Node.js تشغّل جافاسكربت…"},opts:[{en:"on the server",ar:"على السيرفر"},{en:"only in Excel",ar:"في إكسل فقط"},{en:"on paper",ar:"على ورق"},{en:"nowhere",ar:"ولا مكان"}],c:0},{q:{en:"APIs usually exchange data as…",ar:"الـ APIs غالبًا تتبادل البيانات كـ…"},opts:["JSON","MP3","PNG","ZIP"],c:0},{q:{en:"JSON.stringify turns an object into…",ar:"JSON.stringify تحوّل الكائن إلى…"},opts:[{en:"text",ar:"نص"},{en:"an image",ar:"صورة"},{en:"a table",ar:"جدول"},{en:"a loop",ar:"حلقة"}],c:0}],data:[{q:{en:"Which function adds all numbers in a list?",ar:"أي دالة تجمع كل الأرقام في القائمة؟"},opts:["sum()","add()","total()","plus()"],c:0},{q:{en:"Average = total divided by…",ar:"المتوسط = المجموع مقسومًا على…"},opts:["len()","max()","min()","sort()"],c:0},{q:{en:"Which finds the largest value?",ar:"أي دالة تجد أكبر قيمة؟"},opts:["max()","min()","sum()","len()"],c:0}],dsa:[{q:{en:"You access an array item by its…",ar:"تصل لعنصر المصفوفة عبر…"},opts:[{en:"index",ar:"الفهرس"},{en:"color",ar:"اللون"},{en:"price",ar:"السعر"},{en:"name",ar:"الاسم"}],c:0},{q:{en:"Checking each item until found is…",ar:"فحص كل عنصر حتى تجده هو…"},opts:[{en:"linear search",ar:"بحث خطي"},{en:"sorting",ar:"ترتيب"},{en:"hashing",ar:"تجزئة"},{en:"caching",ar:"تخزين مؤقت"}],c:0},{q:{en:"A function that calls itself is…",ar:"دالة تستدعي نفسها هي…"},opts:[{en:"recursion",ar:"استدعاء ذاتي"},{en:"a loop",ar:"حلقة"},{en:"a class",ar:"صنف"},{en:"an array",ar:"مصفوفة"}],c:0}],mobile:[{q:{en:"Flutter uses which language?",ar:"Flutter تستخدم أي لغة؟"},opts:["Dart","Swift","Kotlin","Java"],c:0},{q:{en:"In Flutter, almost everything is a…",ar:"في Flutter كل شيء تقريبًا هو…"},opts:[{en:"widget",ar:"ودجت"},{en:"table",ar:"جدول"},{en:"file",ar:"ملف"},{en:"query",ar:"استعلام"}],c:0},{q:{en:"Which arranges widgets vertically?",ar:"أي عنصر يرتّب الودجت عموديًا؟"},opts:["Column","Row","Grid","Stack"],c:0}]};Object.keys(e).forEach(function(n){window.COURSES[n]&&(window.COURSES[n].quiz=e[n])}),Object.keys(window.COURSES).forEach(function(n){var o=window.COURSES[n];if(!o.quiz){var t=o.title.en.split("—")[0].trim();o.quiz=[{q:{en:"What does this course teach?",ar:"ماذا يعلّم هذا الكورس؟"},opts:[t,"Cooking","Driving","Swimming"],c:0},{q:{en:"Where do you write and run the examples here?",ar:"وين بتكتب وبتشغّل الأمثلة هون؟"},opts:[{en:"In the “Try it / Example” box",ar:"في صندوق «جرّبها / مثال»"},{en:"On paper",ar:"على ورقة"},{en:"In email",ar:"في الإيميل"},{en:"Nowhere",ar:"ولا مكان"}],c:0},{q:{en:"What do you earn when you finish the course?",ar:"شو بتاخد لما تخلّص الكورس؟"},opts:[{en:"A certificate",ar:"شهادة"},{en:"Nothing",ar:"ولا إشي"},{en:"A fine",ar:"غرامة"},{en:"An ad",ar:"إعلان"}],c:0},{q:{en:"Every course here starts from…",ar:"كل كورس هون بيبدأ من…"},opts:[{en:"zero (beginner)",ar:"الصفر (مبتدئ)"},{en:"expert level",ar:"مستوى خبير"},{en:"the middle",ar:"النص"},{en:"the end",ar:"الآخر"}],c:0}]}})})(),(function(){"use strict";if(window.COURSE_VIDEOS={python:{ar:{type:"playlist",id:"PLDoPjvoNmBAyE_gei5d18qkfIe-Z8mocs",by:"Elzero Web School"},en:{type:"video",id:"rfscVS0vtbw",by:"freeCodeCamp"}},javascript:{ar:{type:"playlist",id:"PLDoPjvoNmBAx3kiplQR_oeDqLDBUDYwVv",by:"Elzero Web School"},en:{type:"video",id:"PkZNo7MFNFg",by:"freeCodeCamp"}},web:{ar:{type:"playlist",id:"PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji",by:"Elzero Web School"},en:{type:"video",id:"zJSY8tbf_ys",by:"freeCodeCamp"}},sql:{ar:{type:"playlist",id:"PLxbVBWjVdAEj8TmOUKPG0avUmLqSoQOpf",by:"قناة عربية"},en:{type:"video",id:"HXV3zeQKqGY",by:"freeCodeCamp"}},java:{ar:{type:"playlist",id:"PLCInYL3l2AajYlZGzU_LVrHdoouf8W6ZN",by:"قناة عربية"},en:{type:"video",id:"grEKMHGYyns",by:"freeCodeCamp"}},csharp:{en:{type:"video",id:"GhQdlIFylQ8",by:"freeCodeCamp"}},cpp:{ar:{type:"playlist",id:"PLnzqK5HvcpwQ_nQt-hKGAEIDJjTJBCV02",by:"قناة عربية"},en:{type:"video",id:"vLnPwxZdW4Y",by:"freeCodeCamp"}},c:{en:{type:"video",id:"KJgsSFOSQv0",by:"freeCodeCamp"}},php:{ar:{type:"video",id:"xcg9qq6SZ0w",by:"Elzero Web School (PHP 8)"},en:{type:"video",id:"OK_JCtrrv-c",by:"freeCodeCamp"}},go:{en:{type:"video",id:"YS4e4q9oBaU",by:"freeCodeCamp"}},ruby:{en:{type:"video",id:"t_ispmWmdjY",by:"freeCodeCamp"}},kotlin:{en:{type:"video",id:"F9UC9DY-vIU",by:"freeCodeCamp"}},r:{en:{type:"video",id:"_V8eKsto3Ug",by:"freeCodeCamp"}},mongodb:{en:{type:"video",id:"-56x56UppqQ",by:"Traversy Media"}},node:{en:{type:"video",id:"Oe421EPjeBE",by:"freeCodeCamp"}},react:{en:{type:"video",id:"bMknfKXIFA8",by:"freeCodeCamp"}},django:{en:{type:"video",id:"F5mRW0jo-U4",by:"freeCodeCamp"}},data:{en:{type:"video",id:"ua-CiDNNj30",by:"freeCodeCamp"}},dsa:{en:{type:"video",id:"RBSGKlAvoiM",by:"freeCodeCamp"}},mobile:{en:{type:"video",id:"VPvVD8t02U8",by:"freeCodeCamp (Flutter)"}},git:{en:{type:"video",id:"RGOj5yH7evk",by:"freeCodeCamp"}},typescript:{en:{type:"video",id:"30LWjhZzg50",by:"freeCodeCamp"}}},!(!window.COURSES||!window.COURSES.python)){var e=window.COURSES.python;e.duration={en:"8+ hours",ar:"+8 ساعات"},e.whatYouLearn={en:["All core Python syntax, from print() to classes","Numbers, strings, lists, tuples, sets & dictionaries","Conditions, loops, and comprehensions","Functions, lambda, and built-ins","OOP: classes and inheritance","Errors, files, modules — and a final project"],ar:["كل أساسيات بايثون من print() للأصناف","الأرقام والنصوص والقوائم والصفوف والمجموعات والقواميس","الشروط والحلقات والاستيعابات","الدوال ولامبدا والدوال الجاهزة","البرمجة الكائنية: الأصناف والوراثة","الأخطاء والملفات والوحدات — ومشروع ختامي"]},e.lessons=[{sec:{en:"Foundations",ar:"الأساسيات"},t:{en:"Introduction",ar:"مقدمة"},body:{en:"<p>Python is an easy-to-read, powerful language used for web, data science, and AI. Your first command is <code>print()</code>, which shows text on screen. In this course you will learn the whole language, rule by rule — and every rule has a video explanation.</p>",ar:"<p>بايثون لغة سهلة القراءة وقوية، تُستخدم في الويب وعلوم البيانات والذكاء الاصطناعي. أول أمر هو <code>print()</code> اللي بيطبع نص على الشاشة. في هذا الكورس رح تتعلم اللغة كاملة، قاعدة قاعدة — وكل قاعدة إلها شرح فيديو.</p>"},code:`print("Hello, World!")
print("I am learning Python 🐍")`,notes:{en:"<ul><li><code>print()</code> shows text on screen</li><li>Text goes inside quotes</li><li>Each statement on its own line</li></ul>",ar:"<ul><li><code>print()</code> بيطبع نص على الشاشة</li><li>النص بنحطه بين علامات اقتباس</li><li>كل أمر بسطر لحاله</li></ul>"},resources:[{icon:"🐍",label:"Python.org",labelAr:"موقع بايثون",url:"https://www.python.org"},{icon:"📖",label:"Python Docs",labelAr:"التوثيق الرسمي",url:"https://docs.python.org/3/"}]},{t:{en:"Comments & clean code",ar:"التعليقات والكود النظيف"},body:{en:"<p>A comment starts with <code>#</code> — Python ignores it, humans read it. Use comments to explain <em>why</em>, not <em>what</em>. Clean, commented code is what separates beginners from professionals.</p>",ar:"<p>التعليق بيبدأ بـ <code>#</code> — بايثون بيتجاهله، والبشر بيقرؤوه. استخدم التعليقات لشرح <em>ليش</em> مش <em>شو</em>. الكود النظيف والمعلّق هو الفرق بين المبتدئ والمحترف.</p>"},code:`# This line is a comment — Python skips it
print("Comments make code readable")  # you can comment after code too`},{t:{en:"Variables",ar:"المتغيرات"},body:{en:`<p>A variable is a named box that stores a value: <code>name = "Ali"</code>. No type declaration needed — Python figures it out. Names use letters, numbers and <code>_</code>, and can't start with a number.</p>`,ar:'<p>المتغير صندوق باسم بيخزن قيمة: <code>name = "Ali"</code>. ما في داعي تحدد النوع — بايثون بيفهم لحاله. الأسماء بتستخدم حروف وأرقام و<code>_</code>، وما بتبدأ برقم.</p>'},code:`name = "Ali"
age = 20
print(name)
print(age)

# variables can change
age = 21
print(age)`},{t:{en:"Data types",ar:"أنواع البيانات"},body:{en:"<p>Core types: <code>str</code> (text), <code>int</code> (whole numbers), <code>float</code> (decimals), <code>bool</code> (True/False). Check any value's type with <code>type()</code>, and convert with <code>int()</code>, <code>str()</code>, <code>float()</code>.</p>",ar:"<p>الأنواع الأساسية: <code>str</code> (نص)، <code>int</code> (أعداد صحيحة)، <code>float</code> (أعداد عشرية)، <code>bool</code> (True/False). افحص نوع أي قيمة بـ <code>type()</code>، وحوّل بينها بـ <code>int()</code> و<code>str()</code> و<code>float()</code>.</p>"},code:`print(type("hello"))
print(type(42))
print(type(3.14))
print(type(True))

# conversion
print(int("7") + 3)`},{t:{en:"Numbers & math",ar:"الأرقام والعمليات الحسابية"},body:{en:"<p>Operators: <code>+ - * /</code>, integer division <code>//</code>, remainder <code>%</code>, power <code>**</code>. Python respects order of operations — use parentheses to control it.</p>",ar:"<p>العمليات: <code>+ - * /</code>، القسمة الصحيحة <code>//</code>، الباقي <code>%</code>، الأس <code>**</code>. بايثون بيحترم أولويات العمليات — استخدم الأقواس للتحكم.</p>"},code:`print(10 + 3)
print(10 / 3)
print(10 // 3)  # integer division
print(10 % 3)   # remainder
print(2 ** 8)   # power
print((2 + 3) * 4)`},{t:{en:"Strings",ar:"النصوص"},body:{en:"<p>Strings support joining with <code>+</code>, repeating with <code>*</code>, and powerful methods: <code>.upper()</code>, <code>.lower()</code>, <code>.strip()</code>, <code>.replace()</code>, <code>len()</code>. Access characters by index: <code>s[0]</code> is the first.</p>",ar:"<p>النصوص بتدعم الدمج بـ <code>+</code> والتكرار بـ <code>*</code> ودوال قوية: <code>.upper()</code> و<code>.lower()</code> و<code>.strip()</code> و<code>.replace()</code> و<code>len()</code>. بتوصل لأي حرف بالفهرس: <code>s[0]</code> أول حرف.</p>"},code:`s = "Python"
print(s.upper())
print(s.lower())
print(len(s))
print(s[0])
print(s.replace("Py", "My"))
print("ab" * 3)`},{t:{en:"Output formatting",ar:"تنسيق الإخراج"},body:{en:"<p>Combine text and values with <code>format()</code> or commas in <code>print()</code>. The placeholder <code>{}</code> gets replaced in order — clean output is a habit worth building early.</p>",ar:"<p>ادمج النصوص والقيم بـ <code>format()</code> أو بالفواصل داخل <code>print()</code>. الرمز <code>{}</code> بيتبدّل بالترتيب — الإخراج المرتب عادة بتستاهل تبنيها من البداية.</p>"},code:`name = "Sara"
score = 95
print("Student:", name)
print("{} scored {} points".format(name, score))
print("Grade: {}%".format(score))`},{sec:{en:"Control flow",ar:"التحكم بمسار البرنامج"},t:{en:"Conditions: if / elif / else",ar:"الشروط if / elif / else"},body:{en:"<p>Programs make decisions with <code>if</code>. Indentation (4 spaces) defines the block — it's not optional in Python. Chain more cases with <code>elif</code> and a fallback with <code>else</code>.</p>",ar:"<p>البرامج بتاخد قرارات بـ <code>if</code>. الإزاحة (4 مسافات) هي اللي بتحدد الكتلة — مش اختيارية في بايثون. زيد حالات بـ <code>elif</code> وحالة افتراضية بـ <code>else</code>.</p>"},code:`score = 85
if score >= 90:
    print("Excellent!")
elif score >= 70:
    print("Good job")
else:
    print("Keep practicing")`},{t:{en:"Comparison & logic",ar:"المقارنات والمنطق"},body:{en:"<p>Compare with <code>== != &gt; &lt; &gt;= &lt;=</code>. Combine conditions with <code>and</code>, <code>or</code>, <code>not</code>. Every comparison produces a <code>bool</code>: True or False.</p>",ar:"<p>قارن بـ <code>== != &gt; &lt; &gt;= &lt;=</code>. اربط الشروط بـ <code>and</code> و<code>or</code> و<code>not</code>. كل مقارنة نتيجتها <code>bool</code>: صح أو غلط.</p>"},code:`age = 20
has_id = True
print(age >= 18)
print(age >= 18 and has_id)
print(not has_id)
print(age == 20 or age == 21)`},{t:{en:"while loops",ar:"حلقة while"},body:{en:"<p><code>while</code> repeats as long as its condition is True. Always make sure something inside changes the condition — otherwise you get an infinite loop.</p>",ar:"<p><code>while</code> بتكرر طالما الشرط صحيح. تأكد دائمًا إنه في شي جوّاها بيغيّر الشرط — وإلا بتعلق بحلقة لا نهائية.</p>"},code:`count = 1
while count <= 5:
    print("Round", count)
    count = count + 1
print("Done!")`},{t:{en:"for loops & range()",ar:"حلقة for و range()"},body:{en:"<p><code>for</code> walks over a sequence. <code>range(5)</code> gives 0..4, <code>range(1, 6)</code> gives 1..5, and <code>range(0, 10, 2)</code> jumps by 2. You can also loop over strings and lists directly.</p>",ar:"<p><code>for</code> بتمشي على تسلسل. <code>range(5)</code> بتعطي 0..4، و<code>range(1, 6)</code> بتعطي 1..5، و<code>range(0, 10, 2)</code> بتقفز 2. وبتقدر تلف على النصوص والقوائم مباشرة.</p>"},code:`for i in range(1, 6):
    print("Lesson", i)

for ch in "abc":
    print(ch)`},{t:{en:"break & continue",ar:"break و continue"},body:{en:"<p><code>break</code> exits the loop immediately; <code>continue</code> skips to the next round. Use them to handle special cases without complicated conditions.</p>",ar:"<p><code>break</code> بتطلع من الحلقة فورًا، و<code>continue</code> بتقفز للدورة الجاية. استخدمهم لمعالجة الحالات الخاصة بدون شروط معقدة.</p>"},code:`for n in range(1, 10):
    if n == 5:
        break      # stop completely
    if n % 2 == 0:
        continue   # skip even numbers
    print(n)`},{sec:{en:"Data structures",ar:"هياكل البيانات"},t:{en:"Lists",ar:"القوائم"},body:{en:"<p>A list holds many values in order: <code>nums = [1, 2, 3]</code>. Index from the start <code>nums[0]</code> or the end <code>nums[-1]</code>. Lists are mutable — you can change them any time.</p>",ar:"<p>القائمة بتخزن قيم كثيرة بالترتيب: <code>nums = [1, 2, 3]</code>. الفهرسة من البداية <code>nums[0]</code> أو من النهاية <code>nums[-1]</code>. القوائم قابلة للتغيير في أي وقت.</p>"},code:`fruits = ["apple", "banana", "cherry"]
print(fruits[0])
print(fruits[-1])
fruits[1] = "mango"
print(fruits)
print(len(fruits))`},{t:{en:"List methods & slicing",ar:"دوال القوائم والتقطيع"},body:{en:"<p>Grow with <code>.append()</code>, insert with <code>.insert()</code>, remove with <code>.remove()</code> or <code>.pop()</code>, order with <code>.sort()</code>. Slicing takes parts: <code>nums[1:4]</code> gives items 1 to 3.</p>",ar:"<p>زيد بـ <code>.append()</code>، أدخل بـ <code>.insert()</code>، احذف بـ <code>.remove()</code> أو <code>.pop()</code>، رتّب بـ <code>.sort()</code>. التقطيع بياخد جزء: <code>nums[1:4]</code> بيعطي العناصر من 1 لـ 3.</p>"},code:`nums = [5, 2, 8, 1]
nums.append(9)
nums.sort()
print(nums)
print(nums[1:4])   # slice
nums.pop()
print(nums)`},{t:{en:"Tuples & sets",ar:"الصفوف والمجموعات"},body:{en:"<p>A tuple is an immutable list: <code>point = (3, 5)</code> — perfect for fixed data. A set stores unique values only: <code>{1, 2, 2, 3}</code> becomes <code>{1, 2, 3}</code> — great for removing duplicates.</p>",ar:"<p>الصف (tuple) قائمة غير قابلة للتغيير: <code>point = (3, 5)</code> — ممتاز للبيانات الثابتة. المجموعة (set) بتخزن قيم فريدة بس: <code>{1, 2, 2, 3}</code> بتصير <code>{1, 2, 3}</code> — ممتازة لإزالة التكرار.</p>"},code:`point = (3, 5)
print(point[0])

nums = [1, 2, 2, 3, 3, 3]
unique = set(nums)
print(unique)
print(len(unique))`},{t:{en:"Dictionaries",ar:"القواميس"},body:{en:`<p>A dictionary maps keys to values: <code>user = {"name": "Ali", "age": 20}</code>. Read with <code>user["name"]</code>, add by assigning a new key, loop with <code>.items()</code>. This is Python's most-used structure in real code.</p>`,ar:'<p>القاموس بيربط مفاتيح بقيم: <code>user = {"name": "Ali", "age": 20}</code>. اقرأ بـ <code>user["name"]</code>، وأضف بمفتاح جديد، ولف عليه بـ <code>.items()</code>. هذا أكثر هيكل مستخدم في الكود الحقيقي.</p>'},code:`user = {"name": "Ali", "age": 20}
print(user["name"])
user["city"] = "Amman"
for key in user:
    print(key, "=", user[key])`},{t:{en:"Comprehensions",ar:"الاستيعابات (Comprehensions)"},body:{en:"<p>A comprehension builds a list in one line: <code>[x * 2 for x in nums]</code>. Add a filter with <code>if</code>. It's shorter, faster, and very Pythonic.</p>",ar:"<p>الاستيعاب بيبني قائمة بسطر واحد: <code>[x * 2 for x in nums]</code>. زيد فلتر بـ <code>if</code>. أقصر وأسرع وأسلوب بايثوني أصيل.</p>"},code:`nums = [1, 2, 3, 4, 5, 6]
doubles = [x * 2 for x in nums]
evens = [x for x in nums if x % 2 == 0]
print(doubles)
print(evens)`},{sec:{en:"Functions",ar:"الدوال"},t:{en:"Defining functions",ar:"تعريف الدوال"},body:{en:"<p>Functions package reusable logic: <code>def greet(name):</code>. Call it as many times as you like. One function = one job — that's the golden rule.</p>",ar:"<p>الدوال بتغلف منطق قابل لإعادة الاستخدام: <code>def greet(name):</code>. استدعيها قد ما بدك. دالة وحدة = مهمة وحدة — هاي القاعدة الذهبية.</p>"},code:`def greet(name):
    print("Hello, " + name + "!")

greet("Ali")
greet("Sara")
greet("Omar")`},{t:{en:"Parameters & return",ar:"المعاملات والإرجاع"},body:{en:"<p><code>return</code> sends a value back to the caller. Parameters can have defaults: <code>def power(base, exp=2)</code>. A function without return gives <code>None</code>.</p>",ar:"<p><code>return</code> بترجع قيمة للمستدعي. المعاملات ممكن يكون إلها قيم افتراضية: <code>def power(base, exp=2)</code>. الدالة بدون return بترجع <code>None</code>.</p>"},code:`def add(a, b):
    return a + b

def power(base, exp=2):
    return base ** exp

print(add(3, 4))
print(power(5))      # uses default exp=2
print(power(2, 10))`},{t:{en:"Lambda & built-ins",ar:"لامبدا والدوال الجاهزة"},body:{en:"<p>A lambda is a tiny anonymous function: <code>double = lambda x: x * 2</code>. Python ships with powerful built-ins: <code>sum()</code>, <code>max()</code>, <code>min()</code>, <code>sorted()</code>, <code>abs()</code>, <code>round()</code>.</p>",ar:"<p>لامبدا دالة صغيرة بدون اسم: <code>double = lambda x: x * 2</code>. وبايثون جاي معه دوال جاهزة قوية: <code>sum()</code> و<code>max()</code> و<code>min()</code> و<code>sorted()</code> و<code>abs()</code> و<code>round()</code>.</p>"},code:`double = lambda x: x * 2
print(double(7))

nums = [4, 1, 9, 3]
print(sum(nums))
print(max(nums))
print(sorted(nums))`},{sec:{en:"Object-Oriented Programming",ar:"البرمجة الكائنية OOP"},t:{en:"Classes & objects",ar:"الأصناف والكائنات"},body:{en:"<p>A class is a blueprint; an object is a copy built from it. <code>__init__</code> runs when the object is created, and <code>self</code> refers to the object itself.</p>",ar:"<p>الصنف (class) مخطط، والكائن (object) نسخة مبنية منه. <code>__init__</code> بتشتغل عند إنشاء الكائن، و<code>self</code> بيشير للكائن نفسه.</p>"},code:`class Student:
    def __init__(self, name, score):
        self.name = name
        self.score = score

    def show(self):
        print(self.name, "scored", self.score)

s1 = Student("Ali", 90)
s2 = Student("Sara", 95)
s1.show()
s2.show()`},{t:{en:"Inheritance",ar:"الوراثة"},body:{en:"<p>A child class inherits everything from its parent and can add or override behavior: <code>class Teacher(Person)</code>. This is how large programs stay organized.</p>",ar:"<p>الصنف الابن بيرث كل شي من الأب وبيقدر يضيف أو يعدّل: <code>class Teacher(Person)</code>. هيك البرامج الكبيرة بتضل منظمة.</p>"},code:`class Person:
    def __init__(self, name):
        self.name = name
    def hello(self):
        print("Hi, I am", self.name)

class Teacher(Person):
    def teach(self):
        print(self.name, "is teaching Python")

t = Teacher("Omar")
t.hello()   # inherited
t.teach()   # own method`},{sec:{en:"Errors, files & modules",ar:"الأخطاء والملفات والوحدات"},t:{en:"Error handling",ar:"معالجة الأخطاء"},body:{en:"<p>Wrap risky code in <code>try/except</code> so your program survives bad input. Catch specific errors like <code>ZeroDivisionError</code>, and use <code>finally</code> for cleanup that always runs.</p>",ar:"<p>غلّف الكود الخطر بـ <code>try/except</code> ليصمد برنامجك أمام المدخلات الخاطئة. التقط أخطاء محددة مثل <code>ZeroDivisionError</code>، واستخدم <code>finally</code> لتنظيف بيشتغل دائمًا.</p>"},code:`def divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Cannot divide by zero!"

print(divide(10, 2))
print(divide(5, 0))`},{t:{en:"Working with files",ar:"التعامل مع الملفات"},body:{en:'<p>Read and write files with <code>open()</code> — always inside <code>with</code>, which closes the file automatically: <code>with open("data.txt", "r") as f:</code> then <code>f.read()</code> or loop line by line. Writing uses mode <code>"w"</code> (replace) or <code>"a"</code> (append). <em>Try this one on your computer — the browser sandbox has no real files.</em></p>',ar:'<p>اقرأ واكتب الملفات بـ <code>open()</code> — دائمًا داخل <code>with</code> لأنه بيسكّر الملف تلقائيًا: <code>with open("data.txt", "r") as f:</code> وبعدها <code>f.read()</code> أو لف سطر سطر. الكتابة بوضع <code>"w"</code> (استبدال) أو <code>"a"</code> (إضافة). <em>جرّب هذا الدرس على جهازك — المتصفح ما فيه ملفات حقيقية.</em></p>'}},{t:{en:"Modules & pip",ar:"الوحدات و pip"},body:{en:"<p>Import ready code with <code>import math</code> or <code>from random import randint</code>. Thousands of extra libraries install with <code>pip install name</code> — this ecosystem is Python's superpower.</p>",ar:"<p>استورد كود جاهز بـ <code>import math</code> أو <code>from random import randint</code>. وآلاف المكتبات الإضافية بتنزلها بـ <code>pip install name</code> — هذا النظام هو القوة الخارقة لبايثون.</p>"},code:`import math
print(math.sqrt(144))
print(math.pi)

import random
print(random.randint(1, 6))  # dice roll`},{t:{en:"Final project 🎓",ar:"المشروع الختامي 🎓"},body:{en:"<p>Bring it all together: a grade manager using a dictionary, a function, a loop, conditions and error handling — every rule you learned in one program. Finish it, pass the quiz, and claim your certificate!</p>",ar:"<p>اجمع كل شي تعلمته: مدير علامات بيستخدم قاموس ودالة وحلقة وشروط ومعالجة أخطاء — كل قاعدة تعلمتها في برنامج واحد. خلّصه، انجح بالاختبار، وخذ شهادتك!</p>",cert:!0},code:`students = {"Ali": 88, "Sara": 95, "Omar": 67}

def grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    return "F"

for name in students:
    s = students[name]
    print(name, "->", s, "->", grade(s))

best = max(students, key=lambda k: students[k])
print("Top student:", best)`}]}})(),(function(){"use strict";var e=window.COURSE_VIDEOS;e&&(e.rust={en:{type:"video",id:"BpPEoZW5IiY",by:"freeCodeCamp"}},e.swift={en:{type:"video",id:"8Xg7E9shq0U",by:"CodeWithChris / freeCodeCamp"}},e.bash={en:{type:"video",id:"e7BufAVwDiM",by:"Full Bash Course (3h)"}},e.python.lessons={1:{ar:"mvZHDpCHphk"},2:{ar:"YsENRLNaYug"},3:{ar:"hQnZxqp3Q0Y"},4:{ar:"43lT7k0Zws0"},5:{ar:"x7fFnKVAzDI"},6:{ar:"j0Wktr70Cgw"},7:{ar:"nn4qN90A7X4"},8:{ar:"v8ZehXS3XF0"},9:{ar:"zN6ZYGSBKbM"},10:{ar:"jRGJjckgSlA"},11:{ar:"9JJDDKj_tGA"},12:{ar:"KtjJxOr5sp0"},13:{ar:"EpZH9JozUzA"},14:{ar:"pP0QJbJalik"},15:{ar:"gwKxpFG_h_8"},16:{ar:"BQ7jFrysbQU"},18:{ar:"CCMKMBGUxkc"},19:{ar:"BNXasw_j4sY"},20:{ar:"oNp5wwu9S7c"},21:{ar:"V7WP_402HE0"},22:{ar:"f3Dg6gxkL-0"},23:{ar:"LBf_8txij3I"},24:{ar:"6TFJs9uzEjI"},25:{ar:"z7g9gCYYLiU"}},e.javascript.lessons={1:{ar:"GM6dQBmc-Xg"},2:{ar:"NgLgguhL2to"},4:{ar:"rUa4NQQn7Zc"},5:{ar:"2bK3u5qbzik"},6:{ar:"fx7IxbfDEFY"},7:{ar:"ss75DBXkZ4Y"},8:{ar:"9dkSSPWu_qY"}})})(),(function(){"use strict";var e=window.COURSE_VIDEOS;e&&(e.python&&(e.python.arFull={id:"Do34NKMq80c",by:"كورس بايثون كامل بالعربي"}),e.javascript&&(e.javascript.arFull={id:"nHPJmqot_b0",by:"كورس جافاسكريبت كامل 2024"}),e.web&&(e.web.arFull={id:"MqPFvFKICWU",by:"كورس HTML و CSS كامل"}),e.sql&&(e.sql.arFull={id:"UFsTJ1zanXU",by:"كورس SQL كامل بالعربي"}),e.java&&(e.java.arFull={id:"ck7dreCJfQM",by:"كورس جافا كامل 2024"}))})(),(function(){"use strict";if(!(!window.COURSES||!window.COURSES.javascript)){var e=window.COURSES.javascript;e.duration={en:"8+ hours",ar:"+8 ساعات"},e.whatYouLearn={en:["Variables, types & operators","Conditions, loops & logic","Arrays, objects & modern syntax","Functions, arrows & closures","Async: promises & async/await","The DOM, events & a final project"],ar:["المتغيرات والأنواع والعمليات","الشروط والحلقات والمنطق","المصفوفات والكائنات والصياغة الحديثة","الدوال والأسهم والإغلاقات","غير المتزامن: Promises و async/await","الـ DOM والأحداث ومشروع ختامي"]},e.lessons=[{sec:{en:"Foundations",ar:"الأساسيات"},t:{en:"Introduction",ar:"مقدمة"},body:{en:"<p>JavaScript is the language of the web — it makes pages interactive and also runs servers, apps and games. Your first command is <code>console.log()</code>, which prints to the console.</p>",ar:"<p>جافاسكريبت لغة الويب — بتخلي الصفحات تفاعلية، وكمان بتشغّل سيرفرات وتطبيقات وألعاب. أول أمر هو <code>console.log()</code> اللي بيطبع في الكونسول.</p>"},code:`console.log("Hello, World!");
console.log("I am learning JavaScript 🟨");`},{t:{en:"Comments",ar:"التعليقات"},body:{en:"<p>Comments are notes the engine ignores. Single-line with <code>//</code>, multi-line with <code>/* … */</code>. Use them to explain <em>why</em>, not <em>what</em>.</p>",ar:"<p>التعليقات ملاحظات المحرّك بيتجاهلها. سطر واحد بـ <code>//</code>، وعدة أسطر بـ <code>/* … */</code>. استخدمها لشرح <em>ليش</em> مش <em>شو</em>.</p>"},code:`// This is a single-line comment
/* This is a
   multi-line comment */
console.log("Comments are ignored");`},{t:{en:"Variables: let & const",ar:"المتغيرات: let و const"},body:{en:"<p>Use <code>const</code> for values that never change, and <code>let</code> for ones that do. Avoid the old <code>var</code>. Names are case-sensitive and can't start with a number.</p>",ar:"<p>استخدم <code>const</code> للقيم اللي ما بتتغير، و<code>let</code> للي بتتغير. تجنّب <code>var</code> القديمة. الأسماء حسّاسة لحالة الأحرف وما بتبدأ برقم.</p>"},code:`const name = "Ali";
let age = 20;
age = 21;      // let can change
console.log(name, age);`},{t:{en:"Data types",ar:"أنواع البيانات"},body:{en:"<p>Primitives: <code>string</code>, <code>number</code>, <code>boolean</code>, <code>null</code>, <code>undefined</code>. Check any value with <code>typeof</code>.</p>",ar:"<p>الأنواع البدائية: <code>string</code> و<code>number</code> و<code>boolean</code> و<code>null</code> و<code>undefined</code>. افحص أي قيمة بـ <code>typeof</code>.</p>"},code:`console.log(typeof "hi");    // string
console.log(typeof 42);      // number
console.log(typeof true);    // boolean
console.log(typeof undefined);`},{t:{en:"Numbers & math",ar:"الأرقام والعمليات"},body:{en:"<p>Operators: <code>+ - * /</code>, remainder <code>%</code>, power <code>**</code>. The <code>Math</code> object adds <code>Math.round</code>, <code>Math.random</code>, <code>Math.max</code> and more.</p>",ar:"<p>العمليات: <code>+ - * /</code>، الباقي <code>%</code>، الأس <code>**</code>. وكائن <code>Math</code> بيضيف <code>Math.round</code> و<code>Math.random</code> و<code>Math.max</code> وغيرها.</p>"},code:`console.log(10 % 3);       // 1
console.log(2 ** 8);       // 256
console.log(Math.round(4.6));
console.log(Math.max(3, 9, 1));`},{t:{en:"Strings",ar:"النصوص"},body:{en:"<p>Strings have handy methods: <code>.length</code>, <code>.toUpperCase()</code>, <code>.includes()</code>, <code>.slice()</code>, <code>.replace()</code>. Access a character by index with <code>s[0]</code>.</p>",ar:"<p>النصوص إلها دوال مفيدة: <code>.length</code> و<code>.toUpperCase()</code> و<code>.includes()</code> و<code>.slice()</code> و<code>.replace()</code>. وبتوصل لأي حرف بالفهرس <code>s[0]</code>.</p>"},code:`let s = "JavaScript";
console.log(s.length);          // 10
console.log(s.toUpperCase());
console.log(s.includes("Script"));
console.log(s.slice(0, 4));     // Java`},{t:{en:"Template literals",ar:"القوالب النصية"},body:{en:"<p>Backticks let you embed values with <code>${…}</code> and write multi-line strings — much cleaner than joining with <code>+</code>.</p>",ar:"<p>العلامة الخلفية (backtick) بتخليك تدمج القيم بـ <code>${…}</code> وتكتب نصوص متعددة الأسطر — أنظف بكثير من الدمج بـ <code>+</code>.</p>"},code:'const name = "Sara", score = 95;\nconsole.log(`${name} scored ${score}%`);\nconsole.log(`Next year: ${score + 1}`);'},{t:{en:"Type conversion",ar:"تحويل الأنواع"},body:{en:'<p>Convert with <code>Number()</code>, <code>String()</code>, <code>Boolean()</code>. Beware: <code>"5" + 1</code> is <code>"51"</code> (join) but <code>"5" - 1</code> is <code>4</code> (math).</p>',ar:'<p>حوّل بـ <code>Number()</code> و<code>String()</code> و<code>Boolean()</code>. انتبه: <code>"5" + 1</code> بتعطي <code>"51"</code> (دمج) بس <code>"5" - 1</code> بتعطي <code>4</code> (حساب).</p>'},code:`console.log(Number("7") + 3);   // 10
console.log("5" + 1);           // "51"
console.log("5" - 1);           // 4
console.log(String(42));        // "42"`},{sec:{en:"Control flow",ar:"التحكم بالمسار"},t:{en:"Conditions: if / else",ar:"الشروط if / else"},body:{en:"<p>Make decisions with <code>if</code>, <code>else if</code>, <code>else</code>. The block runs when the condition is truthy.</p>",ar:"<p>خذ قرارات بـ <code>if</code> و<code>else if</code> و<code>else</code>. الكتلة بتشتغل لما الشرط يكون صحيح.</p>"},code:`const score = 85;
if (score >= 90) {
  console.log("Excellent!");
} else if (score >= 70) {
  console.log("Good job");
} else {
  console.log("Keep practicing");
}`},{t:{en:"Comparison & logic",ar:"المقارنة والمنطق"},body:{en:"<p>Always use <code>===</code> (strict equality) not <code>==</code>. Combine with <code>&&</code> (and), <code>||</code> (or), <code>!</code> (not).</p>",ar:"<p>استخدم دائمًا <code>===</code> (مساواة صارمة) مش <code>==</code>. اربط بـ <code>&&</code> (و) و<code>||</code> (أو) و<code>!</code> (ليس).</p>"},code:`const age = 20, hasId = true;
console.log(age >= 18 && hasId);  // true
console.log(age === "20");        // false (strict)
console.log(!hasId);              // false`},{t:{en:"The switch statement",ar:"جملة switch"},body:{en:"<p><code>switch</code> is cleaner than many <code>else if</code>s when checking one value against fixed options. Don't forget <code>break</code>.</p>",ar:"<p><code>switch</code> أنظف من كثير <code>else if</code> لما تفحص قيمة وحدة مقابل خيارات ثابتة. لا تنسى <code>break</code>.</p>"},code:`const day = 3;
switch (day) {
  case 1: console.log("Mon"); break;
  case 3: console.log("Wed"); break;
  default: console.log("Other");
}`},{t:{en:"while loops",ar:"حلقة while"},body:{en:"<p><code>while</code> repeats as long as its condition stays true. Make sure something inside changes it, or it loops forever.</p>",ar:"<p><code>while</code> بتكرر طالما الشرط صحيح. تأكد إنه في شي جوّاها بيغيّره، وإلا بتضل للأبد.</p>"},code:`let count = 1;
while (count <= 5) {
  console.log("Round " + count);
  count++;
}`},{t:{en:"for loops",ar:"حلقة for"},body:{en:"<p>A <code>for</code> loop packs start, condition and step in one line. Use <code>for…of</code> to walk arrays, <code>for…in</code> for object keys.</p>",ar:"<p>حلقة <code>for</code> بتجمع البداية والشرط والخطوة بسطر واحد. استخدم <code>for…of</code> للمصفوفات و<code>for…in</code> لمفاتيح الكائنات.</p>"},code:`for (let i = 1; i <= 5; i++) {
  console.log("i = " + i);
}
for (const ch of "abc") console.log(ch);`},{t:{en:"break & continue",ar:"break و continue"},body:{en:"<p><code>break</code> exits the loop; <code>continue</code> skips to the next round. Handy for special cases.</p>",ar:"<p><code>break</code> بتطلع من الحلقة، و<code>continue</code> بتقفز للدورة الجاية. مفيدة للحالات الخاصة.</p>"},code:`for (let n = 1; n <= 10; n++) {
  if (n === 5) break;
  if (n % 2 === 0) continue;
  console.log(n);   // 1, 3
}`},{sec:{en:"Data structures",ar:"هياكل البيانات"},t:{en:"Arrays",ar:"المصفوفات"},body:{en:"<p>An array holds an ordered list: <code>[1, 2, 3]</code>. Index from <code>0</code>. Grow with <code>.push()</code>, remove the last with <code>.pop()</code>.</p>",ar:"<p>المصفوفة بتخزن قائمة مرتّبة: <code>[1, 2, 3]</code>. الفهرسة من <code>0</code>. زيد بـ <code>.push()</code> واحذف الأخير بـ <code>.pop()</code>.</p>"},code:`const fruits = ["apple", "banana"];
fruits.push("cherry");
console.log(fruits[0]);       // apple
console.log(fruits.length);  // 3`},{t:{en:"Array methods: map, filter, reduce",ar:"دوال المصفوفات: map و filter و reduce"},body:{en:"<p>These power modern JS: <code>.map()</code> transforms each item, <code>.filter()</code> keeps some, <code>.reduce()</code> folds to one value.</p>",ar:"<p>هدول قوة جافاسكريبت الحديثة: <code>.map()</code> بتحوّل كل عنصر، <code>.filter()</code> بتبقّي البعض، <code>.reduce()</code> بتجمع لقيمة وحدة.</p>"},code:`const nums = [1, 2, 3, 4];
console.log(nums.map(n => n * 2));      // [2,4,6,8]
console.log(nums.filter(n => n % 2)); // [1,3]
console.log(nums.reduce((a, b) => a + b)); // 10`},{t:{en:"Objects",ar:"الكائنات"},body:{en:'<p>An object groups related data as key–value pairs: <code>{ name: "Ali", age: 20 }</code>. Read with dot notation <code>user.name</code>.</p>',ar:'<p>الكائن بيجمع بيانات مترابطة كأزواج مفتاح–قيمة: <code>{ name: "Ali", age: 20 }</code>. اقرأ بالنقطة <code>user.name</code>.</p>'},code:`const user = { name: "Ali", age: 20 };
console.log(user.name);
user.city = "Amman";   // add a key
console.log(user);`},{t:{en:"Object methods & this",ar:"دوال الكائن و this"},body:{en:"<p>Objects can hold functions (methods). Inside a method, <code>this</code> refers to the object itself.</p>",ar:"<p>الكائنات بتقدر تحتوي دوال (methods). جوّا الدالة، <code>this</code> بتشير للكائن نفسه.</p>"},code:`const dog = {
  name: "Rex",
  bark() { return this.name + " says woof"; }
};
console.log(dog.bark());`},{t:{en:"Destructuring",ar:"التفكيك (Destructuring)"},body:{en:"<p>Pull values out of arrays/objects into variables in one line — cleaner than repeated indexing.</p>",ar:"<p>اسحب القيم من المصفوفات/الكائنات لمتغيرات بسطر واحد — أنظف من الفهرسة المتكررة.</p>"},code:`const [a, b] = [10, 20];
const { name, age } = { name: "Sara", age: 22 };
console.log(a, b);       // 10 20
console.log(name, age);  // Sara 22`},{t:{en:"Spread & rest",ar:"النشر والتجميع (Spread/Rest)"},body:{en:"<p>The <code>...</code> operator spreads an array/object into another, or gathers extra arguments into one array.</p>",ar:"<p>المعامل <code>...</code> بينشر مصفوفة/كائن داخل آخر، أو بيجمع المعاملات الزائدة في مصفوفة وحدة.</p>"},code:`const a = [1, 2], b = [3, 4];
console.log([...a, ...b]);   // [1,2,3,4]
function sum(...nums) { return nums.reduce((x, y) => x + y); }
console.log(sum(1, 2, 3));  // 6`},{sec:{en:"Functions",ar:"الدوال"},t:{en:"Functions",ar:"الدوال"},body:{en:"<p>Functions package reusable logic. Declare with <code>function</code>, call by name, and return a value with <code>return</code>.</p>",ar:"<p>الدوال بتغلّف منطق قابل لإعادة الاستخدام. عرّفها بـ <code>function</code>، استدعيها بالاسم، وأرجع قيمة بـ <code>return</code>.</p>"},code:`function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Ali"));
console.log(greet("Sara"));`},{t:{en:"Arrow functions",ar:"الدوال السهمية"},body:{en:"<p>A shorter syntax: <code>const add = (a, b) => a + b;</code>. One expression means an implicit return.</p>",ar:"<p>صياغة أقصر: <code>const add = (a, b) => a + b;</code>. تعبير واحد يعني إرجاع ضمني.</p>"},code:`const add = (a, b) => a + b;
const square = x => x * x;
console.log(add(3, 4));   // 7
console.log(square(5));   // 25`},{t:{en:"Callbacks",ar:"دوال الاستدعاء (Callbacks)"},body:{en:"<p>A callback is a function passed to another function to run later — the backbone of array methods and events.</p>",ar:"<p>الـ callback دالة بتمرّرها لدالة ثانية عشان تشتغل لاحقًا — أساس دوال المصفوفات والأحداث.</p>"},code:`function doTwice(fn) { fn(); fn(); }
doTwice(() => console.log("Hi!"));
[1, 2, 3].forEach(n => console.log(n));`},{t:{en:"Closures",ar:"الإغلاقات (Closures)"},body:{en:"<p>A closure is a function that remembers variables from where it was created — even after that scope ended. Powers counters, factories and private state.</p>",ar:"<p>الإغلاق دالة بتتذكّر متغيرات المكان اللي اتعرّفت فيه — حتى بعد ما ينتهي. بتشغّل العدّادات والمصانع والحالة الخاصة.</p>"},code:`function counter() {
  let n = 0;
  return () => ++n;
}
const next = counter();
console.log(next(), next(), next()); // 1 2 3`},{sec:{en:"Async & the browser",ar:"غير المتزامن والمتصفح"},t:{en:"Promises",ar:"الـ Promises"},body:{en:"<p>A Promise represents a value that arrives later (like a network reply). Handle it with <code>.then()</code> for success and <code>.catch()</code> for errors.</p>",ar:"<p>الـ Promise بيمثّل قيمة بتوصل لاحقًا (زي رد الشبكة). تعامل معه بـ <code>.then()</code> للنجاح و<code>.catch()</code> للأخطاء.</p>"},code:`const p = new Promise(resolve => {
  setTimeout(() => resolve("Done!"), 500);
});
p.then(msg => console.log(msg));`},{t:{en:"async / await",ar:"async / await"},body:{en:"<p><code>async/await</code> lets you write asynchronous code that reads top-to-bottom like normal code. <code>await</code> pauses until a promise settles.</p>",ar:"<p><code>async/await</code> بتخليك تكتب كود غير متزامن يُقرأ من فوق لتحت زي الكود العادي. <code>await</code> بتوقف لحد ما ينحل الـ promise.</p>"},code:`function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
async function run() {
  console.log("start");
  await wait(500);
  console.log("after 0.5s");
}
run();`},{t:{en:"The DOM",ar:"الـ DOM"},body:{en:"<p>In the browser, the DOM is the page as objects. Select elements with <code>document.querySelector()</code> and change them via <code>.textContent</code> / <code>.style</code>. <em>Run this on a real page.</em></p>",ar:"<p>في المتصفح، الـ DOM هو الصفحة ككائنات. اختر العناصر بـ <code>document.querySelector()</code> وغيّرها عبر <code>.textContent</code> / <code>.style</code>. <em>جرّبه على صفحة حقيقية.</em></p>"},code:`// On a page with <h1 id="title">:
const el = document.querySelector("#title");
el.textContent = "Changed by JS!";
el.style.color = "green";`},{t:{en:"Events",ar:"الأحداث"},body:{en:"<p>Respond to user actions with <code>addEventListener</code> — clicks, typing, hovering. This is how pages become interactive.</p>",ar:"<p>تفاعل مع أفعال المستخدم بـ <code>addEventListener</code> — الضغط، الكتابة، التمرير. هيك بتصير الصفحات تفاعلية.</p>"},code:`// On a page with <button id="btn">:
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Button clicked!");
});`},{t:{en:"Error handling",ar:"معالجة الأخطاء"},body:{en:"<p>Wrap risky code in <code>try/catch</code> so one error doesn't crash everything. <code>finally</code> always runs.</p>",ar:"<p>غلّف الكود الخطر بـ <code>try/catch</code> عشان خطأ واحد ما يوقّف كل شي. <code>finally</code> بتشتغل دائمًا.</p>"},code:`try {
  JSON.parse("{ bad json");
} catch (e) {
  console.log("Caught:", e.message);
} finally {
  console.log("Always runs");
}`},{t:{en:"Final project 🎓",ar:"المشروع الختامي 🎓"},body:{en:"<p>Combine it all: a tiny task list using an array, objects, functions, a loop and array methods — every rule you learned in one program. Finish it, pass the quiz, and claim your certificate!</p>",ar:"<p>اجمع كل شي: قائمة مهام صغيرة بتستخدم مصفوفة وكائنات ودوال وحلقة ودوال المصفوفات — كل قاعدة تعلمتها ببرنامج واحد. خلّصه، انجح بالاختبار، وخذ شهادتك!</p>",cert:!0},code:`const tasks = [
  { text: "Learn JS", done: true },
  { text: "Build a project", done: false },
];
function add(text) { tasks.push({ text, done: false }); }
add("Get hired");
const pending = tasks.filter(t => !t.done).map(t => t.text);
console.log("Pending:", pending.join(", "));
console.log("Total:", tasks.length);`}]}})(),(function(){var e=window.COURSES&&window.COURSES.python;if(e){var n=[{t:{en:"Comprehensions",ar:"الاختصارات"},body:{en:"<p>List comprehensions build lists in one elegant line.</p>",ar:"<p>اختصارات القوائم بتبني قوائم بسطر واحد أنيق.</p>"},code:`nums = [1, 2, 3, 4, 5]
squares = [n * n for n in nums]
evens = [n for n in nums if n % 2 == 0]
print(squares, evens)`,sec:{en:"Pro Python",ar:"بايثون للمحترفين"}},{t:{en:"map, filter & lambda",ar:"map و filter و lambda"},body:{en:"<p>Transform and filter data functionally with tiny lambda functions.</p>",ar:"<p>حوّل وصفِّ البيانات بأسلوب دالي مع دوال lambda صغيرة.</p>"},code:`nums = [1, 2, 3, 4]
doubled = list(map(lambda x: x * 2, nums))
big = list(filter(lambda x: x > 2, nums))
print(doubled, big)`},{t:{en:"Packages with pip",ar:"الحزم مع pip"},body:{en:"<p>pip installs thousands of ready libraries from the community.</p>",ar:"<p>pip بتثبّت آلاف المكتبات الجاهزة من المجتمع.</p>"},code:`# in the terminal:
pip install requests

import requests
# r = requests.get("https://api.example.com")`},{t:{en:"Capstone project + certificate",ar:"المشروع الختامي + الشهادة"},body:{en:"<p>Combine functions, loops, files and classes into a complete program. 🏆 Then claim your certificate!</p>",ar:"<p>اجمع الدوال والحلقات والملفات والكلاسات ببرنامج كامل. 🏆 وبعدها استلم شهادتك!</p>",cert:!0},code:`class Bank:
    def __init__(self):
        self.balance = 0
    def deposit(self, amount):
        self.balance += amount
        return self.balance

acc = Bank()
print(acc.deposit(100))`,sec:{en:"Capstone",ar:"المشروع الختامي"}}];e.lessons=e.lessons.concat(n).slice(0,30)}})(),(function(){var e={typescript:[{q:{en:"Which type annotation marks text?",ar:"أي نوع يدل على نص؟"},opts:["number","string","bool","char"],c:1},{q:{en:"Which keyword declares a constant?",ar:"أي كلمة تُعرّف ثابتًا؟"},opts:["let","const","var","def"],c:1},{q:{en:"TypeScript adds ___ to JavaScript.",ar:"TypeScript تضيف ___ لجافاسكربت."},opts:[{en:"types",ar:"الأنواع"},{en:"colors",ar:"الألوان"},{en:"servers",ar:"خوادم"},{en:"images",ar:"صور"}],c:0},{q:{en:"How to type a function returning a number?",ar:"كيف تحدّد دالة ترجع رقمًا؟"},opts:["(): number","-> int",":num()","number:"],c:0},{q:{en:"Which prints to the console?",ar:"أي أمر يطبع في الكونسول؟"},opts:["console.log()","echo","printf","puts"],c:0}],java:[{q:{en:"Which prints a line in Java?",ar:"أي أمر يطبع سطرًا في جافا؟"},opts:["System.out.println()","print()","echo","cout"],c:0},{q:{en:"Type for whole numbers?",ar:"نوع الأرقام الصحيحة؟"},opts:["int","string","char","bool"],c:0},{q:{en:"Every Java program starts in…",ar:"كل برنامج جافا يبدأ من…"},opts:["main()","start()","run()","begin()"],c:0},{q:{en:"Which declares text?",ar:"أي نوع يخزّن نصًا؟"},opts:["String","int","double","boolean"],c:0},{q:{en:"Which loop repeats a fixed number of times?",ar:"أي حلقة تكرّر عددًا محددًا؟"},opts:["for","switch","if","try"],c:0}],csharp:[{q:{en:"Which prints a line in C#?",ar:"أي أمر يطبع سطرًا في C#؟"},opts:["Console.WriteLine()","print()","echo","puts"],c:0},{q:{en:"String interpolation uses…",ar:"دمج النص يستخدم…"},opts:['$"{x}"',"#{x}","%s","{{x}}"],c:0},{q:{en:"Which keyword makes a constant?",ar:"أي كلمة تصنع ثابتًا؟"},opts:["const","let","final","val"],c:0},{q:{en:"C# programs run on the… runtime",ar:"برامج C# تعمل على…"},opts:[".NET","JVM","V8","Ruby"],c:0},{q:{en:"Which reads a line of input?",ar:"أي أمر يقرأ سطر إدخال؟"},opts:["Console.ReadLine()","input()","gets","scanf"],c:0}],cpp:[{q:{en:"Which prints in C++?",ar:"أي أمر يطبع في C++؟"},opts:["cout <<","print()","echo","System.out"],c:0},{q:{en:"Which header is needed for cout?",ar:"أي مكتبة تلزم لـ cout؟"},opts:["<iostream>","<stdio.h>","<string>","<vector>"],c:0},{q:{en:"main() should return…",ar:"الدالة main يجب أن ترجع…"},opts:["int","void","string","bool"],c:0},{q:{en:"Which reads input?",ar:"أي أمر يقرأ إدخالًا؟"},opts:["cin >>","read()","input()","gets"],c:0},{q:{en:"A for loop header has how many parts?",ar:"رأس حلقة for فيه كم جزء؟"},opts:["3","1","2","4"],c:0}],c:[{q:{en:"Which prints text in C?",ar:"أي أمر يطبع نصًا في C؟"},opts:["printf()","cout","print()","echo"],c:0},{q:{en:"Which header has printf?",ar:"أي مكتبة فيها printf؟"},opts:["<stdio.h>","<iostream>","<string.h>","<math.h>"],c:0},{q:{en:"Format specifier for an int?",ar:"رمز التنسيق لعدد صحيح؟"},opts:["%d","%s","%f","%c"],c:0},{q:{en:"Every C statement ends with…",ar:"كل جملة في C تنتهي بـ…"},opts:[";",":",".","}"],c:0},{q:{en:"C groups data using…",ar:"C تجمع البيانات باستخدام…"},opts:["struct","class","object","map"],c:0}],php:[{q:{en:"PHP variables start with…",ar:"متغيرات PHP تبدأ بـ…"},opts:["$","@","#","&"],c:0},{q:{en:"Which prints output?",ar:"أي أمر يطبع؟"},opts:["echo","print_r only","say","write"],c:0},{q:{en:"PHP code is wrapped in…",ar:"كود PHP يُحاط بـ…"},opts:["<?php ?>","<script>","{{ }}","<% %>"],c:0},{q:{en:"Which joins two strings?",ar:"أي معامل يدمج نصين؟"},opts:[".","+","&","~"],c:0},{q:{en:"PHP mainly runs on the…",ar:"PHP تعمل غالبًا على…"},opts:[{en:"server",ar:"السيرفر"},{en:"GPU",ar:"كرت الشاشة"},{en:"printer",ar:"الطابعة"},{en:"phone only",ar:"الهاتف فقط"}],c:0}],go:[{q:{en:"Which prints a line in Go?",ar:"أي أمر يطبع سطرًا في Go؟"},opts:["fmt.Println()","print()","echo","cout"],c:0},{q:{en:"Short variable declaration uses…",ar:"التعريف المختصر للمتغير يستخدم…"},opts:[":=","=","let","var only"],c:0},{q:{en:"Every Go file starts with…",ar:"كل ملف Go يبدأ بـ…"},opts:["package","import","func","main"],c:0},{q:{en:"Go uses ___ as its only loop keyword.",ar:"Go تستخدم ___ ككلمة الحلقة الوحيدة."},opts:["for","while","loop","repeat"],c:0},{q:{en:"A growable list in Go is a…",ar:"قائمة قابلة للنمو في Go هي…"},opts:["slice","array","map","tuple"],c:0}],ruby:[{q:{en:"Which prints a line in Ruby?",ar:"أي أمر يطبع سطرًا في روبي؟"},opts:["puts","print()","echo","cout"],c:0},{q:{en:"String interpolation uses…",ar:"دمج النص يستخدم…"},opts:["#{x}","${x}","%s","{{x}}"],c:0},{q:{en:"A block often ends with…",ar:"الكتلة غالبًا تنتهي بـ…"},opts:["end","}",";","stop"],c:0},{q:{en:"Which defines a method?",ar:"أي كلمة تعرّف دالة؟"},opts:["def","func","function","fn"],c:0},{q:{en:"[1,2,3] in Ruby is an…",ar:"‎[1,2,3] في روبي هي…"},opts:[{en:"array",ar:"مصفوفة"},{en:"hash",ar:"خريطة"},{en:"string",ar:"نص"},{en:"symbol",ar:"رمز"}],c:0}],rust:[{q:{en:"Which macro prints a line?",ar:"أي ماكرو يطبع سطرًا؟"},opts:["println!","print()","echo","puts"],c:0},{q:{en:"Which keyword makes a variable changeable?",ar:"أي كلمة تجعل المتغير قابلًا للتغيير؟"},opts:["mut","var","let only","change"],c:0},{q:{en:"Rust is famous for memory…",ar:"Rust مشهورة بأمان…"},opts:[{en:"safety",ar:"الذاكرة"},{en:"colors",ar:"الألوان"},{en:"speed only",ar:"السرعة فقط"},{en:"sound",ar:"الصوت"}],c:0},{q:{en:"Multi-way branching uses…",ar:"التفريع المتعدد يستخدم…"},opts:["match","switch","case","when"],c:0},{q:{en:"Every program starts in…",ar:"كل برنامج يبدأ من…"},opts:["fn main()","start()","begin","run()"],c:0}],kotlin:[{q:{en:"Which prints a line in Kotlin?",ar:"أي أمر يطبع سطرًا في كوتلن؟"},opts:["println()","print.log","echo","puts"],c:0},{q:{en:"Which declares a read-only value?",ar:"أي كلمة تعرّف قيمة ثابتة؟"},opts:["val","var","let","const only"],c:0},{q:{en:"Kotlin runs mainly on the…",ar:"كوتلن تعمل غالبًا على…"},opts:["JVM","V8",".NET","Ruby"],c:0},{q:{en:"Multi-way branching uses…",ar:"التفريع المتعدد يستخدم…"},opts:["when","switch","match","case"],c:0},{q:{en:"String templates use…",ar:"قوالب النص تستخدم…"},opts:["$name","#{name}","%s","{name}"],c:0}],swift:[{q:{en:"Which prints in Swift?",ar:"أي أمر يطبع في سويفت؟"},opts:["print()","println","echo","puts"],c:0},{q:{en:"Which declares a constant?",ar:"أي كلمة تعرّف ثابتًا؟"},opts:["let","var","const","val"],c:0},{q:{en:"String interpolation uses…",ar:"دمج النص يستخدم…"},opts:["\\(x)","#{x}","${x}","%x"],c:0},{q:{en:"Swift is mainly used to build…",ar:"سويفت تُستخدم غالبًا لبناء…"},opts:[{en:"iOS apps",ar:"تطبيقات iOS"},{en:"websites only",ar:"مواقع فقط"},{en:"databases",ar:"قواعد بيانات"},{en:"games only",ar:"ألعاب فقط"}],c:0},{q:{en:"Which loop counts 1 through 5?",ar:"أي حلقة تعد من 1 إلى 5؟"},opts:["for i in 1...5","loop 5","for(5)","repeat 5"],c:0}],r:[{q:{en:"Which assigns a value in R?",ar:"أي رمز يسند قيمة في R؟"},opts:["<-","=>","::","->>"],c:0},{q:{en:"Which combines values into a vector?",ar:"أي دالة تجمع القيم في متجه؟"},opts:["c()","vec()","list()","arr()"],c:0},{q:{en:"R is best known for… ",ar:"R مشهورة بـ…"},opts:[{en:"statistics & data",ar:"الإحصاء والبيانات"},{en:"mobile apps",ar:"تطبيقات الجوال"},{en:"game engines",ar:"محركات الألعاب"},{en:"operating systems",ar:"أنظمة تشغيل"}],c:0},{q:{en:"R vectors are indexed starting at…",ar:"متجهات R تبدأ من الفهرس…"},opts:["1","0","-1","2"],c:0},{q:{en:"A table of data in R is a…",ar:"جدول بيانات في R هو…"},opts:["data.frame","matrix only","string","loop"],c:0}],mongodb:[{q:{en:"MongoDB stores data as…",ar:"MongoDB تخزّن البيانات كـ…"},opts:[{en:"documents",ar:"مستندات"},{en:"rows only",ar:"صفوف فقط"},{en:"images",ar:"صور"},{en:"files",ar:"ملفات"}],c:0},{q:{en:"Which inserts one document?",ar:"أي أمر يدرج مستندًا واحدًا؟"},opts:["insertOne()","addRow()","put()","create()"],c:0},{q:{en:"Which reads documents?",ar:"أي أمر يقرأ المستندات؟"},opts:["find()","select()","get()","read()"],c:0},{q:{en:'Which operator means "greater than or equal"?',ar:"أي معامل يعني «أكبر أو يساوي»؟"},opts:["$gte","$max",">=","$big"],c:0},{q:{en:"A group of documents is a…",ar:"مجموعة مستندات تُسمّى…"},opts:[{en:"collection",ar:"مجموعة"},{en:"table",ar:"جدول"},{en:"folder",ar:"مجلد"},{en:"sheet",ar:"ورقة"}],c:0}],django:[{q:{en:"Django is a framework for which language?",ar:"Django إطار لأي لغة؟"},opts:["Python","JavaScript","PHP","Ruby"],c:0},{q:{en:"A function that returns a response is a…",ar:"دالة ترجع استجابة تُسمّى…"},opts:[{en:"view",ar:"view"},{en:"model",ar:"model"},{en:"route",ar:"مسار"},{en:"template",ar:"قالب"}],c:0},{q:{en:"Which file maps URLs to views?",ar:"أي ملف يربط الروابط بالـ views؟"},opts:["urls.py","views.py","models.py","app.py"],c:0},{q:{en:"A model maps to a database…",ar:"الـ model يقابل في قاعدة البيانات…"},opts:[{en:"table",ar:"جدول"},{en:"column",ar:"عمود"},{en:"file",ar:"ملف"},{en:"server",ar:"سيرفر"}],c:0},{q:{en:"Which command applies migrations?",ar:"أي أمر يطبّق الترحيلات؟"},opts:["migrate","build","deploy","run"],c:0}],bash:[{q:{en:"Which prints text in Bash?",ar:"أي أمر يطبع نصًا في Bash؟"},opts:["echo","print","say","cout"],c:0},{q:{en:"How do you read a variable named name?",ar:"كيف تقرأ متغيرًا اسمه name؟"},opts:["$name","&name","@name","#name"],c:0},{q:{en:"Which lists files?",ar:"أي أمر يعرض الملفات؟"},opts:["ls","dir only","list","show"],c:0},{q:{en:"Which sends output into another command?",ar:"أي رمز يمرّر المخرجات لأمر آخر؟"},opts:["|",">>","&&","//"],c:0},{q:{en:"A script's first line usually starts with…",ar:"أول سطر بالسكربت غالبًا يبدأ بـ…"},opts:["#!","//","<?","--"],c:0}],git:[{q:{en:"Which starts a new repository?",ar:"أي أمر يبدأ مستودعًا جديدًا؟"},opts:["git init","git start","git new","git open"],c:0},{q:{en:"Which saves a snapshot with a message?",ar:"أي أمر يحفظ لقطة برسالة؟"},opts:["git commit","git save","git push","git add"],c:0},{q:{en:"Which stages a file for commit?",ar:"أي أمر يجهّز ملفًا للـ commit؟"},opts:["git add","git stage","git commit","git save"],c:0},{q:{en:"Which uploads commits to GitHub?",ar:"أي أمر يرفع الـ commits إلى GitHub؟"},opts:["git push","git send","git upload","git sync"],c:0},{q:{en:"A separate line of work is a…",ar:"خط عمل منفصل يُسمّى…"},opts:[{en:"branch",ar:"فرع"},{en:"commit",ar:"commit"},{en:"remote",ar:"remote"},{en:"tag",ar:"وسم"}],c:0}]};window.COURSES&&Object.keys(e).forEach(function(n){window.COURSES[n]&&(window.COURSES[n].quiz=e[n])})})();
