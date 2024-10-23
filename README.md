# Snake Game

This is a fun and interactive Snake Game built using React. The game challenges users to control a snake to eat food and grow while avoiding collisions with itself or the walls (depending on the mode). The game offers multiple modes, high score tracking, and local storage persistence.

## Live Demo

You can view the live game on Netlify: Snake Game

## Features

1. **Classic Snake Gameplay**
   - Control the snake using the arrow keys to eat food and grow longer.
The game ends when the snake collides with itself or a wall (depending on the mode).

2. **Game Modes**
   - Strict Mode: The game ends when the snake hits the wall.
   - Wrap Mode: The snake wraps around the board when it hits the wall, continuing from the opposite side.

3. **Dynamic Speed**
   - The snake's speed increases as it eats more food and grows longer, making the game progressively more challenging.

4. **Score and High Score Tracking**
   - The player's score is displayed during the game.
   - The high score is saved and persists across sessions using the browser's local storage.

5. **Pause and Resume**
   - The game can be paused and resumed by pressing the spacebar.

6. **Reset High Score**
   - A button allows users to reset their high score to start fresh.

7. **Level-Up Indicator**
   - Players are notified when they level up after consuming enough food.

## How to Use

- Use the Arrow Keys to move the snake in different directions.
- Select Strict Mode to have the game end when hitting a wall, or Wrap Mode to wrap the snake around the board.
- The game will start automatically once a mode is selected.
- Press the spacebar to pause or resume the game.
- The game continues until the snake collides with a wall (in Strict Mode) or itself.

## Installation Instructions

To run the app locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/karanshah1561998/Snake_Game_React
   
2. **Install Dependencies: Navigate to the cloned repository's directory and run:**
   ```bash
   npm install
   
3. **Run the App: After the dependencies are installed, start the app using:**  
   ```bash
   npm start

## Technologies Used
- React: Frontend JavaScript framework for building interactive UIs.
- CSS: For basic styling of the application.

## Future Enhancements

- Add more game modes and difficulty levels.
- Introduce power-ups or bonuses to enhance gameplay.
- Implement a multiplayer version of the game.
- Add sound effects for a more immersive experience.
