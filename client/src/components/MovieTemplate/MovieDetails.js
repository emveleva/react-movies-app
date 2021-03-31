import {useEffect, useState} from 'react';
import style from './MovieDetails.module.css'

export default function MovieDetails() {
//     match
// }) => {
//     let [movie, setMovie] = useState({});

//     useEffect(() => {
//         console.log(match.url)
//         movieService.getOne(match.params.movieId)
//             .then(res => setMovie(res));
//     }, []);

    return (
        <main class={style.moviedetails}>
             <h1>Movie Details</h1>
            <ul>
                <div>
            <h2>Title</h2>
            <img src='' alt="movie poster" />
            </div>
            <div>
            <p><span>Year:</span> </p>
            <p><span>Description:</span> </p>
            <p><span>Actors:</span> </p>
            <p><span>Genre: </span> </p>

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
    }
