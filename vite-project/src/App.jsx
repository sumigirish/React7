import Fiction from "./Fiction" ; 
import Nonfiction from "./Nonfiction" ;
import Fantasy from "./Fantasy";

export default function  App() {
  return(
    <div>
         <h2> Fiction books </h2>
    <Fiction /> 
    <h2> Non Fiction books </h2>
    <Nonfiction /> 
    <h2> Fantasy books </h2>
    <Fantasy /> 
    </div>
  )
}