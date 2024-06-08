
import { useState } from 'react'
import './App.css'

function App() {

  let[modal , setModal] = useState(false)
  
  return (
    <div>
      <button className= "but" onClick={()=>{setModal(!modal)}}>Login Modal</button>
      <div className = {`blackScreen ${modal ? "showBlackScreen" : " "}`}></div>
      <div className= {`box ${modal ? "showBox" : " "}`}> <h2>Welcome Habibi</h2></div>
    </div>
  )
}

export default App
