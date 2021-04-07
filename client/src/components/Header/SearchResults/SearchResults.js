import { Component, useContext, useEffect, useState } from 'react';
import Movie from '../../MovieTemplate/Movie';
import style from './SearchResults.module.css'
import Loader from '../../Loader/Loader'
import { AuthContext } from '../../../contexts/AuthContext';


class SearchResults extends Component {
    static contextType = AuthContext;
    constructor(props) {
        super(props);

        this.state = {
            movies: this.props.location.state.movies,
            loading: false,
            user: this.context
        }
    }

    render() {
        return (
            <main>
                <ul>
                <h1 className={style.results}>Search Results</h1>
                </ul>
                {this.state.loading ? <Loader /> :
                <div className={style.results}>
                <ul>      
                {this.state.movies.length !== 0 && this.state.movies.map(movie => 
                        <Movie key={movie._id} {...movie} />
                    )}           
                       {this.state.movies.length === 0 && <> <h2>There are no movies of this genre yet!</h2> 
                    <img className={style.noentries} src="/img/no-entries.png" alt="sad emoji"/></>}
                </ul>
             </div>}
             
        </main>
        );
    }
    
                    }

export default SearchResults;