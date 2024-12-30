import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return (
        <div className="navbar">
        <div className="logo">Lax...</div>
        <ul>
            <Link to="/"><li>Home</li> </Link>
            <Link to="/products"> <li>Products</li></Link>
            <Link to="/contact"> <li>Contact</li></Link>
            <Link to="/about"> <li>About</li></Link>
        </ul>
        <button>Login</button>
        </div>
    )
}

export default Navbar;