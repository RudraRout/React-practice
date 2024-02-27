import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);
  return (
    <>
      <h2 className='displayCount'>{count}</h2>

      <button onClick={() => setCount(count + 1)} className='operationBtn btn'>+</button>

      <button onClick={() => {
        if (count > 0) {
          setCount(count - 1)
        }
      }}
        className='operationBtn btn'>-</button>

    </>
  )
}

export default App
