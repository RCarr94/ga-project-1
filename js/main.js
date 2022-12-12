const players = {
  null: "white",
  1: "red",
  "-1": "green",
};

// win conditions

const winCons = [
  [36, 37, 38, 39],
  [36, 30, 24, 18],
  [36, 29, 22, 15],
  [37, 38, 39, 40],
  [37, 30, 23, 16],
  [37, 31, 25, 19],
  [38, 39, 40, 41],
  [38, 31, 24, 17],
  [38, 32, 26, 20],
  [39, 40, 41, 42],
  [39, 32, 25, 18],
  [39, 31, 23, 15],
  [39, 33, 27, 21],
  [40, 32, 24, 16],
  [40, 33, 26, 19],
  [41, 33, 25, 17],
  [41, 34, 27, 20],
  [42, 34, 26, 18],
  [42, 35, 28, 21],
  [29, 22, 15, 8],
  [29, 23, 17, 11],
  [29, 30, 31, 32],
  [30, 23, 16, 9],
  [30, 24, 18, 12],
  [30, 31, 32, 33],
  [31, 24, 17, 10],
  [31, 25, 19, 13],
  [31, 32, 33, 34],
  [32, 24, 16, 8],
  [32, 25, 18, 11],
  [32, 26, 20, 14],
  [32, 33, 34, 35],
  [33, 25, 17, 9],
  [33, 26, 19, 12],
  [34, 26, 18, 10],
  [34, 27, 20, 13],
  [35, 27, 19, 11],
  [35, 28, 21, 14],
  [22, 15, 8, 1],
  [22, 16, 10, 4],
  [22, 23, 24, 25],
  [23, 16, 9, 2],
  [23, 17, 11, 5],
  [23, 24, 25, 26],
  [24, 17, 10, 3],
  [24, 18, 12, 6],
  [24, 25, 26, 27],
  [25, 17, 9, 1],
  [25, 18, 11, 4],
  [25, 19, 13, 7],
  [25, 26, 27, 28],
  [26, 18, 10, 2],
  [26, 19, 12, 5],
  [27, 19, 11, 3],
  [27, 20, 13, 6],
  [28, 20, 12, 4],
  [28, 21, 14, 7],
  [15, 16, 17, 18],
  [16, 17, 18, 19],
  [17, 18, 19, 20],
  [18, 19, 20, 21],
  [8, 9, 10, 11],
  [9, 10, 11, 12],
  [10, 11, 12, 13],
  [11, 12, 13, 14],
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [4, 5, 6, 7],
];

// Stat tracking variables

let board, turn, winner;

// stores elements on page

const zones = document.querySelectorAll("td div");

// load initial state of game

board = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];

turn = 1;

winner = null;

// player clicking a zone

document.querySelector("table").addEventListener("click", zonePicked);

function zonePicked(e) {
  const idx = parseInt(e.target.id);
  if (board[idx] || winner !== null) return;
  board[idx] = turn;
  turn *= -1;
  // add winner = winnerFunctionHere
  // add render here once function is created
}
