import { Link, useNavigate } from "react-router-dom"; //for hyperlink , and smooyh page loading
import { useState } from "react";//create veriable for compond this is hook finction
import axios from "axios"; //send the request for backend
import toast from "react-hot-toast"; //for error massage display

export default function LoginPage() {
    //hook
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();//for page loading smothly 

//create loging function
    function login(){
      console.log(email, password); 
      axios.post(import.meta.env.VITE_backend_url + "api/users/login", {
         email : email,
         password : password //send the data into backend
      }).then((response)=>{
        console.log(response.data);
        //save token in web browser storage
        localStorage.setItem("token", response.data.token);
        toast.success("login successfull");//for success massage
        if(response.data.role === "admin"){
          navigate("/admin");//go to admin panel
        }else if(response.data.role === "user"){
          navigate("/");//go to user panel
        }
      }).catch((error)=>{
        console.log(error);
        toast.error("Invails email or password")
      })
    }

    return (
        <div className="w-screen h-screen bg-[url(../loginbg.jpg)] flex justify-center items-center bg-center bg-cover">
            <div className="w-[500px] h-[500px] backdrop-blur-sm shadow-2xl rounded-[30px] relative gap-[20px] text-white flex flex-col items-center justify-center">
            
            <h1 className="absolute top-[20px] text-2xl font-bold text-center my-5">login</h1>
           
            <div className="w-[350px]  flex flex-col">
                <span className="text-lg">Email </span>
            <input onChange={(e)=>{
                setEmail(e.target.value);
                console.log("changed")
            }
            }
            className="w-[350px] h-[60px] border border-amber-200 rounded-xl" type = "text" />
            </div>
           
            <div className="w-[350px]  flex flex-col">
                <span className="text-lg">Password </span>
            <input onChange={(e)=>{
                setPassword(e.target.value);
                console.log("passwordchanged")
            }}            
            className="w-[350px] h-[60px] border border-amber-200 rounded-xl" type = "password" />
            </div>
           
            <button onClick={login} className="w-[350px] h-[60px] bg-blue-600 text-white font-bold text-2xl rounded-3xl hover:bg-blue-700 transition duration-300">Login</button>
            
            <p>Don't have an account? <Link className="text-blue-600" to="/register" >Sign up from here</Link></p>
        </div>
        </div>
    );
}