import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

//-----------------------------

const Navbar = () => {
    return (
        <div className="nav">
        <div className="nav-items">
            <Link className="bar-link" to={'/home'}>Home</Link>
            <Link className="bar-link" to={'/login'}>Login</Link>
            <Link className="bar-link" to={'/register'}>Register</Link>
        </div>
        <div className="img-header">
            <svg  xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-laptop-fill" viewBox="0 0 16 16">
  <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
</svg>
</div>
        </div>
    );
}

export default Navbar;
