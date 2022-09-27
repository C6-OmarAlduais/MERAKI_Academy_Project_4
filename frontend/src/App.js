import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
//----------------------------

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Navbar/>
      <Routes>
      <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
