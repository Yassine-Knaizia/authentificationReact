import React, { useState } from "react";
export default function Login({ changeUser }) {
  const [user, setUser] = useState({ email: "", password: "" });
  const handleChange = (evt) => {
    setUser({ ...user, [evt.target.name]: evt.target.value });
  };
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    let response = await fetch("/api/login", {
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
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label for="email">Username or Email</label>
            <input
              type="text"
              value={user.email}
              id="email"
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
        <button type="submit">Login</button>
      </form>
      <a href="api/auth/google">Sign In with Google</a>
    </div>
  );
}
