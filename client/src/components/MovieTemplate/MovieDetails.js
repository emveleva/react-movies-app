import {useEffect, useState} from 'react';
import * as movieService from '../../services/movieService';
import style from './MovieDetails.module.css'

const MovieDetails = ({
    match
}) => {
    let [movie, setMovie] = useState({});

    useEffect(() => {
        console.log(match.url)
        movieService.getOne(match.params.movieId)
            .then(res => setMovie(res));
    }, []);

    return (
        <main class={style.moviedetails}>
             <h1>Movie Details</h1>
            <ul>
                <div>
            <h2>{movie.title}</h2>
            <img src={movie.posterURL} alt="movie poster" />
            </div>
            <div>
            <p><span>Year:</span> {movie.year}</p>
            <p><span>Description:</span> {movie.description}</p>
            <p><span>Actors:</span> {movie.actors}</p>
            <p><span>Genre: </span> {movie.genre}</p>

            <li>
            <hr />
            <p>This movie is not added to your movie lists.</p>
            <p><button className={style.towatch}>To Watch</button>
            <button className={style.watched}>Watched</button></p>
            </li>
            </div>
            </ul>
        </main>
    );
};

export default MovieDetails;