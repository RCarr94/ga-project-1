// Variables
const p1 = "red";
const p2 = "green";

let turn = 1;

let score = {
  1: 0,
  2: 0,
};

// Cached elements
let tr = document.getElementsByTagName("tr");
let tc = document.getElementsByTagName("td");
let ts = document.querySelector(".box");
let updates = document.querySelector("#title");
let resetBtn = document.querySelector("#reset-board");
let startBtn = document.querySelector("#start-game");

// Event listeners
// 1. confirm if scores will remain at top (once completed)
resetBtn.addEventListener("click", function () {
  resetBoard();
});

startBtn.addEventListener("click", startGame);

Array.prototype.forEach.call(tc, function (zone) {
  zone.addEventListener("click", function (e) {
    addChip(e);
    playerTurn();
  });
  zone.style.backgroundColor = "white";
});

// Functions

function resetBoard() {
  Array.prototype.forEach.call(tc, function (z) {
    z.style.backgroundColor = "white";
    turn = 1;
    updates.innerHTML = "Play again! Press 'Start Game' to see who goes first!";
  });
}

function playerTurn() {
  if (turn == 1) {
    updates.innerHTML = "P1, your move!";
  }
  if (turn == 2) {
    updates.innerHTML = "P2, your move!";
  }
}

function addChip(e) {
  let location = e.target.cellIndex;
  let row = [];

  for (let i = 5; i > -1; i--) {
    if (tr[i].children[location].style.backgroundColor == "white") {
      row.push(tr[i].children[location]);
      if (turn == 1) {
        row[0].style.backgroundColor = p1;
        if (checkWin()) {
          turn = 0;
          updates.innerHTML = "P1 Wins!";
        } else if (checkTie()) {
          updates.innerHTML = "Wow... an actual tie game!";
        } else {
          return (turn = 2);
        }
      }
      if (turn == 2) {
        row[0].style.backgroundColor = p2;
        if (checkWin()) {
          turn = 0;
          updates.innerHTML = "P2 Wins!";
        } else if (checkTie()) {
          updates.innerHTML = "Wow... an actual tie game!";
        } else {
          return (turn = 1);
        }
      }
    }
  }
}

// Check for winner

function colorCheck(box1, box2, box3, box4) {
  return box1 == box2 && box1 == box3 && box1 == box4 && box1 !== "white";
}

function checkWin() {
  // vertical win
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 3; j++) {
      if (
        colorCheck(
          tr[j].children[i].style.backgroundColor,
          tr[j + 1].children[i].style.backgroundColor,
          tr[j + 2].children[i].style.backgroundColor,
          tr[j + 3].children[i].style.backgroundColor
        )
      ) {
        return true;
      }
    }
  }

  // horizontal win
  for (let i = 0; i < tr.length; i++) {
    for (let j = 0; j < 4; j++) {
      if (
        colorCheck(
          tr[i].children[j].style.backgroundColor,
          tr[i].children[j + 1].style.backgroundColor,
          tr[i].children[j + 2].style.backgroundColor,
          tr[i].children[j + 3].style.backgroundColor
        )
      ) {
        return true;
      }
    }
  }
  // diagonal win right
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      if (
        colorCheck(
          tr[j].children[i].style.backgroundColor,
          tr[j + 1].children[i + 1].style.backgroundColor,
          tr[j + 2].children[i + 2].style.backgroundColor,
          tr[j + 3].children[i + 3].style.backgroundColor
        )
      ) {
        return true;
      }
    }
  }
  // diagonal win left
  for (let i = 0; i < 4; i++) {
    for (let j = 5; j > 2; j--) {
      if (
        colorCheck(
          tr[j].children[i].style.backgroundColor,
          tr[j - 1].children[i + 1].style.backgroundColor,
          tr[j - 2].children[i + 2].style.backgroundColor,
          tr[j - 3].children[i + 3].style.backgroundColor
        )
      ) {
        return true;
      }
    }
  }
}

// Check for tie

function checkTie() {
  let fillBoard = [];
  for (let i = 0; i < tc.length; i++) {
    if (tc[i].style.backgroundColor !== "white") {
      fillBoard.push(tc[i]);
    }
  }
  if (fillBoard.length == tc.length) {
    return true;
  }
}

// reset score - check tic-tac-toe reset

// start game - randomly select who gets first move - disable once pressed, if board.includes(null) && scores = 0

// function startGame() {
//   if (board.includes(1) || board.includes("-1")) return;
//   let starter = Math.floor(Math.random() * (2 - 1 + 1) + 1);
//   console.log(starter);
//   if (starter == 1) {
//     turn = 1;
//     updates.innerHTML = `${playerNames[turn]} is first!`;
//   }
//   if (starter == 2) {
//     turn = "-1";
//     updates.innerHTML = `${playerNames[turn]} is first!`;
//   }
// }

//Info pop up
