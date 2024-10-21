const Snake = ({ pixel }) => {
    return (
        <div className="snake" style={{ gridRow: pixel.x, gridColumn: pixel.y }}>  </div>
    );
};

export default Snake;