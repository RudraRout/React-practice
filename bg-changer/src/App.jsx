import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("White");

  return (

    <div className=" w-full h-screen" style={{ background: color }}>
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-4 ">
        <div className="flex flex-wrap justify-center  gap-5 shadow-lg bg-slate-200 px-4 py-3 rounded-2xl text-white">
          <button className=' bg-red-700 px-4 py-2 rounded-2xl opacity-90 outline-none  ' onClick={()=>{setColor("Red")}}>
            Red
          </button>

          <button className=' bg-green-600 px-4 py-2 rounded-2xl opacity-90 outline-none' onClick={()=>{setColor("Green")}}>
            Green
          </button>

          <button className=' bg-blue-700 px-4 py-2 rounded-2xl opacity-90 outline-none' onClick={()=>{setColor("Blue")}}>
            Blue 
          </button>

          <button className=' bg-violet-800 px-4 py-2 rounded-2xl opacity-90 outline-none' onClick={()=>{setColor("Violet")}}>
            Violet
          </button>

          <button className=' bg-orange-600 px-4 py-2 rounded-2xl opacity-90 outline-none' onClick={()=>{setColor("Orange")}}>
            Orange
          </button>

          <button className=' bg-yellow-400 px-4 py-2 rounded-2xl opacity-90 outline-none' onClick={()=>{setColor("Yellow")}}>
            Yellow
          </button>

          <button className=' bg-slate-400 px-4 py-2 rounded-2xl opacity-90' onClick={()=>{setColor("White")}}>
            White
          </button>

          <button className=' bg-black px-4 py-2 rounded-2xl opacity-90' onClick={()=>{setColor("Black")}}>
            Black
          </button>

        </div>
      </div>
    </div>

  )
}

export default App
