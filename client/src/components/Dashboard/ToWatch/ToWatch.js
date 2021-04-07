import style from "./ToWatch.module.css";
import { AuthContext } from "../../../contexts/AuthContext";
import { useState, useEffect, useContext } from "react";
import Movie from "../../MovieTemplate/Movie";
import Loader from "../../Loader/Loader";

export default function ToWatch() {
  const [user] = useContext(AuthContext);
  const [toWatch, setToWatch] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("second");
    return fetch(`http://localhost:4003/dashboard/${user._id}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "success") setToWatch(res.lists.toWatch);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  console.log(toWatch);

  return (
    <main className={style.towatch}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1>Movies to watch</h1>
          <ul>
            {toWatch &&
              toWatch.map((movie) => <Movie key={movie._id} {...movie} />)}
            {!toWatch && (
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
