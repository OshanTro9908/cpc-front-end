import { BiPlus } from "react-icons/bi";//+ button
import { Link } from "react-router-dom";

export default function ProductsAdminPage() {
    return (
        <div className="w-full h-screen border-[2px]">
            <Link to="/admin/addproduct" className="fixed right-[50px] bottom-[50px] p-[20px] text-white bg-black rounded-full shadow-2xl cursor-pointer">    
                <BiPlus className="text-2xl font-bold "/>
            </Link>
        </div>
    );
}