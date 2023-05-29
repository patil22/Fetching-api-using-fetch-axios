import React from "react";

const Demodate = () => {
  var date = new Date(2020, 5, 5, 18);
  date = date.getHours();
  var greeting = "";
  var style = {};
  if (date >= 1 && date <= 11) {
    greeting = "Good morning ";
    style.color = "red";
  } else if (date >= 12 && date <= 17) {
    greeting = "Good afternoon";
    style.color = "green";
  } else {
    greeting = "Good nigth";
    style.color = "yellow";
  }
  return (
    <>
      <h1>demoooooooo</h1>
      <h2>
        Hello, <span style={style}> {greeting} </span>
      </h2>
      
    </>
  );
};

export default Demodate;
