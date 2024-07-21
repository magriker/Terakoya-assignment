const fortunBtn = document.querySelector(".fortuneBtn");
const result = document.querySelector(".result");

const getrandomValue = (number) => {
  return Math.floor(Math.random() * number + 1);
};

const getOmikuji = () => {
  const random = getrandomValue(5);

  if (random === 1) {
    return (result.textContent = `大吉`);
  } else if (random === 2) {
    return (result.textContent = `吉`);
  } else if (random === 3) {
    return (result.textContent = `小吉`);
  } else if (random === 4) {
    return (result.textContent = `凶`);
  } else if (random === 5) {
    return (result.textContent = `大凶`);
  }
};

const getOmikuji2 = () => {
  const random = getrandomValue(5);

  switch (random) {
    case 1:
      result.textContent = `大吉`;
      break;
    case 2:
      result.textContent = `吉`;
      break;
    case 3:
      result.textContent = `小吉`;
      break;
    case 4:
      result.textContent = `凶`;
      break;
    case 5:
      result.textContent = `大凶`;
      break;
  }
};

const printBest = function () {
  const outcome = getOmikuji();
  console.log(outcome);
  if (outcome === "大吉") {
    return (result.textContent = `大吉`);
  } else {
    printBest();
  }
};

fortunBtn.addEventListener("click", printBest);
