import "./App.css";
import Demodate from "./Pages/Demodate";
import Object, {Ab}  from "./Pages/Object";
import Calculator from "./Pages/Calculator";
import {Show  } from './Pages/Object'
import Democalculator from "./Pages/Democalculator";
import Cal from './Pages/Cal'
import { Add ,Multi,Sub,Div} from "./Pages/Cal";
import Card from "./Pages/Card";
import Api from "./API/Api";
 function App() {
  var date = new Date(2020, 5, 5, 4);
  const age = 31;
  const edu = "M C A"
  var hours = date.getHours();
  
  return (
    <div className="App">
      {/* <Object name= "gaurav" surname = "patil" age={age} edu = {edu} time = {hours} />
      <Object   name= "kalyani" surname = "salunkhe " age={age} edu = {edu} time = {hours}/>
      <Card/> */}


      <h1>Gaurav ,... </h1>
      <Api/>
      {/* <Demodate/> */}

      {/* {age >= 21 ? ( 
        <div className="ab">
          Ready to job Ready to job
          <br />
          <br />
          <br />
          Ready to job
          <br /> Ready to job Ready to job Ready to job
        </div>
      ) : (
        <div> Not ready to job </div>
      )}
      <Ab />
     <h1>addition is : {Add(15,5)} </h1>
     <h1>Multiplacation is :: {Multi(4,2)}</h1>
     <h1>Div :: {Div(13,3)}</h1>
     <h1>Multi :: {Sub(2,2)}</h1> */}
      {/* <Show/> */}
      {/* <Calculator/> */}
      {/* <Democalculator/> */}

    </div>
  );
}

export default App;
