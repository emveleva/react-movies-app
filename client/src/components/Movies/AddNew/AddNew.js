import style from './AddNew.module.css'
import Movie from '../../MovieTemplate/Movie';
import * as movieService from '../../../services/movieService';
import app from "../../../config/config";
import { useAuth } from "../../../contexts/AuthContext"
import 'firebase/firestore';
import { useState } from "react";

const DB = app.firestore();


function AddNew() {
    const [genre, setGenre] = useState('Select genre...');
    function onSelectChange(e) {
        setGenre(e.target.value);
      }

    const { currentUser } = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()
        const { title, year, description, actors, posterURL } = e.target.elements;
        const res = await DB.collection('movies').add({
                title: title.value,
                year: year.value, 
                actors: actors.value, 
                description: description.value, 
                posterURL: posterURL.value,
                genre,
                user: currentUser.uid,
          }).then(createdMovie => console.log(createdMovie))
          
          .catch(error => 
                     console.log(error))
        }
        
    return (
        <main className='form addnew'>
            <h1>Add New Movie</h1>
            <div className={style.addnew}>
            <form onSubmit={handleSubmit}>
                <div className={style.leftSide}>
                    <p>Title:</p>
                    <input type="title" placeholder="Title" name="title" required />
                    <p>Year:</p>
                    <input type="year" placeholder="2021" name="year" required />
                    <p>Description:</p>
                    <input type="description" placeholder="Once upon a time..." name="description" required/>
                </div>
                <div className={style.rightSide}>
                    <p>Actors:</p>
                    <input type="actors" placeholder="Brad Pitt" name="actors" required />

                    <p>Poster URL:</p>
                    <input type="posterURL" placeholder="https://" name="posterURL" required />
            
                    <p>Genre:</p>
                    {/* <input type="genre" placeholder="Action" name="genre" /> */}
                    <select name="genre"  placeholder="Select genre..." value={genre} onChange={onSelectChange} required>
                        <option value="Select genre..." selected disabled hidden>Select genre...</option>
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
                    <button>Add</button>
                </div>
            </form>
            </div>
        </main>
    );
    }
    
    export default AddNew

