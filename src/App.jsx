import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/productCard'
import { BrowserRouter, Route } from 'react-router-dom'
//<></> can return muliple div                                                                                                                                                                                                                                                                                                                                                                                                                    
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <>
   
      <div className = "w-full h-screen bg-blue-200 " >  
        <div className='bg-red-400'> 
          <Routes path = "/">
          <Route path="/" element={<homePage/>} />
          <Route path="/register" element={<registerPage/>} />
          <Route path="/login" element={<loginPage/>} />
          <Route path="/admin" element={<adminPage/>} />
          </Routes>

        </div>
      </div>
       
    </>
   </BrowserRouter>
  )
}

export default App
