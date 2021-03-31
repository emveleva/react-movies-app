import { useState, setState, useEffect } from 'react';
import style from './MovieDetails.module.css'

export default function MovieDetails({match}) {
    const [movie, setMovie] = useState({});

        useEffect(() => {
            let movieId = match.params.movieId
            return fetch(`http://localhost:4003/movies/details/${match.params.movieId}`)
                  .then(res => res.json())
                .then((res) => {
                    if (res.message) throw new Error(res.message);
                    setMovie(res)
                    console.log(movie)
                }).catch(err => {
                    console.log(err.message)
                });
    }, []);
    
    // componentDidMount() {
    //     return fetch(`http://localhost:4003/movies/details/${}`)
    //       .then(res => res.json())
    //     .then((res) => {
    //         if (res.message) throw new Error(res.message);
    //         this.setState(movie)
    //         console.log(this.state.movies)
    //         console.log(this.state.movies.length)
    //     }).catch(err => {
    //         console.log(err.message)
    //     });
    // }
 
    return (
        <main className={style.moviedetails}>
             <h1>Movie Details</h1>
            <ul>
            <h2>{movie.title}</h2>
                <div className={style.leftSide}>
  
            <img src={movie.posterURL} alt="movie poster" />
            </div>
            <div className={style.rightSide}>
            <p><span>Year: </span>{movie.year} </p>
            <p><span>Description: </span> {movie.description}</p>
            <p><span>Actors:</span>{movie.actors}</p>
            <p><span>Genre: </span> {movie.genre} </p>

            <li>
            <hr />
            <p>This movie is not added to your movie lists.</p>
            <p><button className={style.towatch}>To Watch</button>
            <button className={style.watched}>Watched</button></p>
            <p><button className={style.editDetails}>Edit Movie Details</button></p>
            </li>
            </div>
            </ul>
        </main>
    );
}
