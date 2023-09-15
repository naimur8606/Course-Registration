import { useEffect, useState } from 'react'
import './App.css'
import Cart from './components/Cart'
import Course from './components/Course'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [courses, setCourses] = useState([])
  const [creditRemaining, setCreditRemaining] = useState(20)
  const [creditHour, setCreditHour] = useState(0)
  const [price, setPrice] = useState(0)
  const [markCourses, setMarkCourses] = useState([])
  useEffect( () => {
    fetch('./Courses.json')
      .then(res => res.json())
      .then(data => setCourses(data))
  },[])
  const cartControl = (course) => {
    const presentCreditRemaining = creditRemaining-course.credit;
    const presentCreditHour = creditHour+course.credit;
    const presentPrice = price+course.price;
    const askMarkCourse = markCourses.find( item => item.id === course.id)
    if(askMarkCourse){
      toast.error(' You have already selected it !', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else{
      if(presentCreditHour > 20 || presentCreditRemaining < 0){
        toast.error('You can not take over 20 hr credit !', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
      else{
        setMarkCourses([...markCourses,course])
        setCreditHour(presentCreditHour)
        setCreditRemaining(presentCreditRemaining)
        setPrice(presentPrice)
      }
    }
  }
  return (
    <div className='w-11/12 mx-auto'>
      <h1 className='text-4xl my-10 text-center font-bold'>Course Registration</h1>
      <div className='flex flex-col-reverse lg:flex-row justify-between mb-10'>
        <div className="course-container lg:w-[79%] grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            courses.map( course => <Course key={course.id} course={course} cartControl={cartControl}></Course>)
          }
        </div>
        <div className='w-full md:w-1/2 lg:w-[20%] mx-auto'>
          <Cart 
            creditRemaining={creditRemaining}
            creditHour={creditHour}
            price={price}
            markCourses={markCourses}
          ></Cart>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
