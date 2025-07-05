import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./views/Home/Home.jsx"
import Getcity from './views/Getcity/Getcity.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
           <Routes>
               <Route path='/' element={<Getcity/>}/>
               <Route path='/home' element={<Home/>}/>
           </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
