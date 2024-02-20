import React from 'react';
import { useState } from 'react';

import swal from 'sweetalert2'

import { app, database, storage } from './firebaseConfig';
import { collection, addDoc } from "firebase/firestore"

import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";


import addIcon from "../assets/addIcon.png"
import Logo from "../assets/logo.png"


function form() {
    
    // --------USER DATA----------
    const [username,setUsername] = useState("");
    // const [password, setPassword] = useState("");
    const [language, setLanguage] = useState("");
    const [file, setFile] = useState(null);
  

    
   
     // ------ collection: database:"Firestore" , user:"Folder-Name" -----
     const mycollection = collection(database, 'members');
    

        // "SUBMIT" button function
        const submit = (event) => {
        // NOTE: we need to use "Storage" to upload files/images"
          
        // --------For Image/file Upload-----------
            if (file === null) return;
        //-----------------------storage,`folder`${"randomize FileName"}  
          // const imageRef = ref(storage, `screenshots/${file.name + v4()}`)
          const imageRef = ref(storage, `screenshots/${file.name + `(${username})` }`)

        // To upload files to firebase:
        //  uploadBytes(reference,image/file)  
            uploadBytes(imageRef, file)



          // -------Handles String data------------
          // send data to the "database" named "user"
          addDoc(mycollection, {
            username: username,
            // password: password,
            language: language,
            // image:file
          })
            .then((response) => {
              swal.fire({
                icon: "success",
                text: "Submitted Successfully",
                confirmButtonText: "Hooray!"
               
              });
            })
            .catch((err) => {
              alert(err.message);
            });
        }
  
  return (
      <div className="mx-[116px] mt-[-10]  font-montserrat">
          {/* */}
          <div action="" className='flex flex-col   '> 
              <label htmlFor="" className=' font-bold'>Leetcode Username</label>
              <input className='mb-1 border-2  border-black  rounded-2xl  text-black px-2 w-[300px]' type="email" onChange={(event) => {
                  setUsername(event.target.value)
              }} />
                

              {/* Select Language */}
                <p className="font-bold">Language</p>
              <select className=" cursor-pointer border-black border-2  rounded-xl pl-3 w-[300px]" name="" id=""
                onChange={(event)=>{setLanguage(event.target.value)}}
              >
                <option value="Rust">Rust</option>
                <option value="C">C</option>
                <option value="C++">C++</option>
                <option value="Python">Python</option>    
                <option value="Java">Java</option>
                <option value="C#">C#</option>
                <option value="JavaScript">JavaScript</option>
                <option value="TypeScript">TypeScript</option>
                <option value="Ruby">Ruby</option>
                <option value="Go">GO</option>
                <option value="Kotlin">Kotlin</option>
                <option value="PHP">PHP</option>
              </select>
             
              <div className='my-3' >
                <p className=' font-bold  mb-[-5px]'>screenshot</p>
                <p className="text-gray-700">make sure that the username and the code are visible in the screenshot.</p>
               </div>
              
              {/* Upload-files : input */}
              <label htmlFor="file-input" className=' flex mb-5 cursor-pointer' >
                    <img src={addIcon} className="shadow-lgw-[25px] h-[25px] ml-1"  alt="" />
                  <p className=" font-bold pl-1">add screenshot</p>
              </label>
                
              <input className="hidden" id="file-input" type="file" accept='image/*' name='img' onChange={(event) => { setFile(event.target.files[0]) }} />
              
              {/* Image Preview Container */}
              <div className="overflow-hidden border-gray-600 border-2 md:w-[500px] md:h-[250px] rounded-md flex justify-center  shadow-lg w-[200px] h-[120px]">
                  {file && (<img className='object-cover w-[100%]  h-[100%] my-auto font-SourceSans text-xl text-gray-600 tracking-wider' src={URL.createObjectURL(file)}  />)}
              </div>   
              
                {/* Submit Button */}
              <button className=' px-10 py-1 my-5 border-2 border-[#0386FF]  rounded-3xl text-[#0386FF] hover:bg-[#0386FF] hover:text-white w-[150px] shadow-lg' onClick={submit}>submit</button>
    
        

                <img src={Logo} className="w-[250px] absolute bottom-0 right-0  portrait:hidden"/>

      </div>
    </div>
  )
}

export default form;



