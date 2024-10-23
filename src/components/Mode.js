const Mode = () => {
    return (
        // Add the buttons for mode selection
        <div className="main-button" id="main-btn">
            <div className="mode-selection">
                <button type="button" id="strict-mode-btn">Strict Mode</button>
                <button type="button" id="wrap-mode-btn">Wrap Mode</button>
            </div>
        </div>
    )
};

export default Mode;