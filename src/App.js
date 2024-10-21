import './App.css';
import { useState } from 'react';
import Board from './components/Board';

function App() {

  const [hasGameStarted, setHasGameStarted] = useState(false);
  const [direction, setDirection] = useState(2);

  const stopGame = () => {
    setHasGameStarted(false);
  };

  const startGame = () => {
    setDirection(2);
    setHasGameStarted(true);
  };

  const handleKeyPress = (e) => {
    e.preventDefault();
    if (!hasGameStarted) {
      if (e.key === "spacebar" || e.key === " ") {
        startGame();
      } 
    } else {
      let dir = e.key;
      switch (dir) {
        case "ArrowUp": setDirection(1); break; // 1
        case "ArrowRight": setDirection(2); break; // 2
        case "ArrowDown": setDirection(3); break; // 3
        case "ArrowLeft": setDirection(4); break; // 4
        default: break;
      }
    }
  };

  return (
    <div id="app" className="App" onKeyDown={handleKeyPress} tabIndex="0">
      <Board direction={direction} hasGameStarted={hasGameStarted} stopGame={stopGame}></Board>
    </div>
  );
}

export default App;