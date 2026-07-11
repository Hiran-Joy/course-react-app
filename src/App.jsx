import { useState } from 'react'
import './App.css'
import ViewCourses from './components/ViewCourses'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ViewCourses/>
    </>
  )
}

export default App
