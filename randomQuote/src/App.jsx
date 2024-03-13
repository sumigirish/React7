import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
export default function App() {
  const [quote, setQuote] = useState("");
  const [btnClick, setBtnClick] = useState(0);
  const [author, setAuthor] = useState("");
  useEffect(() => {
    axios.get("https://api.quotable.io/random").then((data) => {
      setQuote(data.data.content);
      setAuthor(data.data.author);
    });
  }, [btnClick]);

  const [values, setValues] = useState([])
  const [value, setValue] = useState("")
  
  const add = () => {
    setValues([...values, quote])
    setValue([...value, author])
  }
  
  return (
    <div className="App">   
    <h1>Random Quote Generator</h1>  
      <blockquote>{quote}</blockquote>
      <cite>-{author}</cite><br/>
      <br />
      <button onClick={() => setBtnClick(btnClick+1)}>Get Quote</button> 
        
      <button onClick={add}>Save</button>
      <ul>
				{values.map((quote, index) => (
                    <li key={index}>{quote} Author: {author}</li>
                  
				))}
			</ul>
    </div>
    
    
  );
}
