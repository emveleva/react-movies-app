import style from './Header.module.css';
import { NavLink } from 'react-router-dom'

function Header() {
    return (
      <div className={style.Header}>
          <ul>
            <li><img src="/clapperboard.png" alt="movie-logo" srcset=""/></li>
            <li><h1>Next Movie</h1></li> 
        </ul>
               
      </div>
    );
  }


export default Header