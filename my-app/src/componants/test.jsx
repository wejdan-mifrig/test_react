import { useState } from "react";

function Test() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter Test</h1>
      <h2>{count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease} style={{ margin: "0 10px" }}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Test;
