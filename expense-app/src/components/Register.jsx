// Register.tsx
import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful:", data.message);
        alert("Registration successful");
        // Redirect to the login page
        window.location.href = "/Login";
      } else {
        const data = await response.json();
        setError(data.message || "Registration failed");
      }
    } catch (error) {
      setError("Registration failed");
    }
  };

  return (
    <div className="container">
      <h2 className="title">Register</h2>
      {error && <p className="error">{error}</p>}
      <div className="inputContainer">
        <label className="label">Username:</label>
        <input
          type="text"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="inputContainer">
        <label className="label">Password:</label>
        <input
          type="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="button" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default Register;
