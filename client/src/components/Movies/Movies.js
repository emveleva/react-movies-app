import { Component } from "react";
import Movie from "../MovieTemplate/Movie";
import Genres from "./Genres";
import style from "./Movies.module.css";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { fetchAllMovies, fetchAllMoviesGenre } from '../../services/movieService';

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      currentGenre: "all",
      loading: true,
    };
  }

  componentDidMount() {
    fetchAllMovies()
      .then((res) => {
        if (res.message) throw new Error(res.message);
        this.setState({ movies: res, loading: false });

        console.log(this.state.movies);
        console.log(this.state.movies.length);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  componentDidUpdate(prevProps) {
    const genre = this.props.match.params.genre;
    console.log(genre);
    if (prevProps.match.params.genre !== genre) {
      this.setState({ loading: true });
      fetchAllMoviesGenre(genre)
        .then((res) => {
          if (res.message) throw new Error(res.message);
          this.setState({ movies: res, currentGenre: genre, loading: false });
          console.log(this.state.movies);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }

  render() {
    return (
      <main>
        <ul>
          <h1 className={style.movies}>Movies</h1>
          <Link to="/movies/add-new">
            <button className={style.addNewButton}>Add New Movie</button>
          </Link>
        </ul>
        <Genres />
        {this.state.loading ? (
          <Loader />
        ) : (
          <div className={style.movies}>
            <ul>
              {this.state.movies.length !== 0 &&
                this.state.movies.map((movie) => (
                  <Movie key={movie._id} {...movie} />
                ))}
              {this.state.movies.length === 0 && (
                <>
                  {" "}
                  <h2>There are no movies of this genre yet!</h2>
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
  }
}

export default Movies;
