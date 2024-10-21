import "./style.css";
import { useState, useEffect } from "react";
import Food from "./Food";
import Snake from "./Snake";
import Instruction from "./Instruction";

const Board = ({direction, hasGameStarted, stopGame}) => {

    const gridSize = 20;
    const [currScore, setCurrScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
    let [gameSpeed, setGameSpeed] = useState(400);

    const generateFood = () => {
        let x = Math.floor(Math.random() * 20) + 1;
        let y = Math.floor(Math.random() * 20) + 1;
        return {x, y};
    }

    const [food, setFood] = useState(generateFood());

    useEffect(() => {
        const interval = setInterval(move, gameSpeed);
        return () => clearInterval(interval);
    });

    const move = () => {
        if (!hasGameStarted) return;
        let snakeHead = { ...snake[0] };
        switch (direction) {
            case 1: snakeHead.x--; break;
            case 2: snakeHead.y++; break;
            case 3: snakeHead.x++; break;
            case 4: snakeHead.y--; break;
            default: break;
        }
        if (checkCollision(snakeHead)) {
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
        setCurrScore(newSnake.length - 1);
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

    const increaseSpeed = () => {
        if (gameSpeed > 150) gameSpeed -= 20;
        else if (gameSpeed > 100) gameSpeed -= 3;
        else if (gameSpeed > 50) gameSpeed -= 2;
        else gameSpeed -= 1;
        setGameSpeed(gameSpeed);
    };

    const resetGame = () => {
        setHighScore(Math.max(highScore, currScore));
        setCurrScore(0);
        setGameSpeed(400);
        setFood(generateFood());
        setSnake([{ x: 10, y: 10 }]);
        stopGame();
    };
    
    return (
        <>
            <div className="scores">
                <div id="score"> {currScore.toString().padStart(3, "0")} </div>
                <div id="highscore"> {highScore.toString().padStart(3, "0")} </div>
            </div>
            <div className="game-border-1">
                <div className="game-border-2">
                    <div className="game-border-3">
                        <div id="game-board">
                            {!hasGameStarted ? (
                                <Instruction /> 
                            ) : (
                                <>
                                    {snake.map((pixel, index) => (
                                        <Snake key = { index } pixel = { pixel } />
                                    ))}
                                    <Food food = { food } />
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