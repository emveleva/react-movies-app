import style from './EditMovie.module.css'
import { AuthContext } from "../../../contexts/AuthContext"
import ErrorHandler from "../../ErrorHandler/ErrorHandler"
import { useState, useContext, useEffect } from "react";
import { Redirect } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';

export default function EditMovie({match}) {

    const [movie, setMovie] = useState({});
    const [user, setUser] = useContext(AuthContext);
    const [updatedTitle, setUpdatedTitle] = useState(movie.title);
    const [updatedYear, setUpdatedYear] = useState(movie.year)
    const [updatedDescription, setUpdatedDescription] = useState(movie.description)
    const [updatedActors, setUpdatedActors] = useState(movie.actors)
    const [updatedPosterURL, setUpdatedPosterURL] = useState(movie.posterURL)
    const [updatedGenre, setUpdatedGenre] = useState(movie.genre)
    const [errorMessage, setErrorMessage] = useState('');
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        return fetch(`http://localhost:4003/movies/details/edit/${match.params.movieId}`)
            .then(res => res.json())
                .then((res) => {
                    if (res.message == "success") setMovie(res.movie)
                        console.log(res.movie)
                            }).catch(err => {
                                console.log(err.message)
                            });
                    }, []);




    const handleSubmit = (e) => {
        e.preventDefault();
        return fetch(`http://localhost:4003/movies/details/edit/${match.params.movieId}`, {
            method: 'POST',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            body: JSON.stringify({title: updatedTitle, year: updatedYear, description: updatedDescription, actors: updatedActors, posterURL: updatedPosterURL, genre: updatedGenre}) 
        }).then(res => res.json())
        .then((res) => {
            if (res.message !== "edited") throw new Error(res.message)
            if (res.message == "edited") setFeedback('next')
        }).catch(err => {
            setErrorMessage(err.message)
        });
    }
    

  if (feedback) {
      console.log(feedback)
      return <Redirect to={`/movies/details/${match.params.movieId}`} />;
  }
    return (
        <>
        <ErrorHandler>{errorMessage}</ErrorHandler>
        <main className='form addnew'>
            <h1 className="title">Edit Movie Details</h1>
            <div className={style.addnew}>
            <form onSubmit={handleSubmit}>
                <div className={style.leftSide}>
                    <p>Title:</p>
                    <input 
                        type="title"
                        defaultValue={movie.title}
                        onChange={(e) => setUpdatedTitle(e.target.value)}
                        placeholder="Title"
                         />
                    <p>Year:</p>
                    <input
                        type="year"
                        defaultValue={movie.year}
                        onChange={(e) => setUpdatedYear(e.target.value)}
                        placeholder="2021" />
                    <p>Description:</p>
                    <div><TextareaAutosize
                        minRows={4}
                        maxRows={8} 
                        type="description"
                        defaultValue={movie.description}
                        onChange={(e) => setUpdatedDescription(e.target.value)}
                        placeholder="A long time ago in a galaxy far, far away..." />
                </div>
                </div>
                <div className={style.rightSide}>
                    <p>Actors:</p>
                    <div>
                    <TextareaAutosize 
                        minRows={2}
                        maxRows={4}
                        type="actors"
                        defaultValue={movie.actors}
                        onChange={(e) => setUpdatedActors(e.target.value)}
                        placeholder="Darth Vader, Luke Skywalker" /></div>
                    <p>Poster URL:</p>
                    <div>
                    <TextareaAutosize 
                        minRows={2}
                        maxRows={5}
                        type="posterURL"
                        contenteditable="true"
                        defaultValue={movie.posterURL}
                        onChange={(e) => setUpdatedPosterURL(e.target.value)}
                        placeholder="https://" /></div>
                    <p>Genre:</p>
                    <select name="genre" value={updatedGenre ? updatedGenre : movie.genre} onChange={(e) => setUpdatedGenre(e.target.value)} >
                        <option value="Select genre..." >Select genre...</option>
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
                    <button type="submit" >Edit</button>
                </div>
            </form>
            </div>
        </main>
        </>
    );
    }
    


