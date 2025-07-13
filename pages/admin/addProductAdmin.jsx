import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function AddProductAdmin() {

    //useState for input
    const[productID, setProductID] = useState("");
    const[productName, setProductName] = useState("");
    const[alternativeNames, setAlternativeNames] = useState("");
    const[labelledPrice, setLabelledPrice] = useState("");
    const[price, setPrice] = useState("");
    const[images, setImages] = useState("");
    const[descripition, setDescripition] = useState("");
    const[category, setCategory] = useState("");
    const[stock, setStock] = useState("");
    const[isActive, setIsActive] = useState("");

    //function for save button
    function productSave(){ 
       const altNamesInArray = alternativeNames.split(',');//split the string into array
       const productdata = {
            productID : productID,
            name : productName,
            alternativeNames : altNamesInArray,
            labelledPrice : labelledPrice,
            price : price,
            images : [],
            descripition : descripition,
            category : category,
            stock : stock,
            isActive : isActive
        }
        //check token
       const token = localStorage.getItem("token");
          if(token == null){
            window.location.href = "/admin/login";
            return
         }
       //call backend
       axios .post(import.meta.env.VITE_BACKEND_URL+"/product/api",productdata,{
         headers: {
           Authorization: "Bearer " + token
         }
       }).then(
            (res)=>{
               console.log("Product saved successfully");
               console.log(res.data);
            }).
            catch(
               (error)=>{
                  console.log("Error Product not saved",error);
               })
       
         
        console.log(productdata);


    }

    
    return (
        <div className="w-full h-full flex justify-center items-center border-[2px]">
           <div className="w-[600px]  border-[3px] rounded-2xl flex flex-row flex-wrap justify-between p-[40px] "> 
             <div className="w-[200px] flex flex-col gap-[5px]">
                <label className="text-sm font-semibold">Product ID</label>
                <input type="text" value={productID} onChange={(e)=>{setProductID(e.target.value)}} className="w-full h-[40px] border-[1px] rounded-lg "/>
             </div>  

              <div className="w-[300px] flex flex-col gap-[5px]">
                <label className="text-sm font-semibold">Product Name</label>
                <input type="text" value={productName} onChange={(e)=>{setProductName(e.target.value)}} className="w-full h-[40px] border-[1px] rounded-lg "/>
             </div>

             <div className="w-[500px] flex flex-col gap-[5px]">
                <label className="text-sm font-semibold">Alternative Names</label>
                <input type="text" value={alternativeNames} onChange={(e)=>{setAlternativeNames(e.target.value)}} className="w-full h-[40px] border-[1px] rounded-lg "/>
             </div>

             <div className="w-[200px] flex flex-col gap-[5px]">
                <label className="text-sm font-semibold">Labelled Price</label>
                <input type="number" value={labelledPrice} onChange={(e)=>{setLabelledPrice(e.target.value)}} className="w-full h-[40px] border-[1px] rounded-lg "/>
             </div>

             <div className="w-[200px] flex flex-col gap-[5px]">
                <label className="text-sm font-semibold">Price</label>
                <input type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}}  className="w-full h-[40px] border-[1px] rounded-lg "/>
             </div>

             <div className="w-[500px] flex flex-col gap-[5px]">
                <label className="text-sm font-semibold">Images</label>
                <input type="text" value={images} onChange={(e)=>{setImages(e.target.value)}} className="w-full h-[40px] border-[1px] rounded-lg "/>
             </div>

             <div className="w-[500px] flex flex-col gap-[5px]">
                <label className="text-sm font-semibold">Descripition</label>
                <textarea type="text" value={descripition} onChange={(e)=>{setDescripition(e.target.value)}} className="w-full h-[100px] border-[1px] rounded-lg "/>
             </div>

             <div className="w-[200px] flex flex-col gap-[5px]">
                <label className="text-sm font-semibold">Stock</label>
                <input type="number" value={stock} onChange={(e)=>{setStock(e.target.value)}} className="w-full h-[40px] border-[1px] rounded-lg "/>
             </div>

             <div className="w-[200px] flex flex-col gap-[5px]">
                <label className="text-sm font-semibold">Is Available</label>
               <select value={isActive} onChange={(e)=>{setIsActive(e.target.value === "true")}} className="w-full h-[40px] border-[1px] rounded-lg ">
                <option value={true}>Available</option>
                <option value={false}>Not Available</option>
               </select>
             </div>

             <div className="w-[200px] flex flex-col gap-[5px]">
                <label className="text-sm font-semibold">Category</label>
               <select value={category} onChange={(e)=>{setCategory(e.target.value)}} className="w-full h-[40px] border-[1px] rounded-lg ">
                [/* cream, face wash, soap. fragrance */]
                <option value="cream">Cream</option>
                <option value="facewash">Face Wash</option>
                <option value="soap">Soap</option>
                <option value="fragrance">Fragrance</option>
               
               </select>
             </div>

             <div className="w-full h-2  flex justify-center flex-row py-[20px]">
                <Link to ="/admin/products" className="w-[100px] h-[40px] bg-black text-white flex justify-center items-center rounded-full ">Cancle</Link>
                <button onClick={productSave}  className="w-[100px] h-[40px] bg-black text-white flex justify-center items-center rounded-full ml-[20px] ">Save</button>
             </div>

             

           </div>
        </div>
    );
}   