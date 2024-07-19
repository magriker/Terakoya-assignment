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

const typedTex = document.querySelector(".typed");
const untypedTex = document.querySelector(".untyped");
const wrap = document.querySelector(".wrap");

const createText = () => {
  typed = "";
  typedTex.textContent = typed;

  untyped = textLists[Math.floor(Math.random() * textLists.length)];
  untypedTex.textContent = untyped;
};

const keyPress = (e) => {
  if (untyped.substring(0, 1) === e.key) {
    wrap.classList.remove("mistyped");
    typed += untyped.substring(0, 1);
    untyped = untyped.substring(1);
    typedTex.textContent = typed;
    untypedTex.textContent = untyped;
    if (untyped === "") {
      createText();
    }
  } else {
    wrap.classList.add("mistyped");
  }
};

const rankCheck = (score) => {};

const gameOver = () => {};

const timer = () => {};

createText();

document.addEventListener("keypress", keyPress);
