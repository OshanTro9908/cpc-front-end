import { createClient } from "@supabase/supabase-js";

const url = "https://ffzvyrpuurcvmpuufnxt.supabase.co"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmenZ5cnB1dXJjdm1wdXVmbnh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0MTQ0OTcsImV4cCI6MjA2Nzk5MDQ5N30.169vf5oFOryKVS2FbQFwn7rPthzJ9An1gJKsO3Jj6Kw"

const supabase = createClient(url, key) // for Supabase connection

export default function uploadfile(file) {
    const promise = new Promise(
        (resolve,reject)=>{

            if (file==null){
                reject(new Error("No file selected"))
                return //if image is not selected
            }

            const timeStamp = new Date().getTime();
            const fileName = timeStamp+"."+file.fileName //for created unique file name

            //upload image in supabase
            supabase.storage.from("images").upload(fileName.file, {
                casheControl : "3600",
                upsert : false                
            }).then(
                ()=>{
                  const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl //get public url of image
                  console.log("File Public Url",publicUrl)  
                  resolve(publicUrl)
                }
            ).catch(
                (error)=>(
                    console.error("Error in file upload",error),
                    reject("File upload failed")
                
                )
            )
            
            
        }
    )
    return promise

}
    