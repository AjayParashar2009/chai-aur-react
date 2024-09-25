import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    
  let [count, setcount] = useState(0)
  // let count = 5
  const addvalue = ()=>{
       setcount(count + 1)
  }
  const resetvalue = ()=>{
       setcount(count = 0)
  }
  const Removevalue = ()=>{
      if(count <=0 ) return
      setcount(count - 1)
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter : {count}</h2>
      <button
      onClick={addvalue}
      >Add value</button>
      <br />
      <button
       onClick={Removevalue}
      >Remove value</button>
      <br />
      <button
       onClick={resetvalue}
      >Reset value</button>
    </>
  )
}

export default App
