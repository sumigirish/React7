import {useState} from "react";
import {Modal} from "./Modal";
import "./App.css"
export default function App(){
  const [show,setShow] = useState(false);
  function clickHandler(){
    setShow(true);
  }

  return(
    <div className="App" >
      <button onClick={clickHandler}>Open Modal</button>
      <Modal onClose={() => setShow(false)} show ={show} />
      </div>

  );
}