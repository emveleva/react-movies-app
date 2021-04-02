import { useState, setState, useEffect, useContext } from 'react';
import style from './MovieDetails.module.css'
import { AuthContext } from "../../contexts/AuthContext"

export default function MovieDetails({match}) {
    const [movieId, setMovieId] = useState(match.params.movieId)
    const [movie, setMovie] = useState({});
    const [user, setUser] = useContext(AuthContext);
    const [toWatch, setToWatch] = useState([]);
    const [watched, setWatched] = useState([]);
    const [inToWatch, setInToWatch] = useState(false);
    const [inWatched, setInWatched] = useState(false);
    const [isLoading, setIsLoading] = useState(true)


    //works
    // create function getMovieDetails
        useEffect(() => {
          console.log("ineffect")
            return fetch(`http://localhost:4003/movies/details/${match.params.movieId}`)
                  .then(res => res.json())
                .then((res) => {
                    if (res.message) throw new Error(res.message);
                    setMovie(res)
                }).catch(err => {
                    console.log(err.message)
                });
                
    }, []);
    let isOwner = false;
    if (user._id === movie.user || user.username === 'admin'){
        isOwner = true;
    }


    useEffect(() => {
      async function resLists() {
        let res = await fetch(`http://localhost:4003/dashboard/${user._id}`);
        let data = await res.json();
        setToWatch(data.toWatch)
        setWatched(data.watched)
        if (toWatch.includes(movieId)) {
          setInToWatch(true)
          console.log("here")
        } else {
          setInToWatch(false)
        }
        if (watched.includes(movieId)) {
          setInWatched(true)
          console.log("here 2")
        } else {
          setInWatched(false)
        }
      }
      resLists()
    }, [inToWatch]);
      // console.log("second")
      // return fetch(`http://localhost:4003/dashboard/${user._id}`)
      //       .then(res => res.json())
      //     .then((res) => {
      //         if (res.message) throw new Error(res.message);
      //         setToWatch(res.toWatch)
      //         setWatched(res.watched)
      //       console.log(toWatch.includes(movieId))
      //       if (toWatch.includes(movieId)) {
      //         setInToWatch(true)
      //         console.log("here")
      //       } else {
      //         setInToWatch(false)
      //       }
      //       if (watched.includes(movieId)) {
      //         setInWatched(true)
      //         console.log("here 2")
      //       } else {
      //         setInWatched(false)
      //       }
      //     }).catch(err => {
      //         console.log(err.message)
      //     });




//works
    // create function addToWatch
    const handleToWatchSubmit = (e) => {
        e.preventDefault();
        return fetch(`http://localhost:4003/dashboard/to-watch`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({movieId: movie._id, userId: user._id})
      }).then(res => res.json())
          .then((res) => {
              if (res.message) throw new Error(res.message);
          }).catch(err => {
            console.log(err.message)
          });
      }


    // create function addWatched
      const handleWatchedSubmit = (e) => {
        e.preventDefault();
        return fetch(`http://localhost:4003/dashboard/watched`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({movieId: movie._id, userId: user._id})
      }).then(res => res.json())
          .then((res) => {
              if (res.message) throw new Error(res.message);
          }).catch(err => {
            console.log(err.message)
          });
      
      }
      // delete movie from list
      // create function removeToWatch
      // handle back-end req
      const handleRemoveToWatch = (e) => {
        e.preventDefault();
        return fetch(`http://localhost:4003/dashboard/to-watch`, {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({movieId: movie._id, userId: user._id})
      }).then(res => res.json())
          .then((res) => {
              if (res.message) throw new Error(res.message);
          }).catch(err => {
            console.log(err.message)
          });
      }

      
        // delete movie from list
      // create function removeWatched
      const handleRemoveWatched  = (e) => {
        e.preventDefault();
        return fetch(`http://localhost:4003/dashboard/watched`, {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({movieId: movie._id, userId: user._id})
      }).then(res => res.json())
          .then((res) => {
              if (res.message) throw new Error(res.message);
          }).catch(err => {
            console.log(err.message)
          });
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
            <p>{!inToWatch && <button onClick={handleToWatchSubmit} className={style.towatch}>Add in To-Watch</button>}
            {inToWatch && <button onClick={handleRemoveToWatch} className={style.remove}>Remove from To-Watch</button>}
            {!inWatched && <button onClick={handleWatchedSubmit}className={style.watched}>Add in Watched</button> }
            {inWatched && <button onClick={handleRemoveWatched} className={style.remove}>Remove from Watched</button>}
            {isOwner && <button className={style.editDetails}>Edit Movie Details</button>} </p>
            </li>
            </div>
            </ul>
        </main>
    );
}
