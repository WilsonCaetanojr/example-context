import React, { useState } from "react";
import CounterContext from "../context/counter";
import Son from "./son";

const Father = () => {
  const [counter, setCounter] = useState({
    father: 0,
    son: 0,
  });

  const addNumber = () => {
    const copyCounter = { ...counter };
    copyCounter.son++;
    setCounter(copyCounter);
  };
  return (
    <div>
      <button onClick={addNumber}>Father</button>
      <p style={{ backgroundColor: "#93bbe2" }}>
        Number Father: {counter.father}
      </p>

      <CounterContext.Provider value={[counter, setCounter]}>
        <Son />
      </CounterContext.Provider>
    </div>
  );
};

export default Father;
