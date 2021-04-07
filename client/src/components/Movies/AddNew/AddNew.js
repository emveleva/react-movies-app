import style from "./AddNew.module.css";
import { AuthContext } from "../../../contexts/AuthContext";
import ErrorHandler from "../../ErrorHandler/ErrorHandler";
import { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";

export default function AddNew() {
  const [user] = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [actors, setActors] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [genre, setGenre] = useState("Select genre...");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieId, setMovieId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let userId = user._id;
    return fetch("http://localhost:4003/movies/add-new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        title,
        year,
        description,
        actors,
        posterURL,
        genre,
        user: userId,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message !== "added") throw new Error(res.message);
        if (res.message === "added") setMovieId(res.movieId)
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };

  if (movieId !== "") {
    return <Redirect to={`/movies/details/${movieId}`} />;
  }
  return (
    <>
      <ErrorHandler>{errorMessage}</ErrorHandler>
      <main className="form addnew">
        <h1 className="title">Add New Movie</h1>
        <div className={style.addnew}>
          <form onSubmit={handleSubmit}>
            <div className={style.leftSide}>
              <p>Title:</p>
              <input
                type="title"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
              />
              <p>Year:</p>
              <input
                type="year"
                onChange={(e) => setYear(e.target.value)}
                placeholder="2021"
              />
              <p>Description:</p>
              <div>
                <TextareaAutosize
                  className={style.textarea}
                  minRows={4}
                  maxRows={8}
                  type="description"
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="A long time ago in a galaxy far, far away..."
                />
              </div>
            </div>
            <div className={style.rightSide}>
              <p>Actors:</p>
              <div>
                <TextareaAutosize
                  className={style.textarea}
                  minRows={2}
                  maxRows={4}
                  type="actors"
                  onChange={(e) => setActors(e.target.value)}
                  placeholder="Darth Vader, Luke Skywalker"
                />
              </div>
              <p>Poster URL:</p>
              <div>
                <TextareaAutosize
                  className={style.textarea}
                  minRows={2}
                  maxRows={5}
                  type="posterURL"
                  onChange={(e) => setPosterURL(e.target.value)}
                  placeholder="https://"
                />
              </div>
              <p>Genre:</p>
              <select
                name="genre"
                placeholder="Select genre..."
                onChange={(e) => setGenre(e.target.value)}
              >
                <option value="Select genre...">Select genre...</option>
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
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
