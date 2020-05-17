import React, { useState } from 'react';

const App = () => {
  const DEFAULT_COUNT = 0;

  const [count, setCount] = useState(DEFAULT_COUNT);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const increment2 = () => setCount((prevCount) => prevCount + 1);
  const decrement2 = () => setCount((prevCount) => prevCount - 1);

  const resetCount = () => setCount(DEFAULT_COUNT);

  const double = () => setCount(count * 2);

  const threeEven = () => {
    setCount((prevCount) => {
      return prevCount % 3 === 0 ? prevCount / 3 : prevCount;
    });
  };

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={resetCount}>Reset</button>
      </div>
      <div>
        <button onClick={double}>x2</button>
      </div>
      <div>
        <button onClick={threeEven}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  );
};

export default App;
