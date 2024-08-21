import { useState } from "react";

const getrandomValue = (number) => {
  return Math.floor(Math.random() * number + 1);
};

const checkFortune = (num) => {
  return myMap.get(num);
};

const myMap = new Map([
  [1, "大吉"],
  [2, "吉"],
  [3, "小吉"],
  [4, "凶"],
  [5, "大凶"],
]);

const FortuneTelling = ({ btName }) => {
  const [count, setCount] = useState(0);
  console.log(count);

  const handleClick = () => {
    const random = getrandomValue(5);

    setCount(random);
  };

  return (
    <>
      <button onClick={handleClick}>{btName}</button>
      <p>{checkFortune(count)}</p>
    </>
  );
};

export default FortuneTelling;
