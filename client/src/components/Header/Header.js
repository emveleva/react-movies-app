import React, { useContext, useState } from "react";
import NavBar from "../Header/NavBar";
import style from "./Header.module.css";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import SearchBar from "../Header/SearchBar";
import { logout } from '../../services/authService'

export default function Header() {
  const [user, setUser] = useContext(AuthContext);
  const [enteredQuery, setEnteredQuery] = useState(false);
  const [query, setQuery] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    logout()
      .then((res) => {
        setUser({ username: "", _id: "" });
        history.push("/logout");
      })
      .catch((err) => console.log(err));
  };

  const handleQuery = (e) => {
    e.preventDefault();
    if (query) {
      history.push(`/results/${query}`);
      setQuery("");
    }
  };

  return (
    <div className={style.header}>
      <ul className={style.leftSide}>
        <li>
          <img src="/clapperboard.png" alt="movie-logo" srcset="" />
        </li>
        <li>
          <h1>NextMovie</h1>
        </li>
      </ul>
      <ul className={style.rightSide}>
        <li>
          <button>
            <NavLink to="/">
              <NavBar>Home</NavBar>
            </NavLink>
          </button>
        </li>
        {user.username && (
          <>
            <li>
              <NavLink to="/movies/all">
                <NavBar>Movies</NavBar>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">
                <NavBar>Dashboard</NavBar>
              </NavLink>
            </li>
            <li>
              <NavLink to="" onClick={handleSubmit}>
                <NavBar>Logout</NavBar>
              </NavLink>
            </li>
            <li
              onClick={(e) =>
                query ? handleQuery(e) : setEnteredQuery(!enteredQuery)
              }
            >
              <NavBar>
                <SearchBar {...{ query, setQuery, handleQuery }} />
              </NavBar>
            </li>
          </>
        )}

        {!user.username && (
          <>
            <li>
              <NavLink to="/movies/all">
                <NavBar>Movies</NavBar>
              </NavLink>
            </li>
            <li>
              <NavLink to="/register">
                <NavBar>Register</NavBar>
              </NavLink>
            </li>
            <li>
              <NavLink to="/login">
                <NavBar>Login</NavBar>
              </NavLink>
            </li>{" "}
          </>
        )}
      </ul>
    </div>
  );
}
