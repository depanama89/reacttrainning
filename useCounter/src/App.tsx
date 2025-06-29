import { useCallback, useState } from "react";

import "./App.css";

interface SetUseCounter {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}
const useCounter = (initialValue: number): [number, SetUseCounter] => {
  const [count, setCount] = useState<number>(initialValue);

  const increment = useCallback(
    () => setCount((prevCount) => prevCount + 1),
    []
  );
  const decrement = useCallback(
    () => setCount((prevCount) => prevCount - 1),
    []
  );
  const reset = useCallback(() => setCount(initialValue), [initialValue]);

  return [count, { increment, decrement, reset }];
};
function App() {
  const [count, { increment, decrement, reset }] = useCounter(0);
  return (
    <div className="App">
      <h1 className="title">Exercice pratique : useCounter</h1>

      <div className="container">
        <h2 className="container_title">compteur : {count}</h2>
        <div className="buttons_container">
          <button onClick={increment} className="container_btn">Incrementer</button>
        <button onClick={decrement} className="container_btn">Decrementer</button>
        <button onClick={reset} className="container_btn">Renitialiser</button>
        </div>
      </div>
    </div>
  );
}

export default App;
