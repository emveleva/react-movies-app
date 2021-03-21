import {useEffect, useState} from 'react';
import * as movieService from '../../services/movieService';

const MovieDetails = ({
    match
}) => {
    let [movie, setMovie] = useState({});

    useEffect(() => {
        movieService.getOne(match.params.movieID)
            .then(res => setMovie(res));
    }, []);

    return (
        <section class="detailsOtherMovie">
            <h3>{movie.name}</h3>
            <p>: {movie.likes} <a href="#"><button class="button"><i class="fas fa-heart"></i>
                    Like</button></a>
            </p>
            <p class="img"><img src={movie.imageURL} /></p>
            <p class="description">{movie.description}</p>
        </section>
    );
};

export default MovieDetails;