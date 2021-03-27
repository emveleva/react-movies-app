import { Component } from 'react';

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
        movieService.getAll()
            .then(res => this.setState({ movies: res }))

    }
    componentDidUpdate(prevProps) {
        const genre = this.props.match.params.genre;
        if (prevProps.match.params.genre == genre) {
            return;
        }

        movieService.getAll(genre)
            .then(res => {

                this.setState({ movies: res, currentGenre: genre })
            })

        
    }
    render() {
        let showMovies = this.state.movies.length || 0;
        return (

            <main>
                <ul>
                <h1 className={style.movies}>Movies</h1>
                <Link to='/add-new'><button className={style.addNewButton}>Add New Movie</button></Link>                
                </ul>
                <Genres />
                <div className={style.movies}>
                <ul>                 
                {this.state.movies.map(x =>
                <Movie key={x.id} {...x}/>)}
                    {!showMovies && <><h2>There are no movies of this genre yet!</h2> 
                    <img className={style.noentries} src="/img/no-entries.png" alt="sad emoji"/></>}
                </ul>
             </div>
        </main>
        );
    }
}

export default Movies;