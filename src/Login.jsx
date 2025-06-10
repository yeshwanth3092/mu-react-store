import React from "react";
import { Link } from "react-router-dom";
import {useState,useContext} from "react";
import { AppContext } from "./App";


export default function Login() {
  const {user,setUser} = useContext(AppContext);

  const handlesubmit =() =>{
    console.log(user.name);
    console.log(user.email);
    
  };
    
  return (
    <div>
      <h2>Login Form</h2>
      <p><input type="text" /></p>
      <p><input type="password" /></p>
      <p><button onClick={handlesubmit}>Login</button></p>
      <hr />
      <p>
        <Link to="/register">Create Account</Link>
      </p>
    </div>
  );
}