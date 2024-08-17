import logo from "./logo.svg";
import "./App.css";

const test = "taro";
const isTaro = true;

function App({ test }) {
  return (
    <>
      {/* <div className="test">
        Hello App {test === "taro" ? "そうだよ" : "ちがうよ"}{" "}
      </div>
      <div>{isTaro && "aaa"}</div> */}

      <button>{test}</button>
    </>
  );
}

export default App;
