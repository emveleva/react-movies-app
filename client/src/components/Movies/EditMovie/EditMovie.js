import style from "./EditMovie.module.css";
import ErrorHandler from "../../ErrorHandler/ErrorHandler";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";
import { getMovieToEdit } from '../../../services/movieService'
import { editMoviePost } from "../../../services/movieService";

export default function EditMovie({ match }) {
  const [movie, setMovie] = useState({});
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedYear, setUpdatedYear] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [updatedActors, setUpdatedActors] = useState("");
  const [updatedPosterURL, setUpdatedPosterURL] = useState("");
  const [updatedGenre, setUpdatedGenre] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    getMovieToEdit(match.params.movieId)
      .then((res) => {
        if (res.message === "success") setMovie(res.movie)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [match.params.movieId]);


const handleInput = (e) => {
  if (e.target.value.length === 0){
    setErrorMessage(`${e.target.id} cannot be empty.`)
    setError(true)
  } else {
    setErrorMessage('')
    setError(false)
  }
}



  const handleSubmit = (e) => {    
    e.preventDefault();
    editMoviePost(match.params.movieId, updatedTitle, updatedYear, updatedDescription, updatedPosterURL, updatedGenre)
      .then((res) => {
        if (res.message !== "edited") throw new Error(res.message);
        if (res.message === "edited") setFeedback("next");
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  if (feedback) {
    console.log(feedback);
    return <Redirect to={`/movies/details/${match.params.movieId}`} />;
  }
  return (
    <>
      <ErrorHandler>{errorMessage}</ErrorHandler>
      <main className="form addnew">
        <h1 className="title">Edit Movie Details</h1>
        <div className={style.addnew}>
          <form onSubmit={handleSubmit}>
            <div className={style.leftSide}>
              <p>Title:</p>
              <input
                id="Movie title"
                onInput={handleInput}
                type="title"
                defaultValue={movie.title}
                onChange={(e) => setUpdatedTitle(e.target.value)}
                placeholder="Title"
              />
              <p>Year:</p>
              <input
                id="Movie year"
                onInput={handleInput}
                type="year"
                defaultValue={movie.year}
                onChange={(e) => setUpdatedYear(e.target.value)}
                placeholder="2021"
              />
              <p>Description:</p>
              <div>
                <TextareaAutosize
                  id="Movie description"
                  onInput={handleInput}
                  className={style.textarea}
                  minRows={4}
                  maxRows={8}
                  type="description"
                  defaultValue={movie.description}
                  onChange={(e) => setUpdatedDescription(e.target.value)}
                  placeholder="A long time ago in a galaxy far, far away..."
                />
              </div>
            </div>
            <div className={style.rightSide}>
              <p>Actors:</p>
              <div>
                <TextareaAutosize
                  id="Movie actors"
                  onInput={handleInput}
                  className={style.textarea}
                  minRows={2}
                  maxRows={4}
                  type="actors"
                  defaultValue={movie.actors}
                  onChange={(e) => setUpdatedActors(e.target.value)}
                  placeholder="Darth Vader, Luke Skywalker"
                />
              </div>
              <p>Poster URL:</p>
              <div>
                <TextareaAutosize
                  id="Movie poster"
                  onInput={handleInput}
                  className={style.textarea}
                  minRows={2}
                  maxRows={5}
                  type="posterURL"
                  contenteditable="true"
                  defaultValue={movie.posterURL}
                  onChange={(e) => setUpdatedPosterURL(e.target.value)}
                  placeholder="https://"
                />
              </div>
              <p>Genre:</p>
              <select
                name="genre"
                value={updatedGenre ? updatedGenre : movie.genre}
                onChange={(e) => setUpdatedGenre(e.target.value)}
              >
                <option value="">Select genre...</option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="Animation">Animation</option>
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Horror">Horror</option>
                <option value="Mystery">Mystery</option>
                <option value="Romance">Romance</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Thriller">Thriller</option>
                <option value="TV-Series">TV-Series</option>
              </select>
            </div>
            <div className={style.center}>
              <button disabled={error} type="submit">Edit</button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
