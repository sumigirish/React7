import React, { useContext } from "react";
import { mainContext } from "./main";

const Component2 = () => {
  const count = useContext(mainContext);
  return (
    <div style={{ width: "100px", height: "100px", border: "1px solid blue" }}>
        <p>Component2</p>
      
    </div>
  );
};

export default Component2;