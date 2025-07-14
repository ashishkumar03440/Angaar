import React from "react";
import { useNavigate } from "react-router-dom";
function About(){
    const Navigate = useNavigate();
    const HandleSubmit = ()=>{
       
        alert("message sent ")
        Navigate("/")

    }
    return(
        <div>
                <h1 className="text-2xl font-bold text-center p-2 text-black"> welcome to About  page </h1>
                <button  onClick= {HandleSubmit} className="bg-purple-500 text-white rounded px-6 py-4 hover:bg-purple-800 ">click me</button>

        </div>
    )
}

export default About;