import { Link } from 'react-router-dom';

const Movie = ({
    id,
    title,
    year,
    description,
    actors,
    posterURL,
    likes,
    genre
}) => {

    return (
        <li className="otherMovie">
            <h3>{title}</h3>
            <p className="img"><img src={posterURL} /></p>

            <div className="movie-info">
                <Link to="#"><button><i className="fas fa-heart"></i>Like</button></Link>
                <Link to={`/movies/details/${id}`}><button>Details</button></Link>

            </div>
        </li>
    );
}

export default Movie;