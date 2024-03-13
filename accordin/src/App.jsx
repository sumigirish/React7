import React from "react"

import Accordin from "./Accordin"
export default function App(){
  const items=[
    {
      "title": "Title1",
      "content":"This is the content of Title1"
      },
    { "title": "Title2",
      "content":"This is the content of Title2"
    },
    {
      "title": "Title3",
      "content":"This is the content of Title3"},
    
  ]
    return(
        <div>
          <Accordin items ={items}/>
        </div>
    );
}