import React from "react";
import Democard from "../Pages/Democard";
const Card = () => {
  const mystyle = {
    width: "18rem",
  };
  return (
    <>
      <div className="abc">
        <div class="card" style={mystyle}>
          <img
            src={require("../Images/i-1.jpeg")}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

        <Democard
          imgsrc={require("../Images/i-2.jpeg")}
          title="titl1 2"
          content="Some quick example text to build on and make up the"
          btn="show"
        />
        <br></br>
        <Democard
          imgsrc={require("../Images/i-1.jpeg")}
          title="titl- 3"
          content="Some   quick example text to build on"
          btn="show more "
        />
         <Democard
          imgsrc={require("../Images/i-2.jpeg")}
          title="titl- 4"
          content="aaaaaaaaaaaaaaaa aaaaaaaaaa bbbbbbbbbbbbbbbbb "
          btn="show more here ........  "
        />

<Democard
          imgsrc={require("../Images/i-1.jpeg")}
          title="titl- 5"
          content="Some   quick example text to build on"
          btn="show more "
        />
         <Democard
          imgsrc={require("../Images/i-2.jpeg")}
          title="titl- 6"
          content="aaaaaaaaaaaaaaaa aaaaaaaaaa bbbbbbbbbbbbbbbbb "
          btn="show more here ........  "
        />
      </div>
    </>
  );
};

export default Card;
