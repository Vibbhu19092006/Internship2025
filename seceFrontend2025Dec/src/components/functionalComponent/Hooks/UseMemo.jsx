import { useState, useMemo } from "react";

const slowFunction = (num) => {
  console.log("Calling slow function...");
  for (let i = 0; i < 200; i++) {} 
  return num * 2;
};

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState(true);

  const styling = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
    padding: "20px",
  };

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <div style={styling}>
      <h2>UseMemo Example</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
      />
      <button onClick={() => setNumber(number + 1)}>+</button>

      <h3>Number is {doubleNumber}</h3>

      <button onClick={() => setTheme(!theme)}>Toggle Theme</button>
    </div>
  );
};

export default UseMemo;
