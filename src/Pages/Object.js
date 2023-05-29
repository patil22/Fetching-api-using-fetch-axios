import React from "react";
 export const Ab = ()=>{
        return(
        <div>
            ppppppppppppp
            <br></br>
            <br></br>
            ppppppppppppp
        </div>
        )
        
}
export const Show = ()=>{
    alert('hiiii')
    return(
        <>
        <h1>Alert here </h1>
        </>
    )
}

var arr = ["ab","cd","ef"];
console.log(arr)

const Object = (props) => {
   console.log(props)
  const myStyle = {
    color: "red",
    fontSize: "16px",
    fontWeight: "bold",
    display: "flex"
    // Add more CSS properties as needed
  };
  var age =18;

var co = "blue"
  return (
    <>
      <div style={myStyle}>
        <p>Hello, React! {props.name}</p>
        <p>Hello, React! {props.surname}</p>

        {/* <p>Hello, React! {props.age}</p>
        <p>Hello, React! {props.edu}</p>
        <p>Hello, React! {props.time}</p> */}
        
      </div>
      {
        age>=18 ? <div style={{ ...myStyle, color: co }}>Able</div> : <div>Not </div>
      }
    </>
  );

};

export default Object;
