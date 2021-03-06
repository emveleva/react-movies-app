import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Redirect } from "react-router-dom";
import ErrorHandler from "../ErrorHandler/ErrorHandler";
import { registerUser } from "../../services/authService";

export default function Register() {
  const [user, setUser] = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);
  const [rePassword, setRePassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(username, password, rePassword)
      .then((res) => {
        if (res.message) throw new Error(res.message);
        setUser({
          _id: res.user._id,
          username: res.user.username,
          toWatch: res.user.toWatch,
          watched: res.user.watched,
        });
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  if (user.username !== "") {
    return <Redirect to="/" />;
  }
  return (
    <>
      <ErrorHandler>{errorMessage}</ErrorHandler>
      <main className="form">
        <h1 className="title">Register</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <p>Username:</p>
            <input
              type="username"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div>
            <p>Password:</p>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div>
            <p>Repeat Password:</p>
            <input
              type="password"
              onChange={(e) => setRePassword(e.target.value)}
              placeholder="Repeat password"
            />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </main>
    </>
  );
}
