import { Component, useContext, useEffect, useState } from 'react';
import Movie from '../../MovieTemplate/Movie';
import style from './SearchResults.module.css'
import Loader from '../../Loader/Loader'
import { AuthContext } from '../../../contexts/AuthContext';


export default function SearchResults () {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch(`http://localhost:4003/movies/search/results/${query}`)
    .then(res => res.json())
    .then((res) => {
        console.log('here')
        if (res.message == "found") setMovies(res.movies)
        setQuery('')
        setLoading(false)
        console.log('here')
                }).catch(err => {
                    console.log(err.message)
                });
            
        }, [query])
  


        return (
            <main>
                <ul>
                <h1 className={style.results}>Search Results</h1>
                </ul>
                {loading ? <Loader /> :
                <div className={style.results}>
                <ul>      
                {movies.length !== 0 && movies.map(movie => 
                        <Movie key={movie._id} {...movie} />
                    )}           
                       {movies.length === 0 && <> <h2>There are no movies of this genre yet!</h2> 
                    <img className={style.noentries} src="/img/no-entries.png" alt="sad emoji"/></>}
                </ul>
             </div>}
             
        </main>
        );
    }
    
                    
