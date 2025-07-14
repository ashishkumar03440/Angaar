import React from "react";
import {Link} from "react-router-dom";
function Navbar(){
    return(
        <div className="bg-green-300 text-black px-6 py-4 flex space-x-6 "> 
            <Link to="/" className="hover:underline">home</Link>
            <Link to="/about" className="hover:underline"> About</Link>
            <Link to="/contact" className="hover:underline" >Contact us </Link>

        </div>
    )
}

export default Navbar;