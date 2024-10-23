const Mode = ({ handleStrictMode, handleWrapMode }) => {

    return (
        <div className="mode-button">
            <button type="button" id="strict-mode-btn" onClick={handleStrictMode}>Strict Mode</button>
            <button type="button" id="wrap-mode-btn" onClick={handleWrapMode}>Wrap Mode</button>
        </div>
    )
};

export default Mode;