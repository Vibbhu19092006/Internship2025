import { useCallback, useEffect, useState } from "react";

const UseCallback = () => {
  const [number, setNumber] = useState(0);
  const [theme, toggleTheme] = useState(false);

  const styling = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
    padding: "20px",
  };

  
  const numList = useCallback(
    (mul) => {
      return [
        number * 2 * mul,
        number * 3 * mul,
        number * 4 * mul,
      ];
    },
    [number]
  );

  useEffect(() => {
    console.log("numList updated");
  }, [numList]);

  return (
    <div style={styling}>
      <button onClick={() => toggleTheme(!theme)}>Toggle Theme</button>

      <p>UseCallback hook</p>

      <button onClick={() => setNumber(number - 1)}>-</button>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <button onClick={() => setNumber(number + 1)}>+</button>

      <p>The number is {number}</p>

      <p>The multiplication of the number as follows:</p>

      <ol>
        <li>Mul of 2 is {number * 2}</li>
        <li>Mul of 3 is {number * 3}</li>
        <li>Mul of 4 is {number * 4}</li>
      </ol>

      {numList(1).map((num, ind) => (
        <h6 key={ind}>
          The multiplied number is {num}
        </h6>
      ))}
    </div>
  );
};

export default UseCallback;
