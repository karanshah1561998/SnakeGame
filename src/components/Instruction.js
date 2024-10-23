const Instruction = () => {
    return (
        <div style={{ display:"flex", flexDirection: "column", width: "400px", height: "400px", alignItems: "center", justifyContent: "center" }}>
            <img src={require("../snake-game-ai-gen.png")} alt="snake-logo" id="logo" />
            <h2 id="instruction-text"> Press spacebar to start the game in Strict Mode <br /> Developed By: Karan Shah </h2>
        </div>
    );
};

export default Instruction;