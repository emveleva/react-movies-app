import style from './AddNew.module.css'
import Movie from '../../MovieTemplate/Movie';
import * as movieService from '../../../services/movieService';
import { AuthContext } from "../../../contexts/AuthContext"
import ErrorHandler from "../../ErrorHandler/ErrorHandler"
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom"

function AddNew() {
    const [user, setUser] = useContext(AuthContext);
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');
    const [actors, setActors] = useState('');
    const [posterURL, setPosterURL] = useState('');
    const [genre, setGenre] = useState('Select genre...');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let userID = user._id
        return fetch('http://localhost:4003/movies/add-new', {
            method: 'POST',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            body: JSON.stringify({title, year, description, actors, posterURL, genre, user: userID}) 
        }).then(res => res.json())
        .then((res) => {
            if (res.message) throw new Error(res.message);
        }).catch(err => {
            setErrorMessage(err.message)
        });
    
    }
    // function onSelectChange(e) {
    //     setGenre(e.target.value);
    //   }

    // const { currentUser } = useAuth()

    // async function handleSubmit(e) {
    //     e.preventDefault()
    //     const { title, year, description, actors, posterURL } = e.target.elements;
    //     const res = await DB.collection('movies').add({
    //             title: title.value,
    //             year: year.value, 
    //             actors: actors.value, 
    //             description: description.value, 
    //             posterURL: posterURL.value,
    //             genre,
    //             user: currentUser.uid,
    //       }).then(createdMovie => 
    //         history.push(`/movies/details/${createdMovie.uid}`))

          
    //       .catch(error => 
    //                  console.log(error))
    //     }
        
    return (
        <>
        <ErrorHandler>{errorMessage}</ErrorHandler>
        <main className='form addnew'>
            <h1>Add New Movie</h1>
            <div className={style.addnew}>
            <form onSubmit={handleSubmit}>
                <div className={style.leftSide}>
                    <p>Title:</p>
                    <input 
                        type="title"
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title"
                        required />
                    <p>Year:</p>
                    <input
                        type="year"
                        onChange={(e) => setYear(e.target.value)}
                        placeholder="2021" />
                    <p>Description:</p>
                    <input 
                        type="description"
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="A long time ago in a galaxy far, far away..." />
                </div>
                <div className={style.rightSide}>
                    <p>Actors:</p>
                    <input 
                        type="actors"
                        onChange={(e) => setActors(e.target.value)}
                        placeholder="Darth Vader, Luke Skywalker" />
                    <p>Poster URL:</p>
                    <input 
                        type="posterURL"
                        onChange={(e) => setPosterURL(e.target.value)}
                        placeholder="https://" />
                    <p>Genre:</p>
                    <select name="genre"  onChange={(e) => setGenre(e.target.value)} >
                        <option value="Action">Action</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Animation">Animation</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Drama">Drama</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Horror">Horror</option>
                        <option value="Romance">Romance</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                        <option value="Thriller">Thriller</option>
                        <option value="TV-Series">TV-Series</option>
                    </select>
                </div>
                <div className={style.center}>
                    <button type="submit" >Add</button>
                </div>
            </form>
            </div>
        </main>
        </>
    );
    }
    
    export default AddNew

