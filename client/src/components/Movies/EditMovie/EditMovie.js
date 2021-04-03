import style from './EditMovie.module.css'
import { AuthContext } from "../../../contexts/AuthContext"
import ErrorHandler from "../../ErrorHandler/ErrorHandler"
import { useState, useContext, useEffect } from "react";
import { Redirect } from 'react-router-dom';

export default function EditMovie({match}) {

    const [movie, setMovie] = useState({});
    const [user, setUser] = useContext(AuthContext);
    const [updatedMovie, setUpdatedMovie] = useState({movie});
    const [errorMessage, setErrorMessage] = useState('');
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        return fetch(`http://localhost:4003/movies/details/edit/${match.params.movieId}`)
                  .then(res => res.json())
                .then((res) => {
                    if (res.message == "success") setMovie(res.movie)
                                        console.log(movie)
                                    }).catch(err => {
                                        console.log(err.message)
                                    });
                        }, []);


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         let movieId = match.params.movieId;
//         let updatedMovie = {}

    

    const handleSubmit = (e) => {
        e.preventDefault();
        let userId = user._id
        console.log(updatedMovie)
        return fetch(`http://localhost:4003/movies/details/edit/${match.params.movieId}`, {
            method: 'POST',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            body: JSON.stringify(updatedMovie) 
        }).then(res => res.json())
        .then((res) => {
            if (res.message == "edited") setFeedback("edited")
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
                        onChange={(e) => setUpdatedMovie({title: e.target.value})}
                        placeholder="Title"
                        required />
                    <p>Year:</p>
                    <input
                        type="year"
                        defaultValue={movie.year}
                        onChange={(e) => setUpdatedMovie({year: e.target.value})}
                        placeholder="2021" />
                    <p>Description:</p>
                    <input 
                        type="description"
                        defaultValue={movie.description}
                        onChange={(e) => setUpdatedMovie({description: e.target.value})}
                        placeholder="A long time ago in a galaxy far, far away..." />
                </div>
                <div className={style.rightSide}>
                    <p>Actors:</p>
                    <input 
                        type="actors"
                        defaultValue={movie.actors}
                        onChange={(e) => setUpdatedMovie({actors: e.target.value})}
                        placeholder="Darth Vader, Luke Skywalker" />
                    <p>Poster URL:</p>
                    <input 
                        type="posterURL"
                        contenteditable="true"
                        defaultValue={movie.posterURL}
                        onChange={(e) => setUpdatedMovie({posterUrl: e.target.value})}
                        placeholder="https://" />
                    <p>Genre:</p>
                    <select name="genre" defaultValue={movie.genre} placeholder="Select genre..."onChange={(e) => setUpdatedMovie({genre: e.target.value})} >
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
    


