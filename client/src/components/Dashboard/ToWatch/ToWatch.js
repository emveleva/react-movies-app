import style from "./ToWatch.module.css";
import { AuthContext } from "../../../contexts/AuthContext";
import { Component, useState, useEffect, useContext } from "react";
import Movie from "../../MovieTemplate/Movie";
import Loader from "../../Loader/Loader";
import { userToWatch } from '../../../services/dashboardService';
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";


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
    console.log(user)
    userToWatch(user._id)
    .then((res) => {
              if (res.message === "success");
              console.log(res)
              this.setState({ moviesToWatch: res.lists.toWatch, loading: false });
              console.log(this.state.moviesToWatch)
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
              this.state.moviesToWatch.map((movie) => <Movie key={movie._id} {...movie} />)}
            {!this.state.moviesToWatch.length === 0 && (
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

