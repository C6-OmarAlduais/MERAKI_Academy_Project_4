import "./App.css";
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { createContext, useState } from "react";
import Login from "./components/Login";
import Products from "./components/Products";
import ProductById from "./components/ProductById";
import Admin from "./components/Admins";
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
      <Route path="/home" element={<Products/>}/>
      <Route path="/product/:id" element={<ProductById/>}/>
      <Route path="/update/:id" element={<Admin/>}/>
      </Routes>
    </div>
    </appContext.Provider>
  );
}

export default App;
