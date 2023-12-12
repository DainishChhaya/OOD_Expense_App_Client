// Login.tsx
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "../styles/Login.css"; // Import the CSS file for styling
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      console.log("Attempting login with email:", email);
      console.log("Sending request to /api/auth/login");
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        console.log("Login successful");
        alert("Login successful"); // Alert for successful login
        window.location.href = "/AllGroups";
      } else {
        console.error("Login failed");
        alert("Login failed. Please check your email and password."); // Alert for failed login
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login. Please try again later."); // Alert for login error
    }
  };

  // const handleAdminLogin = () => {
  //   // Hardcoded admin credentials
  //   const adminEmail = "admin@example.com";
  //   const adminPassword = "adminPassword";

  //   // Simulate admin login locally
  //   if (email === adminEmail && password === adminPassword) {
  //     console.log("Admin Login successful");
  //     alert("Admin Login successful");
  //     window.location.href = "/Services/PostAdoption/UserResponses";
  //   } else {
  //     console.error("Admin Login failed");
  //     alert("Admin Login failed or you are not an Admin ");
  //   }
  // };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <div className="input-container">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>

      {/* Admin Login section */}

      {/* New user registration text and button */}
      <p>If you are a new user, register here:</p>
      <Link to="/register" className="register-link">
        Register here
      </Link>
    </div>
  );
};

export default Login;
