// Variables
const p1 = "red";
const p2 = "green";

let turn = 1;

let score = {
  1: 0,
  "-1": 0,
};

// Cached elements
let tr = document.getElementsByTagName("tr");
let tc = document.getElementsByTagName("td");
let ts = document.querySelector(".box");
let updates = document.querySelector("#title");

// Event listeners
// 1. confirm if scores will remain at top (once completed)
document.querySelector("#reset-board").addEventListener("click", function () {
  initialize();
  render();
  updates.innerHTML = "Let's play again! Press 'Start Game' to see who goes first!";
});

Array.prototype.forEach.call(tc, function (zone) {
  zone.addEventListener("click", function () {
    // addChip();
    // playerTurn(); - reminder to add!
  });
  zone.style.backgroundColor = "white";
});

// Functions

function addChip(e) {
  let location = e.target.cellIndex;
  console.log(location);
  let row = [];

  for (let i = 5; i > -1; i--) {
    if (tr[i].children[location].style.backgroundColor == "white") {
      row.push(tr[i].children[location]);
      if (turn == 1) {
        row[0].style.backgroundColor = p1;
        // add checking functions here
      }
    }
  }
}

// // load initial state of game
// function initialize() {
//   board = [
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//     null,
//   ];

//   turn = 1;

//   winner = null;
// }
// initialize();

// player clicking a zone

// document.querySelector("table").addEventListener("click", zonePicked);

// function zonePicked(e) {
//   const idx = parseInt(e.target.id);
//   console.log(idx);
//   if (board[idx] || winner !== null) return;
//   board[idx] = turn;
//   turn *= -1;
//   winner = playerWin();
//   render();
// }

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
          tr[i].children[j].style.backgroundColor,
          tr[i + 1].children[j].style.backgroundColor,
          tr[i + 2].children[j].style.backgroundColor,
          tr[i + 3].children[j].style.backgroundColor
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
          tr[i].childElementCount[j + 3].style.backgroundColor
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
          tr[i].children[j].style.backgroundColor,
          tr[i + 1].children[j + 1].style.backgroundColor,
          tr[i + 2].children[j + 2].style.backgroundColor,
          tr[i + 3].children[j + 3].style.backgroundColor
        )
      ) {
        return true;
      }
    }
  }
  // diagonal win left
  for (let i = 0; i < 4; i++) {
    for (let j = 5; j > 2; j++) {
      if (
        colorCheck(
          tr[i].children[j].style.backgroundColor,
          tr[i - 1].children[j + 1].style.backgroundColor,
          tr[i - 2].children[j + 2].style.backgroundColor,
          tr[i - 3].children[j + 3].style.backgroundColor
        )
      ) {
        return true;
      }
    }
  }
}

// function playerWin() {
//   for (let i = 0; i < winCons.length; i++) {
//     if (Math.abs(board[winCons[i][0]] + board[winCons[i][1]] + board[winCons[i][2]] + board[winCons[i][3]]) === 4) return board[winCons[i][0]];
//   }
//   if (board.includes(null)) return null;
//   return "Tie";
// }

// Render the board & updated H1 message

// function render() {
//   board.forEach(function (z, idx) {
//     zones[idx].style.backgroundColor = players[z];
//   });
//   if (winner == "Tie") {
//     updates.innerHTML = "Wow... an actual tie.";
//   } else if (winner == 1 || winner == -1) {
//     updates.innerHTML = `${playerNames[winner]} has won Connect Four!`;
//     // add another else if statement splitting the two winners to add score text to them
//   } else {
//     updates.innerHTML = `${playerNames[turn]}, your move.`;
//   }
// }

// reset score - check tic-tac-toe reset

// start game - randomly select who gets first move - disable once pressed, if board.includes(null) && scores = 0
// document.querySelector("#start-game").addEventListener("click", startGame);

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
