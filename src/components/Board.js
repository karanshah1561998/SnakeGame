import "./style.css";
import { useState, useEffect } from "react";
import Food from "./Food";
import Snake from "./Snake";
import Instruction from "./Instruction";
import Scores from "./Scores";

const Board = ({ direction, showInstructions, isHighFlag, hasGameStarted, isPaused, isGameOver, stopGame }) => {

    const gridSize = 20;
    let flag = false;
    const [currScore, setCurrScore] = useState(0);
    const [highScore, setHighScore] = useState(() => {
        return localStorage.getItem("highScore") ? parseInt(localStorage.getItem("highScore"), 10) : 0;
    });
    const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
    let [gameSpeed, setGameSpeed] = useState(400);
    const [levelUpMessage, setLevelUpMessage] = useState(false);

    const generateFood = () => {
        let foodPosition = {
            x: Math.floor(Math.random() * gridSize) + 1,
            y: Math.floor(Math.random() * gridSize) + 1
        };
        while (snake.some(segment => segment.x === foodPosition.x && segment.y === foodPosition.y)) {
            foodPosition = {
                x: Math.floor(Math.random() * gridSize) + 1,
                y: Math.floor(Math.random() * gridSize) + 1
            };
        }
        return foodPosition;
    };
    

    const [food, setFood] = useState(generateFood());

    useEffect(() => {
        if (hasGameStarted && !isPaused) {
            const interval = setInterval(move, gameSpeed);
            return () => clearInterval(interval);
        }
    });

    const showLevelUpMessage = () => {
        setLevelUpMessage(true);
        setTimeout(() => {
            setLevelUpMessage(false);
        }, 1000);
    };

    // const wrapSnakePosition = (head) => {
    //     if (head.x < 1) head.x = gridSize;
    //     if (head.x > gridSize) head.x = 1;
    //     if (head.y < 1) head.y = gridSize;
    //     if (head.y > gridSize) head.y = 1;
    //     return head;
    // };

    const move = () => {
        let snakeHead = { ...snake[0] };
        switch (direction) {
            case 1: snakeHead.x--; break;
            case 2: snakeHead.y++; break;
            case 3: snakeHead.x++; break;
            case 4: snakeHead.y--; break;
            default: break;
        }
        if (checkCollision(snakeHead)) {
            flag = true;
            resetGame();
            return;
        }
        let newSnake = [...snake];
        newSnake.unshift(snakeHead);
        if (snakeHead.x === food.x && snakeHead.y === food.y) {
            setFood(generateFood());
            increaseSpeed();
        } else {
            newSnake.pop();
        }
        setCurrScore(newSnake.length-1);
        if ((newSnake.length) % 5 === 0) {
            showLevelUpMessage();
        }
        setSnake(newSnake);
    };

    const checkCollision = (snakeHead) => {
        if (snakeHead.x < 1 || snakeHead.y < 1 || snakeHead.x > gridSize || snakeHead.y > gridSize) {
            return true;
        }
        for (let i = 1; i < snake.length; i++) {
            if (snakeHead.x === snake[i].x && snakeHead.y === snake[i].y) {
                return true;
            }
        }
        return false;
    };

    const resetHighScore = () => {
        setHighScore(0);
        localStorage.removeItem("highScore");
    }

    const updateScore = (newScore) => {
        setCurrScore(newScore);
        const isHighScore = newScore > highScore;
        isHighFlag(isHighScore, newScore);
        if (isHighScore && flag) {
            setHighScore(newScore);
            localStorage.setItem("highScore", newScore);
        }
    };

    const increaseSpeed = () => {
        if (gameSpeed > 150) gameSpeed -= 20;
        else if (gameSpeed > 100) gameSpeed -= 3;
        else if (gameSpeed > 50) gameSpeed -= 2;
        else gameSpeed -= 1;
        setGameSpeed(gameSpeed);
    };

    const resetGame = () => {
        updateScore(currScore);
        setCurrScore(0);
        setFood(generateFood());
        setGameSpeed(400);
        setSnake([{ x: 10, y: 10 }]);
        stopGame();
    };
    
    return (
        <>
            <Scores score={currScore} highScore={highScore} />
            <div className="game-border-1">
                <div className="game-border-2">
                    <div className="game-border-3">
                        <div id="game-board">
                            {!hasGameStarted  && showInstructions ? (
                                <>
                                    <Instruction />
                                    <div className="main-button" id="main-btn">
                                        <div className="mode-selection">
                                            <button type="button" id="reset-high-score-btn" onClick={resetHighScore}>Reset High Score</button>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {snake.map((pixel, index) => (
                                        <Snake key = { index } pixel = { pixel } />
                                    ))}
                                    {!isGameOver && <Food food = { food } /> }
                                    {levelUpMessage && <div id="levelUpMessage"> Level Up! </div>}
                                </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
};

export default Board;