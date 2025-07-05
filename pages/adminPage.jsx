import { Link,Routes, Route } from "react-router-dom";
import { FaBoxArchive } from "react-icons/fa6"; //react icon
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
export default function AdminPage() {
    return (
        
        <div className="w-full h-screen bg-red-700 flex">
            <div className="w-[300px] h-full bg-amber-50 flex flex-col items-center">
                <span className="text-3xl font-bold my-5">Admin Panel</span>  
                 <Link className="flex flex-row h-[60px] w-full text-1xl p-[25px] items-center  gap-[5px]"  to="/admin/users"><FaUser/>Users</Link>
                 <Link className="flex flex-row h-[60px] w-full text-1xl p-[25px] items-center  gap-[5px]" to="/admin/products"><FaBoxArchive/>Products</Link>
                 <Link className="flex flex-row h-[60px] w-full text-1xl p-[25px] items-center  gap-[5px]" to="/admin/orders"><FaCartShopping/>Orders</Link> 
                 <Link className="flex flex-row h-[60px] w-full text-1xl p-[25px] items-center  gap-[5px]" to="/admin/settings"><IoSettingsSharp/>Settings</Link>
                 </div>
            <div className="w-[calc(100%-300px)] h-full bg-blue-700">   
                <Routes path = "/*">
                 <Route path="/" element={<h1>Dashboard</h1>} />
                 <Route path="/users" element={<h1>Users</h1>} />
                 <Route path="/products" element={<h1>Products</h1>} />
                 <Route path="/orders" element={<h1>Orders</h1>} />
                </Routes>   
            </div>
        </div>
        
    );
}