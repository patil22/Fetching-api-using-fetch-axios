import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");

  const handleNumberClick = (number) => {
    setInput((prevInput) => prevInput + number);
  };

  const handleOperatorClick = (operator) => {
    if (input !== "") {
      setInput((prevInput) => prevInput + " " + operator + " ");
    }
  };

  const calculateResult = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult);
      setInput("");
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult(0);
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <input type="text" value={input} readOnly />
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleNumberClick("7")}>7</button>
          <button onClick={() => handleNumberClick("8")}>8</button>
          <button onClick={() => handleNumberClick("9")}>9</button>
          <button onClick={() => handleOperatorClick("+")}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick("4")}>4</button>
          <button onClick={() => handleNumberClick("5")}>5</button>
          <button onClick={() => handleNumberClick("6")}>6</button>
          <button onClick={() => handleOperatorClick("-")}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick("1")}>1</button>
          <button onClick={() => handleNumberClick("2")}>2</button>
          <button onClick={() => handleNumberClick("3")}>3</button>
          <button onClick={() => handleOperatorClick("*")}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick("0")}>0</button>
          <button onClick={() => handleOperatorClick(".")}>.</button>
          <button onClick={clearInput}>C</button>
          <button onClick={() => handleOperatorClick("/")}>/</button>
        </div>
        <div className="row">
          <button onClick={calculateResult}>=</button>
        </div>
      </div>
      <div className="result">Result: {result}</div>
    </div>
  );
};

export default Calculator;
