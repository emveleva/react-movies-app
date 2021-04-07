import React, { useContext, useState} from "react"
import NavBar from '../Header/NavBar'
import style from './Header.module.css';
import { NavLink, Redirect, Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const [user, setUser] = useContext(AuthContext)
  const [enteredQuery, setEnteredQuery] = useState(false)
  const [query, setQuery] = useState('');
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
    
        const handleQuery = (e) => {
          e.preventDefault();
          if (query) {
              history.push(`movies/results/${query}`);
              setQuery('');
          }
      }

    return (
      
      <div className={style.header}>
          <ul className={style.leftSide}>
          <li><img src="/clapperboard.png" alt="movie-logo" srcset=""/></li>
            <li><h1>NextMovie</h1></li>
          </ul>
          <ul className={style.rightSide}>
          <li><button><NavLink to='/'><NavBar>Home</NavBar></NavLink></button></li>
          {user.username && <><li><NavLink to='/movies/all'><NavBar>Movies</NavBar></NavLink></li>
            <li><NavLink to='/dashboard'><NavBar>Dashboard</NavBar></NavLink></li>
            <li><NavLink to='' onClick={handleSubmit}><NavBar>Logout</NavBar></NavLink></li>
            <li onCLick={(e) => query ? handleQuery(e) : setEnteredQuery(!enteredQuery)}><NavBar>
    <form onSubmit={handleQuery}>
    <input onChange={(e) => setQuery(e.target.value)} name="search" value={query} className={style.searchInput}
                   placeholder="Search title..." type="text"/><button  className={style.searchButton} type="submit"><FontAwesomeIcon icon={faSearch}/></button>
    </form></NavBar></li></>}

            {!user.username && <><li><NavLink to='/register'><NavBar>Register</NavBar></NavLink></li>
            <li><NavLink to='/login'><NavBar>Login</NavBar></NavLink></li> </>}
          </ul>
      </div>
    );
    }
