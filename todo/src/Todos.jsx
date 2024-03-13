import React from 'react'
import { useState } from "react"
import Todo from './Todo'

function Todos ()
{
    const [values, setValues] = useState([])
    const [value, setValue] = useState("")
    const [dummytext,setDummyText]=useState('dummmy')
		const add = () => {
			setValues([...values, value])
			setValue("")
		}
		const remove = (id) => {
			values.splice(id, 1)
			setValues([...values])
    }
    const update = (text) =>
    {
       setDummyText(text)
   }
  return (
		<div>
			<div>
				<input
					type='text'
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<button onClick={add}>Add</button>
          </div>
  
			<ul>
				{values.map((value, index) => (
                    <li key={index}>{value}</li>
                  
				))}
			</ul>
            <Todo task={t} index={i} remove={remove} update={update} />
		</div>
	)
}

export default Todos