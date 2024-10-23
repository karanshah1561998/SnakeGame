const GameOverModal = ({ restartGame, onGoHome, score, isHighScore}) => {

    return (
        //  Game Over Modal
        <div id="gameOverModal" className="modal">
            <div className="modal-content">
                <h2> Game Over </h2>
                {isHighScore ? (
                    <p id="finalScore">Congratulations! New High Score: {score}</p>
                ) : (
                    <p id="finalScore">Your Score: {score}</p>
                )}
                <button type="button" onClick={restartGame}> Restart </button>
                <button style={{marginLeft: "0.5rem"}} type="button" onClick={onGoHome}> Go Home </button>
            </div>
        </div> 
    );
};

export default GameOverModal;