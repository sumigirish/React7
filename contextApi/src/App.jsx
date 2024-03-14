import React, { useState, useContext } from "react";

import Component from "./Component";

import { mainContext } from "./main";

export default function App() {

  const [count, setCount] = useState(0);

  return (

    <div style={{ width: "400px", height: "400px", border: "1px solid red" }}>
<p>Parent</p>
      <button onClick={() => setCount(count + 1)}>incr</button>

      <mainContext.Provider value={count}>
      
        <Component />

      </mainContext.Provider>

    </div>

  );

}

 