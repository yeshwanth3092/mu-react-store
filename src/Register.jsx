import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AppContext } from "./App";
export default function Register() {
  const [user, setUser] = useState({});
  const Navigate = useNavigate()
  const { users, setUsers } = useContext(AppContext);
  const handleSubmit = () => {
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
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </p>
      <p>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter Email Address"
        />
      </p>
      <p>
        <input
          type="password"
          onChange={(e) => setUser({ ...user, pass: e.target.value })}
          placeholder="New Password"
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