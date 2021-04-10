import { useContext } from 'react';
import { Link } from "react-router-dom";
import style from "../MovieTemplate/Movie.module.css";
import { useAuth } from "../../contexts/AuthContext";

const Movie = ({ _id, title, posterURL }) => {
  const { user } = useAuth();
  return (
    <li className={style.movie}>
      <h3>{title}</h3>
      {user._id ? <Link to={`/movies/details/${_id}`}><p className="img">
        <img src={posterURL} alt="poster" />
      </p>
        </Link>
        : <p className="img">
        <img src={posterURL} alt="poster" />
      </p>}
      <div className="movie-info">
        {user._id && <Link to={`/movies/details/${_id}`}>
          <button>Details</button>
        </Link>}
      </div>
    </li>
  );
};

export default Movie;
