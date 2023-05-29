import React from "react";

const Democard = (props) => {
  const mystyle = {
    width: "18rem",
  };
  return (
    <>
      <div class="card" style={mystyle}>
        <img src={props.imgsrc} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.content}</p>
          <a href="#" class="btn btn-primary">
            {props.btn}
          </a>
        </div>
      </div>
    </>
  );
};

export default Democard;
