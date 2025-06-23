import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./views/Home/Home"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
           <Routes>
               <Route path='/' element={<GetCity/>}/>
               <Route path='/home' element={<Home/>}/>
           </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
