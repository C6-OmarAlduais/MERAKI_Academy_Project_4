import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { createContext, useState } from "react";
import Login from "./components/Login";
//--------------------------------------------
export const appContext = createContext()

//--------------------------------------------

function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token') || '');
//--------------------------------------------
  return (
<appContext.Provider value = {{isLogedIn, setIsLogedIn, token, setToken}}>
    <div className="App">
      <h1>Hello world</h1>
      <Navbar/>
      <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
    </appContext.Provider>
  );
}

export default App;
