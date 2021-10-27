import { useEffect, useState } from "react";

type Props = {
  defaultCount: number;
  description: string;
};

export function Counter({ defaultCount, description }: Props) {
  const [counter, setCounter] = useState(defaultCount);
  const [incrementor, setIncrementor] = useState(1);
  const [bigEnought, setBigEnought] = useState(defaultCount >= 15);

  useEffect(() => {
    let isMount = true;

    if (counter >= 15) {
      setTimeout(() => {
        if (isMount) setBigEnought(true), 200;
      });
    }

    return function cleanup() {
      isMount = false;
    };
  }, [counter]);

  return (
    <div>
      {description} <br />
      <label aria-label="Incrementor value">
        Incrementor:
        <input
          aria-label="Incrementor input"
          name="Incrementor input"
          value={incrementor}
          type="number"
          onChange={(e) => setIncrementor(+e.target.value || 1)}
        />
      </label>
      <br />
      <button
        aria-label="Decrement from Counter"
        onClick={() => setCounter(counter - incrementor)}
      >
        -
      </button>
      <span> Current Count: {counter} </span>
      <button
        aria-label="Increment to Counter"
        onClick={() => setTimeout(() => setCounter(counter + incrementor), 200)}
      >
        +
      </button>
      {bigEnought ? null : <p> I am too small</p>}
    </div>
  );
}
