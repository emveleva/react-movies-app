import { Link } from "react-router-dom";
import style from "../MovieTemplate/Movie.module.css";
const Movie = ({ _id, title, posterURL }) => {
  return (
    <li className={style.movie}>
      <h3>{title}</h3>
      <p className="img">
        <img src={posterURL} alt="poster" />
      </p>

      <div className="movie-info">
        <Link to={`/movies/details/${_id}`}>
          <button>Details</button>
        </Link>
      </div>
    </li>
  );
};

export default Movie;
