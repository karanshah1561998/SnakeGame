const Food = ({ food }) => {
    return (
        <div className="food" style={{ gridRow: food.x, gridColumn: food.y }}>  </div>
    );
};

export default Food;