import { useState } from "react";
import "./styles.css";

export default function App() {
  const templateBoard = [null, null, null, null, null, null, null, null, null];
  const [val, setVal] = useState("x");
  const [board, setBoard] = useState([...templateBoard]);
  const checkWinner = (board) => {
    const winArr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < winArr.length; i++) {
      const [a, b, c] = winArr[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        if (board[a] === "x") {
          localStorage.setItem(
            "player1",
            localStorage.getItem("player1")
              ? Number(localStorage.getItem("player1")) + 1
              : 1
          );
        }
        if (board[a] === "o") {
          localStorage.setItem(
            "player2",
            localStorage.getItem("player2")
              ? Number(localStorage.getItem("player2")) + 1
              : 1
          );
        }
        return true;
      }
    }
    let tieFlag = 0;
    for (let j = 0; j < board.length; j++) {
      if (board[j] != null) tieFlag++;
    }
    if (tieFlag === 9) {
      localStorage.setItem(
        "tie",
        localStorage.getItem("tie")
          ? Number(localStorage.getItem("tie")) + 1
          : 1
      );
      return true;
    }
    return false;
  };
  const checkBoard = (id) => {
    console.log("masuk");
    let tempBoard = [...board];
    if (tempBoard[id]) {
      return;
    }
    tempBoard[id] = val;
    const ifWin = checkWinner(tempBoard);
    if (ifWin) {
      tempBoard = [...templateBoard];
    }
    setBoard(tempBoard);
    setVal(val === "x" ? "o" : "x");
  };
  return (
    <div style={{ width: "500px", padding: "20px" }}>
      <div className="App">
        <button
          className="btn-board border-right border-bottom"
          onClick={() => {
            checkBoard(0);
          }}
        >
          {board[0] === "x" ? <img alt="cross" src="/close.png" /> : <></>}
          {board[0] === "o" ? <img alt="circle" src="/rec.png" /> : <></>}
        </button>
        <button
          className="btn-board border-right border-bottom"
          onClick={() => {
            checkBoard(1);
          }}
        >
          {board[1] === "x" ? <img alt="cross" src="/close.png" /> : <></>}
          {board[1] === "o" ? <img alt="circle" src="/rec.png" /> : <></>}
        </button>
        <button
          className="btn-board border-bottom"
          onClick={() => {
            checkBoard(2);
          }}
        >
          {board[2] === "x" ? <img alt="cross" src="/close.png" /> : <></>}
          {board[2] === "o" ? <img alt="circle" src="/rec.png" /> : <></>}
        </button>
        <button
          className="btn-board border-bottom border-right"
          onClick={() => {
            checkBoard(3);
          }}
        >
          {board[3] === "x" ? <img alt="cross" src="/close.png" /> : <></>}
          {board[3] === "o" ? <img alt="circle" src="/rec.png" /> : <></>}
        </button>
        <button
          className="btn-board border-bottom border-right"
          onClick={() => {
            checkBoard(4);
          }}
        >
          {board[4] === "x" ? <img alt="cross" src="/close.png" /> : <></>}
          {board[4] === "o" ? <img alt="circle" src="/rec.png" /> : <></>}
        </button>
        <button
          className="btn-board border-bottom"
          onClick={() => {
            checkBoard(5);
          }}
        >
          {board[5] === "x" ? <img alt="cross" src="/close.png" /> : <></>}
          {board[5] === "o" ? <img alt="circle" src="/rec.png" /> : <></>}
        </button>
        <button
          className="btn-board border-right"
          onClick={() => {
            checkBoard(6);
          }}
        >
          {board[6] === "x" ? <img alt="cross" src="/close.png" /> : <></>}
          {board[6] === "o" ? <img alt="circle" src="/rec.png" /> : <></>}
        </button>
        <button
          className="btn-board border-right"
          onClick={() => {
            checkBoard(7);
          }}
        >
          {board[7] === "x" ? <img alt="cross" src="/close.png" /> : <></>}
          {board[7] === "o" ? <img alt="circle" src="/rec.png" /> : <></>}
        </button>
        <button
          className="btn-board"
          onClick={() => {
            checkBoard(8);
          }}
        >
          {board[8] === "x" ? <img alt="cross" src="/close.png" /> : <></>}
          {board[8] === "o" ? <img alt="circle" src="/rec.png" /> : <></>}
        </button>
      </div>
      <div style={{ padding: "30px" }}>
        <div className="App">
          <div className="score-board">PLAYER 1 (X)</div>
          <div className="score-board">TIE</div>
          <div className="score-board">PLAYER 2 (O)</div>
          <div className="score-board">
            {localStorage.getItem("player1")
              ? localStorage.getItem("player1")
              : 0}
          </div>
          <div className="score-board">
            {localStorage.getItem("tie") ? localStorage.getItem("tie") : 0}
          </div>
          <div className="score-board">
            {localStorage.getItem("player2")
              ? localStorage.getItem("player2")
              : 0}
          </div>
        </div>
      </div>
    </div>
  );
}
