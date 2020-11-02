import React, { useState } from "react";
export default function Register({ changeUser }) {
  const [user, setUser] = useState({ username: "", email: "", password: "" });
  const handleChange = (evt) => {
    setUser({ ...user, [evt.target.name]: evt.target.value });
  };
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    let response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(user),
    });
    let data = await response.json();
    console.log(data);
    let loginUser = data.user;
    if ("username" in loginUser) {
      changeUser(loginUser);
    } else {
      console.log("Failed to login");
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label for="username">Username</label>
            <input
              type="text"
              value={user.username}
              name="username"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label for="name">Email</label>
            <input
              type="email"
              value={user.email}
              name="email"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label for="password">Password</label>
            <input
              type="password"
              value={user.password}
              name="password"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit">Register</button>
      </form>
      <a href="/login">Login</a>
    </div>
  );
}
