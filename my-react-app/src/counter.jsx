import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter:{count}</h1>
      <Buttons text="+" action={() => setCount(count + 1)} />
      <Buttons text="-" action={() => setCount(count - 1)} />
      <Buttons text="Reset" action={() => setCount(0)} />
    </>
  );
}

function Buttons({ text, action }) {
  return (
    <>
      <button onClick={action}>{text}</button>
    </>
  );
}

export default Counter;
