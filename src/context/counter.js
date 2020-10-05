import React from "react";

const CounterContext = React.createContext({
  father: {
    number: 0,
    setNumber: () => {},
  },
  son: {
    number: 0,
    setNumber: () => {},
  },
});

export default CounterContext;
