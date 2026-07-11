import { useState } from 'react'
import './App.css'
import InsertCourse from './components/InsertCourse'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewCourses from './components/ViewCourse'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<InsertCourse/>} />
          <Route path='/view' element={<ViewCourses />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App