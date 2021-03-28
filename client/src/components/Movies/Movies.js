import { Component, useEffect, useState } from 'react';

import * as movieService from '../../services/movieService';

import Movie from '../MovieTemplate/Movie';
import Genres from './Genres'
import style from './Movies.module.css'
import { Link } from 'react-router-dom'
import 'firebase/firestore';
import app from "../../config/config";


const DB = app.firestore();

class Movies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            currentGenre: 'all'
        }
    }

    componentDidMount() {
        DB.collection("movies")
          .get()
          .then(movies => {
            const data = movies.docs.map(movie => movie.data());
            this.setState({ movies: data });
          });
      }
    componentDidUpdate(prevProps) {
        const genre = this.props.match.params.genre;
        if (prevProps.match.params.genre == genre) {
            return;
        }

        DB.collection("movies")
          .get()
          .then(movies => {
            const data = movies.docs.map(movie => movie.data());
            this.setState({ movies: data });
            console.log(movies);
            const newMovies = Object.values(movies).filter(movie => movie.genre == genre)
        
        });
    }
    render() {

        return (

            <main>
                <ul>
                <h1 className={style.movies}>Movies</h1>
                <li>Search:</li>   
                <Link to='/add-new'><button className={style.addNewButton}>Add New Movie</button></Link>     
                </ul>
                <Genres />
                <div className={style.movies}>
                <ul>                 
<h2>There are no movies of this genre yet!</h2> 
                    <img className={style.noentries} src="/img/no-entries.png" alt="sad emoji"/>
                </ul>
             </div>
        </main>
        );
    }
    
                    }

export default Movies;