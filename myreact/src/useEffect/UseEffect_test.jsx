const { useEffect } = require("react");
const { useState } = require("react");

const UseEffect_test = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>UseEffect Test</h1>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Child></Child>}
    </div>
  );
};

const Child = () => {
  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      console.log("hello-" + i);
      i++;
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("I am leaving Dom");
    };
  }, []);

  return <h2>Child</h2>;
};

export default UseEffect_test;
