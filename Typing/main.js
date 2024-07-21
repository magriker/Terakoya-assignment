const textLists = [
  "Hello World",
  "This is my App",
  "How are you?",
  "Hello World",
  "This is my App",
  "How are you?",
  "Today is sunny",
  "I love JavaScript!",
  "Good morning",
  "I am Japanese",
  "Let it be",
  "Samurai",
  "Typing Game",
  "Information Technology",
  "I want to be a programmer",
  "What day is today?",
  "I want to build a web app",
  "Nice to meet you",
  "Chrome Firefox Edge Safari",
  "machine learning",
  "Brendan Eich",
  "John Resig",
  "React Vue Angular",
  "Netscape Communications",
  "undefined null NaN",
  "Thank you very much",
  "Google Apple Facebook Amazon",
  "ECMAScript",
  "console.log",
  "for while if switch",
  "var let const",
  "Windows Mac Linux iOS Android",
  "programming",
];

let untyped = "";
let typed = "";
let score = 0;
let mistyped = 0;

const typedTex = document.querySelector(".typed");
const untypedTex = document.querySelector(".untyped");
const wrap = document.querySelector(".wrap");
const startBtn = document.querySelector(".start");
const count = document.querySelector(".count");
const typedNumber = document.querySelector(".typedNumber");
const typedWrong = document.querySelector(".typedWrong");

const createText = () => {
  typed = "";
  typedTex.textContent = typed;

  untyped = textLists[Math.floor(Math.random() * textLists.length)];
  untypedTex.textContent = untyped;
};

const keyPress = (e) => {
  if (untyped.substring(0, 1) === e.key) {
    wrap.classList.remove("mistyped");
    score++;
    typedNumber.textContent = score;
    typed += untyped.substring(0, 1);
    untyped = untyped.substring(1);
    typedTex.textContent = typed;
    untypedTex.textContent = untyped;

    if (untyped === "") {
      createText();
    }
  } else {
    mistyped++;
    typedWrong.textContent = mistyped;
    wrap.classList.add("mistyped");
    setTimeout(function () {
      wrap.classList.remove("mistyped");
    }, 100);
  }
};

const rankCheck = (score, mistyped) => {
  // return the score
  // return `${score}文字打てました！`;

  // making valuable for text.
  let text = "";

  if (score < 100) {
    text = `あなたのランクはCランクです。\nBランクまであと${
      100 - score
    }文字です。`;
  } else if (score < 200) {
    text = `あなたのランクはBランクです。\nAランクまであと${
      200 - score
    }文字です。`;
  } else if (score < 300) {
    text = `あなたのランクはAランクです。\nSランクまであと${
      300 - score
    }文字です。`;
  } else if (score >= 300) {
    text = `あなたのランクはSです。\nおめでとうございます！`;
  }

  return `${score}文字打てました！\n${mistyped}文字ミスタイプしました。\n${text}\n【OK】リトライ/【キャンセル】終了`;
};

const gameOver = (id) => {
  clearInterval(id);
  const result = confirm(rankCheck(score, mistyped));
  score = 0;
  mistyped = 0;
  if (result) {
    window.location.reload();
  }
};

const timer = () => {
  let time = count.textContent;

  const id = setInterval(function () {
    time--;
    count.textContent = time;
    if (time <= 0) {
      untypedTex.textContent = "";
      typedTex.textContent = "";
      untypedTex.textContent = "Time Up!!";
      setTimeout(function () {
        gameOver(id);
      }, 100);
    }
  }, 1000);
};

startBtn.addEventListener("click", function () {
  typedNumber.textContent = score;
  // Count down start
  timer();
  // create random text
  createText();

  // hidden start button
  startBtn.style.display = "none";

  document.addEventListener("keypress", keyPress);
});

untypedTex.textContent = "Click the start button";
