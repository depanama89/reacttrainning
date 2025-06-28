import { useCallback, useState } from 'react'

import './App.css'

interface AnswerBoolean{
active:()=>void,
desactive:()=>void,
toggle:()=>void
}
const useBoolean=(valuerIntial:boolean):[boolean,AnswerBoolean]=>{
const [value,setValue]=useState<boolean>(valuerIntial)

const active=useCallback(()=>setValue(true),[])
const desactive=useCallback(()=>setValue(false),[])
const toggle=useCallback(()=>setValue((prevValue)=>!prevValue),[])

return [value,{active,desactive,toggle}]
}
function App() {

const [isVisible,{active,desactive,toggle}]=useBoolean(false)
 
  return (
    <div className='App'>
      <h1>Exercice : Use boolean</h1>
      <div className='container'>
        <p>{isVisible? 'Visible':"Invisible"}</p>
        <div className='buttons'>
          <button onClick={active} className='btn'>Active</button>
        <button onClick={desactive} className='btn'>Desactive</button>
        <button onClick={toggle} className='btn'>Tooggle</button>
        </div>
      </div>
    </div>
  )
}

export default App
