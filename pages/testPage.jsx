import { useState } from "react";
import toast from "react-hot-toast";
import uploadfile from "../src/utils/mediaUpload";

export default function TestPage() {
  const [file, setFile] = useState(null); //for image storage
  function handleUpload(){
    uploadfile(file).then(
      (url) =>{
        console.log(url)
        toast.success("File uploaded successfully")
      }).catch(
        (error) => {
          console.log(error)
          toast.error("File upload failed")
        }
      )
    
  }

    return (
        <div className="w-full h-screen flex justify-center items-center">
          <input type="file" 
          //accept="image/*" only image
          onChange={(e) => {console.log(e)
            console.log(e.target.files[0])
            setFile(e.target.files[0])}
          }/>
          <button onClick={handleUpload} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Upload</button>
        </div>
    );
}