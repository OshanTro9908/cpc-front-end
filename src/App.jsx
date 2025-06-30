
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/productCard'
import adminPage from "/pages/adminPage";
import testPage from '../pages/testPage';
import loginPage from '../pages/loginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//<></> can return muliple div                                                                                                                                                                                                                                                                                                                                                                                                                    
function App() {
  
  return (
    <BrowserRouter>
    
   
      <div className="w-full h-screen flex justify-center items-center">
					<Toaster position="top-right"/>
        
          <Routes path = "/">
            <Route path="/" element={<homePage/>} />
            <Route path="/register" element={<registerPage/>} />
            <Route path="/login" element={<loginPage/>} />
            <Route path="/admin/*" element={<adminPage/>} />
          <Route path="/test" element={<testPage/>} />
          </Routes>

        
      </div>
       
    
   </BrowserRouter>
  );
}

export default App
