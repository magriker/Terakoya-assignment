import { useState } from "react";

const dayjs = require("dayjs");

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

const FortuneTelling_2 = ({ btName }) => {
  //   const [fortuneNumber, setFortuneNumber] = useState(0);
  //   console.log("test2");

  const [fortuneLabels, setFortuneLabel] = useState([]);
  const [fortuneTime, setFortuneTime] = useState([]);

  const handleClick = () => {
    const now = dayjs();
    const formatedTime = now.format("YYYY-MM-DD HH:mm:ss:SSS");
    const label = FORTUNE_MAP.get(getrandomValue(5));
    console.log("labels:", ...fortuneLabels);
    console.log("times:", ...formatedTime);

    setFortuneLabel([...fortuneLabels, label]);
    setFortuneTime([...fortuneTime, formatedTime]);
  };

  const deleteLabel = (indexNum) => {
    setFortuneLabel((fortuneLabels) =>
      fortuneLabels.filter((_, index) => index !== indexNum)
    );
  };

  const updateFortune = (index) => {
    const newLabel = FORTUNE_MAP.get(getrandomValue(5));
    const newLabels = [...fortuneLabels].map((nl, i) =>
      i === index ? (nl = newLabel) : nl
    );
    setFortuneLabel(newLabels);
  };

  return (
    <>
      <button onClick={handleClick}>{btName}</button>
      <ul>
        {fortuneLabels.map((label, index) => (
          <li key={index}>
            <span style={label === "大吉" ? { color: "red" } : null}>
              {label}
            </span>
            &nbsp;&nbsp;
            {fortuneTime[index]}
            &nbsp;&nbsp;
            <button onClick={() => updateFortune(index)}>更新</button>
            &nbsp;&nbsp;
            <button onClick={() => deleteLabel(index)}>削除</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FortuneTelling_2;
