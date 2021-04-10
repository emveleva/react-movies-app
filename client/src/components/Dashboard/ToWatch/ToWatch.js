import style from "./ToWatch.module.css";
import { AuthContext } from "../../../contexts/AuthContext";
import { Component } from "react";
import Movie from "../../MovieTemplate/Movie";
import Loader from "../../Loader/Loader";
import { userToWatch } from '../../../services/dashboardService';

class ToWatch extends Component {
  static contextType = AuthContext;
  constructor(props) {
    super(props);

    this.state = {
      moviesToWatch: [],
      loading: true,
    };
  }

  componentDidMount() {
    let [user] = this.context;
    userToWatch(user._id)
    .then((res) => {
              if (res.message === "success");
              this.setState({ moviesToWatch: res.lists.toWatch, loading: false });
            })
            .catch((err) => {
              console.log(err.message);
            });
  }

render() {

  return (
    <main className={style.towatch}>
      {this.state.loading ? (
        <Loader />
      ) : (
        <>
          <h1>Movies to watch</h1>
          <ul>
            {this.state.moviesToWatch.length !== 0 &&
              this.state.moviesToWatch.sort((a, b) => a.title.localeCompare(b.title)).map((movie) => <Movie key={movie._id} {...movie} />)}
            {this.state.moviesToWatch.length === 0 && (
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
        </>
      )}
    </main>
  );
}}

export default ToWatch;

