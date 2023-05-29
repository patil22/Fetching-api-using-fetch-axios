// import React from 'react'

// const Democalculator = () => {
//     const dispalynum = (num)=>{
// return(<h1>{num}</h1>)
//     }
//   return (
//    <>
// <h1>calculator</h1>

// <div>

//      <button onClick={() => dispalynum('1')}>1</button>

// </div>
//    </>
//   )
// }

// export default Democalculator

import React, { useState } from "react";

const Democalculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const dispalynum = (num) => {
    //    alert(num)
    // setInput(num);
    setInput((prevInput) => prevInput + num);
  };    
  const operation = (op) => {
    if (input !== "") {
      setInput((prevInput) => prevInput + " " + op + " ");
    }
  };
  const output = () => {
    const res = eval(input);
    setResult(res);
  };
  const erase = () => {
    setInput("");
    setResult(0);
  };
  return (
    <>
      <h1>calculator</h1>
      <input type="text" value={input}></input>
      <br></br>
      <b>{result}</b>
      <br></br>
      <br></br>
      <div>
        <button onClick={() => dispalynum("1")}>1</button>
        <button onClick={() => dispalynum("2")}>2</button>
        <button onClick={() => dispalynum("3")}>3</button>
        <button onClick={() => operation("+")}>+</button>
        <br></br>
        <button onClick={() => dispalynum("4")}>4</button>
        <button onClick={() => dispalynum("5")}>5</button>
        <button onClick={() => dispalynum("6")}>6</button>
        <button onClick={() => operation("-")}>-</button>
        <br></br>
        <button onClick={() => dispalynum("7")}>7</button>
        <button onClick={() => dispalynum("8")}>8</button>
        <button onClick={() => dispalynum("9")}>9</button>
        <button onClick={() => operation("*")}>*</button>
        <br></br>
        <button onClick={() => dispalynum("0")}>0</button>
        <button onClick={() => operation("/")}>/</button>
        <button onClick={() => output("=")}>=</button>
        <button onClick={erase}>C</button>
      </div>
    </>
  );
};

export default Democalculator;
