//  method 2 : handling event using JS functions

let btn = document.querySelector("#btn");
//evt is the event object,  currently it is onclick event\

//suppose two different events handlers
// btn.onclick = (evt) => {
//   console.log(evt.type);
//   console.log(evt.clientX);
//   console.log(evt.clientY);
//   console.log(evt.target);
// };
//this will override the previous one
// btn.onclick = (evt) => {
//   console.log("controler2");
// };

// method 3 :   event listners

let DIV = document.querySelector("div");
//do something for dark mode
btn.addEventListener("click", () => {
  //remember the classList adds new classes to the list,

  DIV.classList.toggle("bg-black");
});
// add visible or remove visible by:
let visible = document.querySelector("#toggleBtn");
visible.addEventListener("click", () => {
  DIV.classList.toggle("visible");
  console.log(DIV.outerText);
});

// DIV.addEventListener("mouseenter", () => {
//   console.log("You just entered container.");
//   DIV.style.backgroundColor = "white";
//   DIV.style.color = "black";
// });
// DIV.addEventListener("mouseleave", () => {
//   DIV.style.backgroundColor = "black";
//   DIV.style.color = "white";
// });

// if you can add event listners
// u can remove the event listners
let callBackFuntion1 = () => {
  console.log("I printed thru call back function 1");
};
let callBackFuntion2 = () => {
  console.log("I printed thru call back function 2");
};
btn.addEventListener("click", callBackFuntion1);
btn.addEventListener("click", callBackFuntion2);

btn.removeEventListener("click", callBackFuntion2);
