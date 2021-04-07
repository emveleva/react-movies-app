import { useState } from 'react'
import style from '../SearchBar/SearchBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Redirect } from 'react-router-dom';

export default function SearchBar () {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([])
    const [resetForm, setResetForm] = useState('')

const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:4003/movies/search/${query}`)
    .then(res => res.json())
    .then((res) => {
        console.log('here')
        if (res.message == "found") setMovies(res.movies)
        setQuery('')
                }).catch(err => {
                    console.log(err.message)
                });
            
        }

if (movies) {
    console.log(movies)
    }
return (
    <>
    <form onReset={resetForm} >
        <input className={style.searchInput} type="query" placeholder="Search title..." onChange={(e) => setQuery(e.target.value)} /><button onClick={handleSearchSubmit} className={style.searchButton} type="submit"><FontAwesomeIcon icon={faSearch}/></button>
    </form>
    </>
)
}