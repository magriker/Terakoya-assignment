import { useState } from "react";

const StateBasic = ({ init }) => {
  const [count, setCount] = useState(init);
  console.log(`counst is ${count}`);

  const handleClick = () => setCount(count + 1);
  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回、クリックされました</p>
    </>
  );
};

export default StateBasic;
