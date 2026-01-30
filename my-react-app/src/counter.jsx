import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Counter:{count}</h1>
      <Buttons text="+" action={increase} />
      <Buttons text="-" action={decrease} />
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
