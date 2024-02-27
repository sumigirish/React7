import React from "react";
export default function Child(props){
 return(
    <div>
        <img src = {props.image} alt ="movies" />
        <h2>{props.name} </h2>
    </div>
 )

}