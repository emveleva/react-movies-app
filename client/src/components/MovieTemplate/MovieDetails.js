import { useState, useEffect, useContext } from "react";
import style from "./MovieDetails.module.css";
import { AuthContext } from "../../contexts/AuthContext";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import {
  fetchMovie,
  fetchLists,
  addToWatch,
  addWatched,
  removeToWatch,
  removeWatched,
} from "../../services/movieService";

export default function MovieDetails({ match }) {
  const [user] = useContext(AuthContext);
  const [movieId] = useState(match.params.movieId);
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const [toWatch, setToWatch] = useState([]);
  const [watched, setWatched] = useState([]);
  const [inToWatch, setInToWatch] = useState(false);
  const [inWatched, setInWatched] = useState(false);

  //get movie and user lists
  useEffect(() => {
    setIsLoading(true);
    console.log(match.params.movieId)
    fetchMovie(match.params.movieId)
      .then((res) => {
        if (res.message === "success") {
          console.log(res.movie);
          setMovie(res.movie);
          setIsLoading(false);
      }})
      .catch((err) => {
        console.log(err.message);
      });
  }, [match.params.movieId]);


  useEffect(() => {
    setIsLoading(true);
    fetchLists(user._id)
      .then((res) => {
        if (res.message === "success") setToWatch(res.lists.toWatch);
        setWatched(res.lists.watched);
        const foundToWatch = res.lists.toWatch.find(
          (mov) => mov._id.toString() === movieId?.toString()
        );
        const foundWatched = res.lists.watched.find(
          (mov) => mov._id.toString() === movieId?.toString()
        );
        if (foundToWatch) setInToWatch(true);
        if (foundWatched) setInWatched(true);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });   
  }, [movie]);

  let isOwner = false;
  if (user._id === movie.user || user.username === "admin") {
    isOwner = true;
  } 

  // adds movie in to-watch
  const handleToWatchSubmit = (e) => {
    e.preventDefault();
    addToWatch({ movie, userId: user._id })
      .then((res) => {
        if (res.message === "added") setInToWatch(true);
        console.log(res.message);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // adds movie to watched
  const handleWatchedSubmit = (e) => {
    e.preventDefault();
    addWatched({ movie, userId: user._id })
      .then((res) => {
        if (res.message === "added") setInWatched(true);
        console.log(res.message);
      })
      .catch((err) => {
        console.log(err.message);
      });
      
  };
  // removes movie from to-watch
  const handleRemoveToWatch = (e) => {
    e.preventDefault();
    removeToWatch({ movie, userId: user._id })
      .then((res) => {
        if (res.message === "removed") setInToWatch(false);
        console.log(res.message);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // removes movie from watched
  const handleRemoveWatched = (e) => {
    e.preventDefault();
    removeWatched({ movie, userId: user._id })
      .then((res) => {
        if (res.message === "removed") setInWatched(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <main className={style.moviedetails}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1>Movie Details</h1>
          <ul>
            <h2>{movie.title}</h2>
            <div className={style.leftSide}>
              <img src={movie.posterURL} alt="movie poster" />
            </div>
            <div className={style.rightSide}>
              <p>
                <span>Year:</span> {movie.year}{" "}
              </p>
              <p>
                <span>Description:</span> {movie.description}
              </p>
              <p>
                <span>Actors:</span> {movie.actors}
              </p>
              <p>
                <span>Genre:</span> {movie.genre}{" "}
              </p>
              <li>
                <hr />
                {!inToWatch && !inWatched && (
                  <p>This movie is not added to your movie lists.</p>
                )}
                {inToWatch && inWatched && (
                  <p>
                    This movie is in your <span>To-Watch</span> and{" "}
                    <span>Already Watched</span> lists.
                  </p>
                )}
                {inToWatch && !inWatched && (
                  <p>
                    This movie is in your <span>To-Watch</span> list.
                  </p>
                )}
                {!inToWatch && inWatched && (
                  <p>
                    This movie is in your <span>Already Watched</span> list.
                  </p>
                )}
                <p>
                  {!inToWatch ? (
                    <button
                      onClick={handleToWatchSubmit}
                      className={style.towatch}
                    >
                      Add in To-Watch
                    </button>
                  ) : (
                    <button
                      onClick={handleRemoveToWatch}
                      className={style.remove}
                    >
                      Remove from To-Watch
                    </button>
                  )}
                  {!inWatched ? (
                    <button
                      onClick={handleWatchedSubmit}
                      className={style.watched}
                    >
                      Add in Watched
                    </button>
                  ) : (
                    inWatched && (
                      <button
                        onClick={handleRemoveWatched}
                        className={style.remove}
                      >
                        Remove from Watched
                      </button>
                    )
                  )}
                  {isOwner && (
                    <Link to={`/movies/details/edit/${match.params.movieId}`}>
                      <button className={style.editDetails}>
                        {" "}
                        Edit Movie Details{" "}
                      </button>{" "}
                    </Link>
                  )}{" "}
                </p>
              </li>
            </div>
          </ul>
        </>
      )}
    </main>
  );
}
