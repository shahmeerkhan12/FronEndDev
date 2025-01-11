let body = document.querySelector("body");
let text = " I am added through the dom manipulation using JS";
body.append("Hello world");
body.append(text);
//add a button to the page
let txt1 = "Learn Javascript";
let txt2 = "Explore Web Development";
let txt3 = "Learn Python";
let txt4 = "Angular.js";
let txt5 = "Express.js";
const btnArr = [txt1, txt2, txt3, txt4, txt5];
// <<<<<<<<<<<<<<  ✨ Codeium Command ⭐  >>>>>>>>>>>>>>>>
for (let i = 0; i < btnArr.length; i++) {
  let btn = document.createElement("button");
  btn.innerText = btnArr[i];
  btn.style.padding = "10px 20px";
  btn.style.margin = "10px 20px";
  btn.style.fontSize = "16px";
  btn.style.cursor = "pointer";
  body.prepend(btn);
}
// <<<<<<<  369a0e2d-26dc-48a7-aa84-869c36252bc2  >>>>>>>
// for (btn of btnArr) {
//   document.createElement("button").innerText = btn;
//   body.append(btn);
// }
let button = document.createElement("button");
button.innerText = "React.js";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
body.prepend(button);

let div = document.createElement("div");
div.innerHTML = "<h2>Hello World</h2>";
div.style.background = "#b5e6cea3";
div.style.fontSize = "17vmin";
div.style.height = "30vmin";

body.append(div);
