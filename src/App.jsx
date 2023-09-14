import './App.css'
import Cart from './components/Cart'
import Course from './components/Course'

function App() {
  
  return (
    <>
      <h1 className='text-4xl my-10 text-center font-bold'>Course Registration</h1>
      <div>
        <div className="course-container">
          <Course></Course>
        </div>
        <div>
          <Cart></Cart>
        </div>
      </div>
    </>
  )
}

export default App
