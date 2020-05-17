import React, { useState } from 'react';

const App = props => {
  const initialState = props;

  const [name, setName] = useState(initialState.name);
  const [price, setPrice] = useState(initialState.price);

  const reset = () => {
    setName(initialState.name);
    setPrice(initialState.price);
  }

  return (
    <>
      <p>現在の{name}は{price}円です。</p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={reset}>Reset</button>
      <input type="text" onChange={e => setName(e.target.value)} value={name} />
    </>
  );
};

App.defaultProps = {
  name: '',
  price: 1000,
};

export default App;
