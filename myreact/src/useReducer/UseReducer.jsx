import { useReducer } from "react";

const UseReducer_test = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "increment":
          return { count: state.count + 1 };
        case "decrement":
          return { count: state.count - 1 };
        default:
          return state;
      }
    },
    {
      count: 0,
    }
  );

  return (
    <div>
      <div>count:{state.count}</div>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

export default UseReducer_test;
