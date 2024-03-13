import "./App.css"
import {useState} from "react";
export default function App(){
const [db, setDb] = useState("#000000");
function change(){
  document.body.style.backgroundColor = db;
}
return(
  <div className = "App" >
    <input type = "color" onChange = {(e) => setDb(e.target.value)} />
    <button onClick = {change} > Change </button>
  </div>
)
};
