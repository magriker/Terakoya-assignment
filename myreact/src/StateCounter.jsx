const StateCounter = ({ step, onUpdate }) => {
  const handleClick = () => onUpdate(step);

  return (
    <button onClick={handleClick}>
      <span>{step}</span>
    </button>
  );
};

export default StateCounter;
