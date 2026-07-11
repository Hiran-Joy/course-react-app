import { useState } from 'react'
import './App.css'
import InsertCourse from './components/InsertCourse'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <InsertCourse/>
    </>
  )
}

export default App
