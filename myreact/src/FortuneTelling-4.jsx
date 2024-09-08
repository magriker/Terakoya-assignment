import { useState } from "react";
import FortuneTellingCounter from "./FortuneTellingCounter";
import FortuneList from "./FortuneList";

const dayjs = require("dayjs");

export const getrandomValue = (number) => {
  return Math.floor(Math.random() * number + 1);
};

export const FORTUNE_MAP = new Map([
  [1, "大吉"],
  [2, "吉"],
  [3, "小吉"],
  [4, "凶"],
  [5, "大凶"],
]);

const FortuneTelling_4 = ({ btName }) => {
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

  return (
    <>
      <button onClick={handleClick}>{btName}</button>
      <FortuneTellingCounter count={fortuneLabels}></FortuneTellingCounter>
      <FortuneList
        fortuneLabels={fortuneLabels}
        fortuneTime={fortuneTime}
        setFortuneLabel={setFortuneLabel}
      ></FortuneList>
    </>
  );
};

export default FortuneTelling_4;
