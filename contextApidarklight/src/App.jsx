import React, { useState, useContext } from "react";
import Component from "./Component";
import { mainContext } from "./main";

export default function App() {
  const [lb, setLight] = useState("white");
  const [db, setDark] = useState("red");
  return (
    <div style={{ width: "400px", height: "400px", border: "1px solid blue" }}>
      <p>Parent</p>
     <button onClick = {change(setLight(lb))}> Light</button>   
     <button onClick = {change(setDark(db))}> Dark</button>    
      <mainContext.Provider value1={db} value2={lb}>
        <Component />
      </mainContext.Provider>
    </div>
  );

}