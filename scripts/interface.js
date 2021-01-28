document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

let players = document.querySelectorAll(".btn");
players.forEach((player) => {
  player.addEventListener("click", () => {
    gameOver = false;
    players.forEach((p) => {
      p.style = "display: none";
    });

    player.id == "com" ? (com = true) : false;
  });
});

let rst = document.getElementById("restart");
rst.addEventListener("click", restart);

function handleClick(event) {
  let square = event.target;
  let position = square.id;
  console.log(square.innerHTML);
  if (board[position] != "") {
    return;
  }
  handleMove(position);
  updateSquares();

  if (com) {
    let comPosition = Math.floor(Math.random() * 9);
    var empty = 0;
    for (let i of board) {
      if (i === "") {
        empty++;
      }
    }

    while ((board[comPosition] != "") & (empty > 1)) {
      comPosition = Math.floor(Math.random() * 9);
    }
    handleMove(comPosition);
    updateSquares();
  }
}

function updateSquares() {
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    let position = square.id;

    let symbol = board[position];
    if (symbol != "") {
      square.innerHTML = `<div class="${symbol}"></div>`;
    }
  });
}

function restart() {
  board = ["", "", "", "", "", "", "", "", ""];
  playerTime = 0;
  gameOver = true;
  com = false;
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.innerHTML = "";
  });

  players.forEach((player) => {
    player.style.display = "inline-block";
  });
}
