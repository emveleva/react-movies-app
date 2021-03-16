import NavBar from '../Header/NavBar'
import style from './Header.module.css';
import { NavLink } from 'react-router-dom'

function Header() {
    return (
      <div className={style.Header}>
          <ul className={style.leftSide}>
          <li><img src="/clapperboard.png" alt="movie-logo" srcset=""/></li>
            <li><h1>Next Movie</h1></li>
          </ul>
          <ul className={style.rightSide}>
          <li><button><NavBar>Home</NavBar></button></li>
            <li><NavBar>Register</NavBar></li>
            <li><NavBar>Login</NavBar></li>     
          </ul>
      </div>
    );
  }


export default Header