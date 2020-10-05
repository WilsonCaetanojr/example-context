import React from "react";
import ReactDOM from "react-dom";
import Father from "./components/father";

const App = () => {
  return <Father></Father>;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
