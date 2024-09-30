import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
 let myObj ={
    name: 'John',
    age: 30

  }
  let myarr=  [1,2,3,4,5]

  return (
    <>
      <h1 className='bg-yellow-400 text-red-50 p-4 rounded-xl mb-4'>Chai Aur code</h1>
      <Card  username="ChaiAurCode"/>
      <Card  username="BabuRao"/>
    </>
  )
}

export default App
