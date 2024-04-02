import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Adming from "../components/adming/Adming";
import { Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { username: "johnd", password: "m38rmF$" };

    axios
      .post("https://fakestoreapi.com/auth/login", user)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        toast.success("Welcome");
        setLoggedIn(true);
      })
      .catch((err) => {
        toast.error("Username or password is incorrect");
      });
  };

  if (loggedIn) {
    return <Adming />;
  }

  return (
    <div className="form container">
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username*</label>
        <input
          type="text"
          id="username"
          value={"johnd"}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password*</label>
        <input
          type="password"
          id="password"
          value={"m38rmF$"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className="checks" type="checkbox" />
        <label htmlFor="">Remember Me</label>
        <p>Forgot Password?</p>
        <button type="submit">Login</button>
        <button className="btn3">Signup?</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Register;
