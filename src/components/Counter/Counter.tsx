import { useState } from "react";

type Props = {
  defaultCount: number;
  description: string;
};

export function Counter({ defaultCount, description }: Props) {
  const [counter, setCounter] = useState(defaultCount);
  const [incrementor, setIncrementor] = useState(1);

  return (
    <div>
      {description}
      <label>
        Incrementor:
        <input
          value={incrementor}
          type="number"
          onChange={(e) => setIncrementor(+e.target.value)}
        />
      </label>
      <button
        aria-label="Decrement from Counter"
        onClick={() => setCounter(counter - incrementor)}
      >
        -
      </button>
      <span> Current Count: {counter} </span>
      <button
        aria-label="Increment to Counter"
        onClick={() => setCounter(counter + incrementor)}
      >
        +
      </button>
    </div>
  );
}
