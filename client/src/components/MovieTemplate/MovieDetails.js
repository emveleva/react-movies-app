import { useState, setState, useEffect, useContext } from 'react';
import style from './MovieDetails.module.css'
import { AuthContext } from "../../contexts/AuthContext"

export default function MovieDetails({match}) {
    const [movie, setMovie] = useState({});
    const [user, setUser] = useContext(AuthContext);
    const [toWatch, setToWatch] = useState(false);
    const [watched, setWatched] = useState(false);

    // create function getMovieDetails
        useEffect(() => {
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
    let isOwner = false;
    if (user._id === movie.user || user.username === 'admin'){
        isOwner = true;
    }

    // handle back-end
    // adds movie to to-watch list
    // create function addToWatch
    const handleToWatchSubmit = (e) => {
        e.preventDefault();
        return fetch('http://localhost:4003/dashboard/to-watch', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: (movie)
      }).then(res => res.json())
          .then((res) => {
              if (res.message) throw new Error(res.message);
            setToWatch(true)
          }).catch(err => {
            console.log(err.message)
          });
      }

    // handle back-end
    // adds movie to watched list
    // create function addWatched
      const handleWatchedSubmit = (e) => {
        e.preventDefault();
        return fetch('http://localhost:4003/dashboard/watched', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: (movie)
      }).then(res => res.json())
          .then((res) => {
              if (res.message) throw new Error(res.message);
              setWatched(true)
          }).catch(err => {
            console.log(err.message)
          });
      }
      // delete movie from list
      // create function removeToWatch
      // handle back-end req
      const handleRemoveToWatch = (e) => {
        e.preventDefault();

      }
        // delete movie from list
      // create function removeWatched
      // handle back-end req
      const handleRemoveWatched  = (e) => {
        e.preventDefault();
      }


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
            <p>{!toWatch && <button onClick={handleToWatchSubmit} className={style.towatch}>Add in To-Watch</button>}
            {toWatch && <button onClick={handleRemoveToWatch} className={style.remove}>Remove from To-Watch</button>}
            {!watched && <button onClick={handleWatchedSubmit}className={style.watched}>Add in Watched</button> }
            {watched && <button onClick={handleRemoveWatched} className={style.towatch}>Remove from Watched</button>}
            {isOwner && <button className={style.editDetails}>Edit Movie Details</button>} </p>
            </li>
            </div>
            </ul>
        </main>
    );
}
