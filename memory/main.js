const btn = document.querySelector(".startBtn");
const cardsContainer = document.querySelector(".cards-contaner");

const creatCards = function () {
  let firstLine = [];
  let secondLine = [];

  for (let i = 1; i <= 5; i++) {
    firstLine.push(i);
    secondLine.push(i);
  }

  shaffleArray(firstLine);
  shaffleArray(secondLine);
};

const shaffleArray = function (array) {
  let shuffledArray = [];
  let usedIndexes = [];

  let i = 0;

  while (i < array.length) {
    let randomNumber = Math.floor(Math.random() * array.length);
    if (!usedIndexes.includes(randomNumber)) {
      shuffledArray.push(array[randomNumber]);
      usedIndexes.push(randomNumber);
      i++;
    }
  }

  console.log(shuffledArray);
  return shuffledArray;
};

function creatDom() {}

creatCards();
