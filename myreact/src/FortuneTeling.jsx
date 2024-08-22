import { useState } from "react";

const getrandomValue = (number) => {
  return Math.floor(Math.random() * number + 1);
};

export const FORTUNE_MAP = new Map([
  [1, "大吉"],
  [2, "吉"],
  [3, "小吉"],
  [4, "凶"],
  [5, "大凶"],
]);

const FortuneTelling = ({ btName }) => {
  const [fortuneNumber, setFortuneNumber] = useState(0);
  console.log("test2");

  const fortuneLabel = FORTUNE_MAP.get(fortuneNumber);
  const handleClick = () => {
    const random = getrandomValue(5);
    setFortuneNumber(random);
    console.log("test");
  };

  return (
    <>
      <button onClick={handleClick}>{btName}</button>
      <p>{fortuneLabel}</p>
    </>
  );
};

export default FortuneTelling;
