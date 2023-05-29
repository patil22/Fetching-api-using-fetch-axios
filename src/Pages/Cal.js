import React from "react";
var a;
var b;

export const Add = (a, b) => {
  const sum = a + b;

  return <>{sum}</>;
};

export const Multi = (a, b) => {
  const mul = a * b;
  return mul;
};

export const Sub = (a, b) => {
  const sub = a - b;
  return sub;
};

// .substring(1,3)
export const Div = (a, b) => {
  const div = a / b;
  return div.toString().substring(0, 5);
};
const Cal = () => {
  return (
    <>
      <div>Cal</div>
    </>
  );
};

export default Cal;
