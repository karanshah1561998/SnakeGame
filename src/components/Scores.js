const Scores = ({ score, highScore }) => {

    return (
        <div className="scores">
            <div id="scoreSection">
                <span className="label">Score: </span>
                <span id="score">{score.toString().padStart(3, "0")}</span>
            </div>
            <div id="highScoreSection">
                <span className="label">HighScore: </span>
                <span id="highScore">{highScore.toString().padStart(3, "0")}</span>
            </div>
        </div>
    )
};

export default Scores;