import React, { useState } from "react";
import "./Dicegame.css";

function random(n) {
  // 함수는 1부터 ~n 사이의 임의의 정수를 반환 -> 주사위를 던진 결과를 생성
  return Math.ceil(Math.random() * n);
}
//math.ceil() 함수는 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 Integer로 반환한다.

function Dicegame() {
  const [myScore, setMyScore] = useState(0); //주사위 던져서 더한 값
  const [youScore, setYouScore] = useState(0);
  const [myTotalScore, setMyTotalScore] = useState(0); //총합
  const [youTotalScore, setYouTotalScore] = useState(0);
  const [currentRoll, setCurrentRoll] = useState(0); //주사위를 던져서 나온 값
  const [currentPlayer, setCurrentPlayer] = useState(1); //현재 턴인 플레이어

  const handleRollClick = () => {
    //주사위 던지기 버튼
    const nowNum = random(6);
    setCurrentRoll(nowNum);

    //주사위를 던져서 나온 값을 현재 점수에 더함
    if (nowNum >= 2) {
      if (currentPlayer === 1) {
        setMyScore(myScore + nowNum);
      } else {
        setYouScore(youScore + nowNum);
      }
    } else if (nowNum === 1) {
      if (currentPlayer === 1) {
        setMyScore(0);
      } else {
        setYouScore(0);
      }
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    } else {
      //0인 경우는 없지만 안전하게 처리 해야한다.
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1); //턴 넘기기
    }
  };

  if (myTotalScore >= 50) {
    alert("player1 이겼당");
  } else if (youTotalScore >= 50) {
    alert("player2 이겼당");
  }

  const handleHoldClick = () => {
    //초기화
    if (currentPlayer === 1) {
      setMyTotalScore(myTotalScore + myScore);
      setMyScore(0);
    } else {
      setYouTotalScore(youTotalScore + youScore);
      setYouScore(0);
    }
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  const handleClearClick = () => {
    setMyScore(0);
    setYouScore(0);
    setMyTotalScore(0);
    setYouTotalScore(0);
    setCurrentPlayer(1);
  };

  return (
    <div className="wrapper">
      {/* 플레이어 1 */}
      <section
        className={`player player-0 ${
          currentPlayer === 1 ? "player-active" : ""
        }`}
      >
        <h2 name="player1" id="name-0">
          Player 1
        </h2>
        <p className="score" id="score-0">
          {myTotalScore}
        </p>
        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score" id="current--0">
            {currentPlayer === 1 ? myScore : 0}
          </p>
        </div>
      </section>

      {/* 플레이어 2 */}
      <section
        className={`player player-1 ${
          currentPlayer === 2 ? "player-active" : ""
        }`}
      >
        <h2 name="player2" id="name-1">
          Player 2
        </h2>
        <p className="score" id="score-1">
          {youTotalScore}
        </p>
        <div className="current">
          <p className="current-label">Current</p>
          <p className="current-score" id="current-1">
            {currentPlayer === 2 ? youScore : 0}
          </p>
        </div>
      </section>

      <div id="board">
        <button className="btn btn-new" onClick={handleClearClick}>
          🔄 New game
        </button>
        <div className="btn roll-score">주사위 : {currentRoll}</div>
        <button className="btn btn-roll" onClick={handleRollClick}>
          🎲 Roll dice
        </button>
        <button className="btn btn-hold" onClick={handleHoldClick}>
          📥 Hold
        </button>
      </div>
    </div>
  );
}

export default Dicegame;
