import { useEffect, useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import Course from './components/Course'

function App() {
  const [courses, setCourses] = useState([])
  useEffect( () => {
    fetch('./Courses.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  },[])
  
  return (
    <div className='w-11/12 mx-auto'>
      <h1 className='text-4xl my-10 text-center font-bold'>Course Registration</h1>
      <div>
        <div className="course-container lg:w-[79%] grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            courses.map( course => <Course key={course.id} course={course}></Course>)
          }
        </div>
        <div>
          <Cart></Cart>
        </div>
      </div>
    </div>
  )
}

export default App
