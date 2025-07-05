import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "../pages/homePage";
import TestPage from "../pages/testPage";
import AdminPage from "../pages/adminPage";
import LoginPage from "../pages/loginPage";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <BrowserRouter>
    <div className="w-full h-screen flex justify-center items-center">
      <Toaster position="top-center"/>
      
      <Routes path="/">
        <Route path="/" element={<HomePage/>}/>
        <Route path ="/test" element={<TestPage/>}/>
        <Route path ="/admin" element={<AdminPage/>}/>
        <Route path ="/login" element={<LoginPage/>}/>
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
