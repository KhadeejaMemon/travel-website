import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";

const Login = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = loginData;

    const response = await axios.post("http://localhost:8000/api/user", {
      name: username,
      password,
    });
    setLoginData({ username: "", password: "" });
    // if (username === "admin" && password === "1234") {
    //   setError("");
    //   navigate("/form");
    // } else {
    //   setError("Invalid username or password");
    // }
  };

  return (
    <div className="text-12">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && (
          <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
        )}

        <label htmlFor="username" className="name">
          Username
        </label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter username"
          value={loginData.username}
          onChange={handleChange}
          className="box"
        />
        <br />

        <label htmlFor="password" className="name">
          Password
        </label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          value={loginData.password}
          onChange={handleChange}
          className="box"
        />
        <br />

        <input type="submit" value="Login" className="btn-2" />
      </form>
    </div>
  );
};

export default Login;
