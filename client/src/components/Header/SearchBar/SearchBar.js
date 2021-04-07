import { useState, useContext } from 'react'
import style from '../SearchBar/SearchBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Redirect, useHistory } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext'

export default function SearchBar ({query, setQuery, handleQuery}) {
    const [user, setUser] = useContext(AuthContext);
return (
    <>
    <form onSubmit={handleQuery}>
    <input onChange={(e) => setQuery(e.target.value)} name="search" value={query} className={style.searchInput}
                   placeholder="Search title..." type="text"/><button  className={style.searchButton} type="submit"><FontAwesomeIcon icon={faSearch}/></button>
    </form>
    </>
)
}