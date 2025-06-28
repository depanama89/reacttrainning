import { useState } from 'react'

import './App.css'

function App() {
 const [count,setCount]=useState(0)

 const increment=()=>{
setCount(count+1)
 }

 const decrementer=()=>{
  setCount(count-1)
 }
  return (
    <div className="App">
     <h1 className='app_titre'>Application d'un compteur</h1>
     <span className='answer'>{count}</span>
     <div className='btn'>
      <button onClick={increment}>Incrementer</button>
      <button onClick={decrementer}>Decrementer</button>
      <button onClick={()=>setCount(0)}>Renitialiser</button>
     </div>
    </div>
  )
}

export default App
