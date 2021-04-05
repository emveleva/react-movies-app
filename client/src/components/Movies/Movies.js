import { Component, useEffect, useState } from 'react';

import * as movieService from '../../services/movieService';

import Movie from '../MovieTemplate/Movie';
import Genres from './Genres'
import style from './Movies.module.css'
import { Link } from 'react-router-dom'


class Movies extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            currentGenre: 'all'
        }
    }

    componentDidMount() {
        return fetch(`http://localhost:4003/movies/all`)
          .then(res => res.json())
        .then((res) => {
            if (res.message) throw new Error(res.message);
            this.setState({movies: res})
            console.log(this.state.movies)
            console.log(this.state.movies.length)
        }).catch(err => {
            console.log(err.message)
        });
    }
    componentDidUpdate(prevProps) {
        const genre = this.props.match.params.genre;
        console.log(genre)
        if (prevProps.match.params.genre !== genre) {
        return fetch(`http://localhost:4003/movies/${genre}`)
          .then(res => res.json())
        .then((res) => {
            if (res.message) throw new Error(res.message);
            this.setState({movies: res, currentGenre: genre})
            console.log(this.state.movies)
        }).catch(err => {
            console.log(err.message)
        });
    
    }
}

    render() {

        return (

            <main>
                <ul>
                <h1 className={style.movies}>Movies</h1>
              
                <Link to='/movies/add-new'><button className={style.addNewButton}>Add New Movie</button></Link>     
                </ul>
                <Genres />
                <div className={style.movies}>
                <ul>      
                {this.state.movies.length !== 0 && this.state.movies.map(movie => 
                        <Movie key={movie._id} {...movie} />
                    )}           
                       {this.state.movies.length === 0 && <> <h2>There are no movies of this genre yet!</h2> 
                    <img className={style.noentries} src="/img/no-entries.png" alt="sad emoji"/></>}
                </ul>
             </div>
        </main>
        );
    }
    
                    }

export default Movies;