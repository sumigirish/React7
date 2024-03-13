import Movies from "./Movies"
import { useState } from "react";
import { useEffect } from "react";
import "./App.css"
export default function App()
{
  const [searchTerm,setSearchTerm] = useState('')
  const [movieList,setMoviesList] =useState([])
  useEffect(() => 
  {
      async function fetchData(){
        //const res = await fetch("https://www.omdbapi.com/?s=%22titanic%22&&apikey=273ede60")
        const res = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=273ede60`)
        
        const data = await res.json()
        setMoviesList(data.Search)
       // console.log({searchTerm})
      }
      fetchData()
 // },[])
},[searchTerm])
  return(
    <div className="App">
      <h2> Please enter your favourite Movie here </h2>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <Movies moviesList = {movieList} />
    </div>
  )

}