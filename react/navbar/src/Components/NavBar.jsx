import React from "react";
import {Link} from "react-router-dom";
function NavBar(){
    return(
    <div className="bg-green-300 text-black px-6 py-3 flex space-x-6">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
        </div>)
}

export default NavBar;