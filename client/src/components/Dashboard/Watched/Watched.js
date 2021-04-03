import style from './Watched.module.css';
import { AuthContext } from "../../../contexts/AuthContext"
import { useState, setState, useEffect, useContext } from 'react';
import Movie from '../../MovieTemplate/Movie';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-promise-loader';
import { trackPromise} from 'react-promise-tracker';

function Watched() {
  // handle back-end
  const [user, setUser] = useContext(AuthContext);
  const [watched, setWatched] = useState([])


  useEffect(() => {
    console.log("second")
    return fetch(`http://localhost:4003/dashboard/${user._id}`)
          .then(res => res.json())
        .then((res) => {
            if (res.message == "success") setWatched(res.lists.watched)
        }).catch(err => {
            console.log(err.message)
        })
  }, [])
  // get watched
  return (
    <main className={style.watched}>
        <h1>Already Watched</h1>          
          <ul>
          {watched && watched.map(movie => 
                        <Movie key={movie._id} {...movie} />
                    )}           
                       {/* {!watched &&  */}
                       <> <h2>There are no movies of this genre yet!</h2> 
                    <img className={style.noentries} src="/img/no-entries.png" alt="sad emoji"/></>
                    {/* } */}
          </ul>

    </main>

  );
}
    
    export default Watched;

