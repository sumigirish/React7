import { Component } from 'react'
import './App.css'

class App extends Component{
  constructor(){
    super();
    this.state = {};
  }
 render(){
  const change= () =>{
    document.body.style.backgroundColor = this.state.background;
  }

  return (
    <div className = "App" >
      <input type = "color" onChange = {(e) => (this.state.background = e.target.value) } /> 
      <button onClick = {change} > Change</button>
    </div>
  );
 }

  }

export default App
