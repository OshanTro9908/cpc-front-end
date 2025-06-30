import { Routes, Route } from "react-router-dom";


export default function adminPage() {
    return (
        <>
        <div className="w-full h-screen bg-red-700 flex">
            <div className="w-[300px] h-full bg-amber-50">   </div>
            <div className="w-[calc(100%-300px)] h-full bg-blue-700">   
                <Routes path = "/*">
                 <Route path="/" element={<h1>Dashboard</h1>} />
                 <Route path="/users" element={<h1>Users</h1>} />
                </Routes>   
            </div>
        </div>
        </>
    );
}