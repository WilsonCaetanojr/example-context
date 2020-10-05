import React, { useContext } from "react";
import CounterContext from "../context/counter";

const Father = () => {
  const [counter, setCounter] = useContext(CounterContext);

  const addFather = () => {
    const copyCounter = { ...counter };
    copyCounter.father++;
    setCounter(copyCounter);
    console.log(setCounter);
  };
  return (
    <div style={{ marginTop: 70 }}>
      <button onClick={addFather}>Son</button>
      <p style={{ backgroundColor: "#e29393" }}>Number Son: {counter.son}</p>
    </div>
  );
};

export default Father;
