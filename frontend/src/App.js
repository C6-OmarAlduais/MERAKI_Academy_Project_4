import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { createContext, useState } from "react";
import Login from "./components/Login";
import Products from "./components/Products";
import ProductById from "./components/ProductById";
import UpdateProduct from "./components/Admins/UpdateProduct";
import CreateProduct from "./components/Admins/Create";
import Cart from "./components/Cart";
import Search from "./components/Search";
//--------------------------------------------
export const appContext = createContext();

//--------------------------------------------

function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [allProducts, setAllProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [search, setSearch] = useState("");

  //--------------------------------------------
  return (
    <appContext.Provider
      value={{
        isLogedIn,
        setIsLogedIn,
        token,
        setToken,
        allProducts,
        setAllProducts,
        cartProducts,
        setCartProducts,
        search, 
        setSearch,
      }}
    >
      <div className="App">
        {/* <h1>Hello world</h1> */}
        <Navbar />
        <Search />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Products />} />
          <Route path="/product/:id" element={<ProductById />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </appContext.Provider>
  );
}

export default App;
