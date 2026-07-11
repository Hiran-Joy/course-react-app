import { useState } from 'react'
import './App.css'
<<<<<<< HEAD
<<<<<<< HEAD
import InsertCourse from './components/InsertCourse'
=======
import ViewCourses from './components/ViewCourses'
>>>>>>> viewCourses
=======
import InsertCourse from './components/InsertCourse'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ViewCourses from './components/ViewCourse'
>>>>>>> navigationBar

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
     <InsertCourse/>
=======
     <ViewCourses/>
>>>>>>> viewCourses
=======
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<InsertCourse/>} />
          <Route path='/view' element={<ViewCourses />} />
        </Routes>
      </BrowserRouter>

>>>>>>> navigationBar
    </>
  )
}

export default App