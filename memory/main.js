// const btn = document.querySelector(".startBtn");
// const cardsContainer = document.querySelector(".cards-contaner");

// btn.addEventListener("click", creatCards);
// cardsContainer.addEventListener("click", checkCards);

// function creatCards() {
//   let firstLine = [];
//   let secondLine = [];
//   let merge = [];

//   btn.style.display = "none";

//   for (let i = 1; i <= 5; i++) {
//     firstLine.push(i);
//     secondLine.push(i);
//   }

//   merge = [...shaffleArray(firstLine), ...shaffleArray(secondLine)];

//   merge.map((m) => {
//     const temp = document.createElement("div");
//     temp.classList.add("card");
//     temp.textContent = m;
//     cardsContainer.appendChild(temp);
//   });
// }

// const shaffleArray = function (array) {
//   let shuffledArray = [];
//   let usedIndexes = [];
//   let i = 0;

//   while (i < array.length) {
//     let randomNumber = Math.floor(Math.random() * array.length);
//     if (!usedIndexes.includes(randomNumber)) {
//       shuffledArray.push(array[randomNumber]);
//       usedIndexes.push(randomNumber);
//       i++;
//     }
//   }

//   console.log(shuffledArray);
//   return shuffledArray;
// };
// let isClick = false;
// let hitcards = [];
// let correctEl = [];
// let targetEl = [];
// let mistake = [];

// function checkCards(e) {
//   console.log(isClick);
//   if (isClick) {
//     // return e.preventDefault();
//     return false;
//   }
//   checkArray();
//   addNumber(e);

//   if (hitcards.length === 2 && hitcards[0] === hitcards[1]) {
//     console.log("一緒");
//     console.log(targetEl);
//     targetEl.map((e) => correctEl.push(e));
//     targetEl = [];
//     if (correctEl.length === 10) {
//       setTimeout(function () {
//         const clear = confirm("Clear the game!");
//         if (clear) {
//           window.location.reload();
//         }
//       }, 1500);
//     }
//     console.log(correctEl);
//     console.log(targetEl);
//   } else if (hitcards.length === 2 && hitcards[0] !== hitcards[1]) {
//     console.log("違う");
//     isClick = true;

//     setTimeout(function () {
//       targetEl.map((e) => e.classList.remove("cardBack"));
//       targetEl = [];
//       mistake.push(1);
//       isClick = false;
//       if (mistake.length === 3) {
//         const gameOver = confirm("Gameover!!\nClick OK!");
//         if (gameOver) {
//           window.location.reload();
//         }
//         console.log(falsestake);
//         console.log(targetEl);
//       }
//     }, 1500);
//   }
// }
// // if (hitcards.length <= 2) {
// //   hitcards.push(e.target.textContent);
// // }

// // if (hitcards.length >= 3) {
// //   hitcards = [];
// // } else if (hitcards[0] === hitcards[1]) {
// //   console.log(hitcards);
// //   console.log("一緒！");
// // }

// function changeColor(e) {
//   e.target.classList.add("cardBack");
// }

// function checkArray() {
//   if (hitcards.length === 2) {
//     console.log(hitcards);
//     return (hitcards = []);
//   }
// }

// function addNumber(e) {
//   if (hitcards.length <= 1) {
//     hitcards.push(e.target.textContent);
//     changeColor(e);
//     targetEl.push(e.target);
//     console.log(hitcards);
//   }
// }

// function checkMistake(mistake) {
//   if (mistake.length === 3) {
//   }
// }

//////////////////////////Fixed//////////////////////////////////

const MISTAKE_COUNT = 5;
const DURATION = 1500;

const btn = document.querySelector(".startBtn");
const cardsContainer = document.querySelector(".cards-contaner");

btn.addEventListener("click", creatCards);
cardsContainer.addEventListener("click", checkCards);

function creatCards() {
  btn.style.display = "none";

  // let firstLine = [];
  // let secondLine = [];
  // let merge = [];

  // for (let i = 1; i <= 5; i++) {
  //   firstLine.push(i);
  //   secondLine.push(i);
  // }
  // merge = [...shaffleArray(firstLine), ...shaffleArray(secondLine)];

  const f1 = Array(5)
    .fill()
    .map((_, i) => i + 1);
  const merge = [...f1, ...f1].sort(() => Math.random() - 0.5);
  console.log(merge);

  merge.map((m) => {
    const temp = document.createElement("div");
    temp.classList.add("card");
    temp.textContent = m;
    cardsContainer.appendChild(temp);
  });
  return merge;
}

// const shaffleArray = function (array) {
//   let shuffledArray = [];
//   let usedIndexes = [];
//   let i = 0;

//   while (i < array.length) {
//     let randomNumber = Math.floor(Math.random() * array.length);
//     if (!usedIndexes.includes(randomNumber)) {
//       shuffledArray.push(array[randomNumber]);
//       usedIndexes.push(randomNumber);
//       i++;
//     }
//   }

//   console.log(shuffledArray);
//   return shuffledArray;
// };

let isClicked = false;
let hitcards = [];
let correctEl = [];
let targetEl = [];
let mistake = [];

function checkCards(e) {
  console.log(isClicked);
  if (isClicked) {
    return false;
    // return e.preventDefault();
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
      }, DURATION);
    }
    console.log(correctEl);
    console.log(targetEl);
  } else if (hitcards.length === 2 && hitcards[0] !== hitcards[1]) {
    console.log("違う");
    isClicked = true;

    setTimeout(function () {
      targetEl.map((e) => e.classList.remove("cardBack"));
      targetEl = [];
      mistake.push(1);
      isClicked = false;
      if (mistake.length === MISTAKE_COUNT) {
        const gameOver = confirm("Gameover!!\nClick OK!");
        if (gameOver) {
          window.location.reload();
        }
        console.log(mistake);
        console.log(targetEl);
      }
    }, DURATION);
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

// function checkMistake(mistake) {
//   if (mistake.length === MICTAKE_COUNT) {
//   }
// }
