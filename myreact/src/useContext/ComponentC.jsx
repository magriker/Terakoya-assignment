import { useContext } from "react";
import { ComponentD } from "./ComponentD";
import { UserContext } from "./ComponentA";

export const ComponentC = () => {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>ComponentC</h1>
      <h2>Hello again {user}</h2>
      <ComponentD></ComponentD>
    </div>
  );
};
