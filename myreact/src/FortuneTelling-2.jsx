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

const deleat = () => {};

const FortuneTelling_2 = ({ btName }) => {
  //   const [fortuneNumber, setFortuneNumber] = useState(0);
  //   console.log("test2");

  const [fortuneLabels, setFortuneLabel] = useState([]);

  const handleClick = () => {
    const random = getrandomValue(5);
    const label = FORTUNE_MAP.get(random);
    console.log("labels:", ...fortuneLabels);
    setFortuneLabel([...fortuneLabels, label]);
  };

  return (
    <>
      <button onClick={handleClick}>{btName}</button>
      <ul>
        {fortuneLabels.map((label, index) => (
          <li key={index} style={label === "大吉" ? { color: "red" } : null}>
            {label}&nbsp;&nbsp;
            <button>削除</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FortuneTelling_2;