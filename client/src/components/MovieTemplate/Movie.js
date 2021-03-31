import { Link } from 'react-router-dom';

const Movie = ({
    _id,
    title,
    year,
    description,
    actors,
    posterURL,
    genre, 
    user
}) => {

    return (
        <li className="otherMovie">
            <h3>{title}</h3>
            <p className="img"><img src={posterURL} /></p>

            <div className="movie-info">
                <Link to={`/movies/details/${_id}`}><button>Details</button></Link>

            </div>
        </li>
    );
}

export default Movie;