import React from "react"
import AccordinItem from "./AccordinItem"
import {useState} from "react";
export default function Accordin (props)
{
    //const [open, setOpen] = useState(false)
    const [openIndex,setOpenIndex] = useState(0)
    const update = (index) =>
    {
        setOpenIndex(index)
    }
    return(
        <div>
         {props.items.map((obj,index) => (
          <AccordinItem title={obj.title} content = {obj.content}
          isOpen={openIndex===index} update={update} key={index} index={index}/>
         ))}
        </div>
    );
}
