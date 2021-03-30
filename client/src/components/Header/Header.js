import React, { useContext} from "react"
import NavBar from '../Header/NavBar'
import style from './Header.module.css';
import { NavLink, Redirect, Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext'

export default function Header() {
  const [user, setUser] = useContext(AuthContext)
  const history = useHistory();
const handleSubmit = (e) => {
  e.preventDefault();

    return fetch('http://localhost:4003/logout')
        .then(res => res.json())
        .then(res => {
          setUser({username: '', _id: ''});
          history.push("/logout");
        }).catch(err => console.log(err))
        

}
    return (
      <div className={style.header}>
          <ul className={style.leftSide}>
          <li><img src="/clapperboard.png" alt="movie-logo" srcset=""/></li>
            <li><h1>Next Movie</h1></li>
          </ul>
          <ul className={style.rightSide}>
          <li><button><NavLink to='/'><NavBar>Home</NavBar></NavLink></button></li>
          {user.username && <><li><NavLink to='/movies/all'><NavBar>Movies</NavBar></NavLink></li>
            <li><NavLink to='/dashboard'><NavBar>Dashboard</NavBar></NavLink></li>
            <li><NavLink to='' onClick={handleSubmit}><NavBar>Logout</NavBar></NavLink></li></>}
            {!user.username && <><li><NavLink to='/register'><NavBar>Register</NavBar></NavLink></li>
            <li><NavLink to='/login'><NavBar>Login</NavBar></NavLink></li></>}
          </ul>
      </div>
    );
    }
