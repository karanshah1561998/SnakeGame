# Snake Game

This is an interactive **Snake Game** built using **React**. The player controls a snake, which grows longer as it eats food, and the goal is to keep the snake alive while growing it as much as possible. The game offers two modes: **Strict Mode** and **Wrap Mode**. High scores are tracked and persisted using local storage, and the game can be paused and resumed.

## Live Demo

You can view the live game on Netlify: <a href="https://snakegameks.netlify.app/" target="_blank">Snake Game</a>

## Features

1. **Classic Snake Gameplay**
   - Control the snake using the arrow keys to eat food and grow longer.
   - The game ends when the snake collides with itself or a wall (in Strict Mode).
   - The game wraps around the screen in Wrap Mode when the snake hits the boundaries.

2. **Game Modes**
   - **Strict Mode:** The game ends when the snake hits the wall.
   - **Wrap Mode:** The snake wraps around the board when it hits the wall, continuing from the opposite side.

3. **Dynamic Speed**
   - The snake's speed increases as it grows, making the game progressively more challenging.

4. **Score and High Score Tracking**
   - The player's score increases as the snake eats food.
   - The high score is saved in **localStorage** and persists even after the game is refreshed.
   - Players can reset the high score by clicking the **Reset High Score** button.

5. **Pause and Resume**
   - The game can be paused and resumed by pressing **spacebar**.

6. **Game Over Modal**
   - When the game ends, a modal shows the player's score and indicates if a new high score was achieved.
   - Players can choose to **Restart** the game or **Go Home**.

7. **Level-Up Indicator**
   - Players are notified when they **level up** after consuming enough food.

## How to Play

- Use the **Arrow Keys** to control the snake’s movement in the four directions.
- Choose between **Strict Mode** and **Wrap Mode** at the start of the game.
- **Strict Mode** ends when the snake collides with a wall.
- **Wrap Mode** allows the snake to wrap around the screen when it hits the boundaries.
- Press **spacebar** to pause or resume the game.

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
- Add sound effects for a more immersive experience.
