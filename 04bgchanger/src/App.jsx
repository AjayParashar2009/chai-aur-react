import { useState } from "react"

function App() {
  let [color,setColor] = useState("aqua")  

  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2
      rounded-3xl">
      <button onClick={()=>setColor('Red')} 
      className="outline-none px-4 py-1 shadow-lg
       text-white rounded-full"
      style={{backgroundColor:'Red'}}>Red
      </button>
      <button onClick={()=>setColor('Green')} 
      className="outline-none px-4 py-1 shadow-lg
       text-white rounded-full"
      style={{backgroundColor:'Green'}}>Green
      </button>
      <button onClick={()=>setColor('Blue')} 
      className="outline-none px-4 py-1 shadow-lg
       text-white rounded-full"
      style={{backgroundColor:'Blue'}}>Blue
      </button>
      <button onClick={()=>setColor('Olive')} 
      className="outline-none px-4 py-1 shadow-lg
       text-white rounded-full"
      style={{backgroundColor:'Olive'}}>Olive
      </button>
      <button onClick={()=>setColor('Pink')} 
      className="outline-none px-4 py-1 shadow-lg
       text-white rounded-full"
      style={{backgroundColor:'Pink'}}>Pink
      </button>
      <button onClick={()=>setColor('Yellow')} 
      className="outline-none px-4 py-1 shadow-lg
       text-white rounded-full"
      style={{backgroundColor:'Yellow'}}>Yellow
      </button>
      <button onClick={()=>setColor('Gray')} 
      className="outline-none px-4 py-1 shadow-lg
       text-white rounded-full"
      style={{backgroundColor:'Gray'}}>Gray
      </button>
      <button onClick={()=>setColor('Purple')} 
      className="outline-none px-4 py-1 shadow-lg
       text-white rounded-full"
      style={{backgroundColor:'Purple'}}>Purple
      </button>
      <button onClick={()=>setColor('Lavender')} 
      className="outline-none px-4 py-1 shadow-lg
       text-white rounded-full"
      style={{backgroundColor:'Lavender'}}>Lavender
      </button>
      <button onClick={()=>setColor('White')} 
      className="outline-none px-4 py-1 shadow-lg
       text-black rounded-full"
      style={{backgroundColor:'white'}}>white
      </button>
      <button onClick={()=>setColor('Black')} 
      className="outline-none px-4 py-1 shadow-lg
       text-white rounded-full"
      style={{backgroundColor:'Black'}}>Black
      </button>
    </div>
    </div>
   </div> 
  )
}

export default App
