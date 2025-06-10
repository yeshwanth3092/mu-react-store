import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AppContext } from "./App";
import { useRef } from "react";
export default function Register() {
  const [user, setUser] = useState({});
  const Navigate = useNavigate()
  const { users, setUsers } = useContext(AppContext);
  const nameRef=useRef()
  const emailRef=useRef()
  const passRef=useRef()
  const handleSubmit = () => {
    const userabj={
      name:nameRef.current.value,
      email:emailRef.current.value,
      pass:passRef.current.value,
    }
    setUsers([...users, user]);
    Navigate("/login")
  };
  return (
    <div>
      <h2>Register</h2>
      <p>
        <input
          type="text"
          placeholder="Enter Name"
          ref={nameRef}
         // onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </p>
      <p>
        <input
          type="text"
         // onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter Email Address"
          ref={emailRef}
        />
      </p>
      <p>
        <input
          type="password"
        //  onChange={(e) => setUser({ ...user, pass: e.target.value })}
          placeholder="New Password"
          ref={passRef}
        />
      </p>
      <p>
        <button onClick={handleSubmit}>Submit</button>
      </p>
      <hr />
      <p>
        <Link to="/login">Aready a member? Login Here...</Link>
      </p>
    </div>
  );
}