import { FORTUNE_MAP, getrandomValue } from "./FortuneTelling-4";

const FortuneList = ({ fortuneLabels, fortuneTime, setFortuneLabel }) => {
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

export default FortuneList;
