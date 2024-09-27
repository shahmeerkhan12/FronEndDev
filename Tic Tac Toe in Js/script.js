let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".mesg-container");
let newGameBtn = document.querySelector("#newGame-btn");
let message = document.querySelector(".mesg");

// track players turn
// playerO and playerX

let turnO = true;

let winingPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    console.log("box was clicked:");
    box.disabled = true;
    checkWinner();
  });
});
//to disable boxes(should not be clicked after got a winner)
const disabledBoxes = () => {
  for (const box of boxes) {
    box.disabled = true;
  }
};

const enabledBoxes = () => {
  for (const box of boxes) {
    box.disabled = false;
    // while reseting the game remove all prev values
    box.innerText = "";
  }
};
// the winner funciton
const showWinner = (winner) => {
  message.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
};
const checkWinner = () => {
  for (let pattern of winingPattern) {
    //storing the the patterns positions 1st, 2nd and 3rd values in corresponding variables
    let pos1value = boxes[pattern[0]].innerText;
    let pos2value = boxes[pattern[1]].innerText;
    let pos3value = boxes[pattern[2]].innerText;
    // before comparing the each positions value, check if there is an empty box
    if (pos1value != "" && pos2value != "" && pos3value != "") {
      if (pos1value === pos2value && pos2value === pos3value) {
        console.log("Winner, Player", pos1value);
        showWinner(pos1value);
      }
    }
  }
};
const resetGame = () => {
  turnO = true;
  enabledBoxes();
  msgContainer.classList.add("hide");
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
