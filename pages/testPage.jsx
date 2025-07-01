import { useState } from "react";

export default function TestPage() {
    const[count, setCount] = useState(0);//hock is geven two type things count - variable setcount - function
     
    function add(){
        setCount(count + 1);
    }

    function sub(){
        setCount(count - 1);
    }

    return (
         <div className="w-full h-screen bg-black flex justify-center items-center">
            <div className="w-[400px] h-[400px] bg-white flex flex-col justify-center items-center rounded-2xl">
            <h1 className="text-5xl font-bold">{count}</h1>
            <div className="w-full flex justify-center items-center  h-[100px]">
            <button onClick={add} className = "w-[100px] bg-blue-500 h-[45px] text-3xl mx-2 flex justify-center items-center text-white rounded-full" >+</button>
            <button onClick={sub} className = "w-[100px] bg-blue-500 h-[45px] text-3xl mx-2 flex justify-center items-center text-white rounded-full" >-</button>
            </div>
          
        </div>
        </div>
    ); 
}