import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/productCard'
//<></> can return muliple div 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className = "w-full h-screen bg-blue-200 " >  
        <div className="w-[600px] h-[900px] bg-purple-600 flex-col items-center justify-between">
          <div className="w-[75px] h-[75px] bg-red-600"></div>
          <div className="w-[75px] h-[75px] bg-yellow-600"></div>
          <div className="w-[75px] h-[75px] bg-green-600"></div>
          <div className="w-[75px] h-[75px] bg-pink-600"></div>
        </div>
      </div>
       
    </>
  )
}

export default App
