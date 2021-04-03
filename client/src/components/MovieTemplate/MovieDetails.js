import { useState, setState, useEffect, useContext } from 'react';
import style from './MovieDetails.module.css'
import { AuthContext } from "../../contexts/AuthContext"
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-promise-loader';
import { trackPromise} from 'react-promise-tracker';
import UserOptions from "./UserOptions"


export default function MovieDetails({match}) {
    const [user, setUser] = useContext(AuthContext);
    const [movieId, setMovieId] = useState(match.params.movieId)
    const [isLoading, setIsLoading] = useState(false)
    const [movie, setMovie] = useState({})
    const [toWatch, setToWatch] = useState([]);
    const [watched, setWatched] = useState([]);
    const [inToWatch, setInToWatch] = useState(false);
    const [inWatched, setInWatched] = useState(false);

function fetchMovie() {
        return fetch(`http://localhost:4003/movies/details/${match.params.movieId}`)
        .then(res => res.json())
    }
 function fetchLists() {
        return fetch(`http://localhost:4003/dashboard/${user._id}`)
        .then(res => res.json())
      
    }
    //works
    // create function getMovieDetails
        useEffect(() => {
          setIsLoading(true)
            fetchMovie()
                .then((res) => {
                    if (res.message) throw new Error(res.message);
                    setMovie(res)
                    console.log(movie)
                    console.log(movieId)
            fetchLists()
                    .then((res) => {
                        if (res.message) throw new Error(res.message);
                        setToWatch(res.toWatch)
                        setWatched(res.watched)
                        setIsLoading(false)
                      console.log(toWatch)
                      const foundToWatch = toWatch.find(movie => movie._id.toString() === movieId?.toString())
                      console.log(foundToWatch)
                      const foundWatched = watched.find(movie => movie._id.toString() === movieId?.toString())
                if (foundToWatch) {
                    console.log("set")
                  setInToWatch(true)
                }
                if (foundWatched){
                  setInWatched(true)
                }
                  setIsLoading(false)
                  
          }).catch(err => {
              console.log(err.message)
          })
  }, [match.params.movieId, inToWatch, inWatched])
                // }).catch(err => {
                //     console.log(err.message)
                // });
                
    }, [match.params.movieId]);
    let isOwner = false;
    if (user._id === movie.user || user.username === 'admin'){
        isOwner = true;
    }


    // useEffect(() => {
    //   setIsLoading(true)
    //   fetch(`http://localhost:4003/dashboard/${user._id}`)
    //         .then(res => res.json())
    //       .then((res) => {
    //           if (res.message) throw new Error(res.message);
    //           setToWatch(res.toWatch)
    //           setWatched(res.watched)
    //         console.log(movieId)
    //         const foundToWatch = toWatch.find(movie => movie._id.toString() === movieId?.toString())
    //         const foundWatched = watched.find(movie => movie._id.toString() === movieId?.toString())
    //   if (foundToWatch) {
    //     setInToWatch(true)
    //   }
    //   if (foundWatched){
    //     setInWatched(true)
    //   }
    //     setIsLoading(false)
    //       }).catch(err => {
    //           console.log(err.message)
    //       })
    // }, [])

  

//works
    // create function addToWatch
    const handleToWatchSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:4003/dashboard/to-watch`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({movie, userId: user._id})
      }).then(res => res.json())
          .then((res) => {
            if (res.message =="added") setInToWatch(true)
            console.log(res.message)
          }).catch(err => {
            console.log(err.message)
          });
      }


    // create function addWatched
      const handleWatchedSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:4003/dashboard/watched`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({movie, userId: user._id})
      }).then(res => res.json())
          .then((res) => {
            if (res.message =="added") setInWatched(true)
            console.log(res.message)

          }).catch(err => {
            console.log(err.message)
          });
      
      }
      // delete movie from list
      // create function removeToWatch
      // handle back-end req
      const handleRemoveToWatch = (e) => {
        e.preventDefault();
        fetch(`http://localhost:4003/dashboard/to-watch`, {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({movie, userId: user._id})
      }).then(res => res.json())
          .then((res) => {
              if (res.message == "removed") setInToWatch(false)
              console.log(res.message)
          }).catch(err => {
            console.log(err.message)
          });
      }

      
        // delete movie from list
      // create function removeWatched
      const handleRemoveWatched  = (e) => {
        e.preventDefault();
        fetch(`http://localhost:4003/dashboard/watched`, {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({movie, userId: user._id})
      }).then(res => res.json())
          .then((res) => {
            if (res.message == "removed") setInWatched(false)
          }).catch(err => {
            console.log(err.message)
          });
      }


    return (
        
        <main className={style.moviedetails}>
          {/* <p>{promiseInProgress ? "loading" : "done"}</p> */}
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
            {/* <UserOptions movieId={movieId} movie={movie}/> */}
            {isLoading  ? <Loader promiseTracker={usePromiseTracker} color={'#3d5e61'} background={'rgba(255,255,255,.5)'} /> :
        <><p>This movie is not added to your movie lists.</p>
        <p>{!inToWatch ? <button onClick={handleToWatchSubmit} className="towatch">Add in To-Watch</button>
        : <button onClick={handleRemoveToWatch} className="remove">Remove from To-Watch</button>}
        {!inWatched ? <button onClick={handleWatchedSubmit} className="watched">Add in Watched</button> 
        : inWatched && <button onClick={handleRemoveWatched} className="remove">Remove from Watched</button>}
        {<button className="editDetails">Edit Movie Details</button>} </p> </>}
            </li>
            </div>
            </ul>
        </main>
    );
}
