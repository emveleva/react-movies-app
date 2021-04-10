import style from "./Watched.module.css";
import { AuthContext } from "../../../contexts/AuthContext";
import { useState, useEffect, useContext } from "react";
import Movie from "../../MovieTemplate/Movie";
import Loader from "../../Loader/Loader";
import { userWatched } from '../../../services/dashboardService'

function Watched() {
  const [user] = useContext(AuthContext);
  const [watched, setWatched] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    userWatched(user._id)
      .then((res) => {
        if (res.message === "success") setWatched(res.lists.watched);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <main className={style.watched}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1>Already Watched</h1>
          <ul>
            {watched &&
              watched.sort((a, b) => a.title.localeCompare(b.title)).map((movie) => <Movie key={movie._id} {...movie} />)}
            {watched.length === 0 && (
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
}

export default Watched;
