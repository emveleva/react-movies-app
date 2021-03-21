import style from './Home.module.css';

import { Component } from 'react';

import * as movieService from '../../services/movieService';

import Movie from '../Movie/Movie';


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
        }
    }

    componentDidMount() {
        movieService.getAll()
            .then(res => this.setState({ movies: res }))

    }
    render() {
        return (
            <main>
             <div className={style.home}>

             <h3>Welcome!</h3>
                  <h1>Top Rated Movies</h1>
                <ul> {this.state.movies.map(x =>
                <Movie key={x.id} {...x}/>)}
                </ul>

             </div>
        </main>
        );
    }
}

// function Home(props) {
//     return (
//         
        
//     );
//     }
    
    export default Home

