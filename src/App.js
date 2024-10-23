import './App.css';
import { useState, useRef } from 'react';
import Mode from './components/Mode';
import Board from './components/Board';
import PauseModal from './components/PauseModal';
import GameOverModal from './components/GameOverModal';

function App() {

  const gameBoardRef = useRef(null); 
  const [hasGameStarted, setHasGameStarted] = useState(false);
  const [direction, setDirection] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [score, setScore] = useState(0);
  const [isHighScore, setIsHighScore] = useState(false);
  const [strictMode, setStrictMode] = useState(false);
  const [wrapMode, setWrapMode] = useState(false);

  const stopGame = () => {
    setIsPaused(false);
    setIsGameOver(true);
    setHasGameStarted(false); 
    setShowInstructions(false);
    gameBoardRef.current.focus();
  };

  const startGame = () => {
    setDirection(2);
    setIsPaused(false);
    setIsGameOver(false);
    setIsHighScore(false);
    setHasGameStarted(true);
    setShowInstructions(false);
    gameBoardRef.current.focus();
  };

  const restartGame = () => {
    setIsGameOver(false);
    startGame();
  };

  const handleStrictMode = () => {
    setWrapMode(false);
    setStrictMode(true);
    startGame();
  };

  const handleWrapMode = () => {
    setWrapMode(true);
    setStrictMode(false);
    startGame();
  };

  const goHome = () => {
    setIsPaused(false);
    setIsGameOver(false);
    setHasGameStarted(false);
    setShowInstructions(true);
    gameBoardRef.current.focus();
  };

  const isHighFlag = (isHighScore, newScore) => {
    setIsHighScore(isHighScore);
    setScore(newScore);
  }

  const togglePause = () => {
    setIsPaused((prevState) => !prevState);
  };

  const handleKeyPress = (e) => {
    e.preventDefault();
    if (!hasGameStarted) {
      if (e.key === "spacebar" || e.key === " ") {
        setStrictMode(true);
        startGame();
      } 
    } else if (e.key === "spacebar" || e.key === " " || e.key === "p" || e.key === "P") {
      togglePause();
    } else if (!isPaused) {
      let dir = e.key;
      switch (dir) {
        case "ArrowUp": setDirection(1); break;
        case "ArrowRight": setDirection(2); break;
        case "ArrowDown": setDirection(3); break;
        case "ArrowLeft": setDirection(4); break;
        default: break;
      }
    }
  };

  return (
    <div id="app" className="App" onKeyDown={handleKeyPress} ref={gameBoardRef} tabIndex="0">
      {showInstructions && <Mode handleStrictMode={handleStrictMode} handleWrapMode={handleWrapMode} />}
      <Board strictMode={strictMode} wrapMode={wrapMode} direction={direction} showInstructions={showInstructions} isHighFlag={isHighFlag} hasGameStarted={hasGameStarted} isPaused={isPaused} isGameOver={isGameOver} goHome={goHome} stopGame={stopGame}></Board>
      {isGameOver && <GameOverModal score={score} isHighScore={isHighScore} restartGame={restartGame} onGoHome={goHome} />}
      {isPaused && <PauseModal />}
    </div>
  );
}

export default App;