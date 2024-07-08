import { useState } from "react"

function Clicker() {

    const [count,setCount] = useState(0);

    const increment = () =>
    {
        setCount(count + 1);
    }
    const decrement = () => {
      setCount(count - 1);
    };

    const reset = () => {
      setCount(0);
    };

  return (
    <>
      <div className="counter-container">
        <div className="count-display">{count}</div>
        <div className="button-contain">
          <button className="counter-button" onClick={decrement}>
            Decrement
          </button>
          <button className="counter-button" onClick={reset}>
            Reset
          </button>
          <button className="counter-button" onClick={increment}>
            Increment
          </button>
        </div>
      </div>
    </>
  );
}

export default Clicker