//  Iniciar minhas variáveis

let board = ["", "", "", "", "", "", "", "", ""];
let playerTime = 0;
let symbols = ["o", "x"];
let gameOver = true;
let com = false;

const winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function playerTwo(comPosition) {
  board[comPosition] = symbols[playerTime];

  gameOver = isWin();
}

function handleMove(position) {
  if (gameOver) {
    return;
  }
  if (board[position] == "") {
    board[position] = symbols[playerTime];

    gameOver = isDrawn();

    gameOver = isWin();

    playerTime = playerTime == 1 ? 0 : 1;
  }
  return gameOver;
}

function isWin() {
  for (let victory in winStates) {
    let sequence = winStates[victory];
    let pos1 = sequence[0];
    let pos2 = sequence[1];
    let pos3 = sequence[2];

    if (
      board[pos1] === board[pos2] &&
      board[pos3] === board[pos1] &&
      board[pos3] != ""
    ) {
      setTimeout(() => {
        if (com) {
          alert(`Acabou o Jogo Vitória do  ${playerTime == 0 ? "COM" : "J1"}`);
        } else {
          alert(`Acabou o Jogo Vitória do J${playerTime == 0 ? "2" : "1"}`);
        }
      }, 10);
      return true;
    }
  }
}

function isDrawn() {
  setTimeout(() => {
    if ((board.includes("") == false) & !gameOver) {
      alert(`DRAWN GAME`);
    }
  }, 11);
  return true;
}
