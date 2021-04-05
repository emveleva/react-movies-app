import { useState } from 'react'
import style from '../SearchBar/SearchBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar () {
    const [query, setQuery] = useState('');




const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(query)

}

return (
    <>
    <form >
    <input className={style.searchInput} type="query" placeholder="Search title..." onChange={(e) => setQuery(e.target.value)} /><button onClick={handleSearchSubmit} className={style.searchButton} type="submit"><FontAwesomeIcon icon={faSearch}/></button>
    </form>
    </>
)
}