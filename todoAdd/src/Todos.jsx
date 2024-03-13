import React from 'react'
import { useState } from "react"
import Todo from './Todo'

function Todos ()
{
   const [values, setValues] = useState([])
    const [value, setValue] = useState("")
		const add = () => {
			setValues([...values, value])
			setValue("")
		}
		
   
  return (
		
			<div>
                <p>I'm parent</p>
				<input
					type='text'
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<button onClick={add}>Add</button>
         
                   <Todo value = {values} /> 
				
		
		</div>
	)
}

export default Todos