import React from "react";
import {Link} from "react-router-dom";
import "./App.css";
function NavBar(){
    return(
        <div className=""> 
            <Link  className="nav-link">home</Link>
            <Link  className="nav-link"> About</Link>
            <Link  className="nav-link" >Contact us </Link>

        </div>
        
    )
}

export default NavBar;