import {useState} from "react";
import "./App.css"
export default function App (){
const [c, setCount] = useState(0);
function add()
{
  if (c > 24 )
    alert ("Count greater than 25 is not allowed")
  else
    setCount(c + 1)
}

function subtract()
{
  if (c <= 0 )
  alert ("Count lesss than 0 is not allowed")
else
  setCount(c - 1)
}

  return(
<div className = "img">
  <p> Count : {c} </p>
  <button onClick = {add}>Increment </button>
  <button onClick = {subtract}>Decrement </button>
  <button onClick = {() => setCount(0) }> Reset </button>
</div>

  )

}