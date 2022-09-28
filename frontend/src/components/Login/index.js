import { useState, useContext, React } from "react";
import axios from "axios";
import { appContext } from "../../App";
//-------------------------------

const Login = () => {
  const { token, setIsLogedIn, setToken } = useContext(appContext);

  //-----------------------------

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  //-----------------------------

  const toLogin = () => {
    axios
      .post("http://localhost:5000/login/", { email, password })
      .then((res) => {
        console.log(res);
        setMessage(res.data.message)
       setIsLogedIn(true);
       setToken(res.data.token)
       localStorage.setItem('token', res.data.token)
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.response.data.message);
      });

    //------------------------------
  };
  return (
    <div>
      Login
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type={"text"}
        placeholder={"Your Email"}
      ></input>
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type={"text"}
        placeholder={"Your Password"}
      >
      
      </input>
      <button onClick={toLogin}>Login</button>
      <p>{message}</p>
    </div>
  );
};
export default Login;
