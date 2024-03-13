import {useState} from "react";
import "./App.css"
export default function App(){
const [number,setNumber] =  useState(0);
function subtract(){
  if (number === 0){
    alert("Number cannot be Negative");
    return;
  }
  setNumber(number-1);
}

function checknumber(){
  if(number === 0 ) return "neither Odd nor Even";
  if(number%2 === 0 && number !=0 ) return "Even";
  else return "Odd"
}

return(
  <div className="App" >
    <h1>COUNT : {number}</h1>
    <button onClick={()=>{setNumber(number+1)}} > + </button>
    <button onClick={subtract}> - </button>
    <h3>{number} is {checknumber()}</h3>
  </div>
)

}