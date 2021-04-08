import { useEffect, useState } from "react";
import Movie from "../../MovieTemplate/Movie";
import style from "./SearchResults.module.css";
import Loader from "../../Loader/Loader";
import { withRouter } from "react-router-dom";
import { fetchQuery } from '../../../services/authService'

const SearchResults = (props) => {
  const query = props.match.params.query;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuery(query)
      .then((res) => {
        if (res.message === "found") setMovies(res.movies);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [query]);

  if (movies) {
  }

  return (
    <main>
      <ul>
        <h1 className={style.results}>Search Results</h1>
      </ul>
      {loading ? (
        <Loader />
      ) : (
        <div className={style.results}>
          <ul>
            {movies.length !== 0 &&
              movies.map((movie) => <Movie key={movie._id} {...movie} />)}
            {movies.length === 0 && (
              <>
                {" "}
                <h2>There are no movies with that title in the database!</h2>
                <img
                  className={style.noentries}
                  src="/img/no-entries.png"
                  alt="sad emoji"
                />
              </>
            )}
          </ul>
        </div>
      )}
    </main>
  );
};

export default withRouter(SearchResults);
