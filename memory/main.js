const btn = document.querySelector(".startBtn");
const cardsContainer = document.querySelector(".cards-contaner");

btn.addEventListener("click", creatCards);

function creatCards() {
  let firstLine = [];
  let secondLine = [];
  let merge = [];

  for (let i = 1; i <= 5; i++) {
    firstLine.push(i);
    secondLine.push(i);
  }

  merge = [...shaffleArray(firstLine), ...shaffleArray(secondLine)];

  merge.map((m) => {
    const temp = document.createElement("div");
    temp.classList.add("card");
    temp.textContent = m;
    cardsContainer.appendChild(temp);
  });
}

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

let hitcards = [];
let preValue = [];
