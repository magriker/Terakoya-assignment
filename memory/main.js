const btn = document.querySelector(".startBtn");
const cardsContainer = document.querySelector(".cards-contaner");

btn.addEventListener("click", creatCards);
cardsContainer.addEventListener("click", checkCards);

function creatCards() {
  let firstLine = [];
  let secondLine = [];
  let merge = [];

  btn.style.display = "none";

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
let falseNumber = 0;
let hitcards = [];
let correctEl = [];
let targetEl = [];
let mistake = [];

function checkCards(e) {
  console.log(falseNumber);
  if (falseNumber) {
    return e.preventDefault();
  }
  checkArray();
  addNumber(e);

  if (hitcards.length === 2 && hitcards[0] === hitcards[1]) {
    console.log("一緒");
    console.log(targetEl);
    targetEl.map((e) => correctEl.push(e));
    targetEl = [];
    if (correctEl.length === 10) {
      setTimeout(function () {
        const clear = confirm("Clear the game!");
        if (clear) {
          window.location.reload();
        }
      }, 1500);
    }
    console.log(correctEl);
    console.log(targetEl);
  } else if (hitcards.length === 2 && hitcards[0] !== hitcards[1]) {
    console.log("違う");
    falseNumber = 1;

    setTimeout(function () {
      targetEl.map((e) => e.classList.remove("cardBack"));
      targetEl = [];
      mistake.push(1);
      falseNumber = 0;
      if (mistake.length === 3) {
        const gameOver = confirm("Gameover!!\nClick OK!");
        if (gameOver) {
          window.location.reload();
        }
        console.log(mistake);
        console.log(targetEl);
      }
    }, 1500);
  }
  // if (hitcards.length <= 2) {
  //   hitcards.push(e.target.textContent);
  // }

  // if (hitcards.length >= 3) {
  //   hitcards = [];
  // } else if (hitcards[0] === hitcards[1]) {
  //   console.log(hitcards);
  //   console.log("一緒！");
  // }
}

function changeColor(e) {
  e.target.classList.add("cardBack");
}

function checkArray() {
  if (hitcards.length === 2) {
    console.log(hitcards);
    return (hitcards = []);
  }
}

function addNumber(e) {
  if (hitcards.length <= 1) {
    hitcards.push(e.target.textContent);
    changeColor(e);
    targetEl.push(e.target);
    console.log(hitcards);
  }
}

function checkMistake(mistake) {
  if (mistake.length === 3) {
  }
}
