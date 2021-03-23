import NavBar from '../Header/NavBar'
import style from './Header.module.css';
import { NavLink } from 'react-router-dom'

function Header() {
    return (
      <div className={style.header}>
          <ul className={style.leftSide}>
          <li><img src="/clapperboard.png" alt="movie-logo" srcset=""/></li>
            <li><h1>Next Movie</h1></li>
          </ul>
          <ul className={style.rightSide}>
          <li><button><NavLink to='/'><NavBar>Home</NavBar></NavLink></button></li>
            <li><NavLink to='/movies/all'><NavBar>Movies</NavBar></NavLink></li>
            <li><NavLink to='/dashboard'><NavBar>Dashboard</NavBar></NavLink></li>
            <li><NavLink to='/register'><NavBar>Register</NavBar></NavLink></li>
            <li><NavLink to='/login'><NavBar>Login</NavBar></NavLink></li>     
          </ul>
      </div>
    );
  }


export default Header