import React from "react";
import { Link , useNavigate } from "react-router-dom";
import { useContext } from "react";
import "./style.css";
import { appContext } from "../../App";

//-----------------------------

const Navbar = () => {
    const navigate = useNavigate()
    const {setIsLogedIn, setSearch, setToken, token} = useContext(appContext)
    
    const toLogout =()=>{
        setIsLogedIn(false)
        setToken('')
        localStorage.clear()
        navigate('/login')
      }
    return (
        <div className="nav">
            <svg onClick={() => navigate(`/cart`)} xmlns="http://www.w3.org/2000/svg" width="20" height="20"  className="cart2" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>

</svg>
             {token === ''? (<Link className="bar-link" to={'/login'}>Login</Link>):(<Link onClick={toLogout} className="bar-link" to={'/login'}>Sing out</Link>)}
        <div className="nav-items">
            <Link className="bar-link" to={'/home'}>Home</Link>
            
        </div>
        <div className="search">
              <input
                className="search-input"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                type={"text"}
                placeholder={"Search..."}
              ></input>
            </div>
        
        <div className="img-header">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-laptop-fill" viewBox="0 0 16 16">
  <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
</svg>e-markt
</div>
        </div>
    );
}

export default Navbar;
