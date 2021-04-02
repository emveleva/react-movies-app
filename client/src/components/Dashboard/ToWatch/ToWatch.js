import style from './ToWatch.module.css';
import { AuthContext } from "../../../contexts/AuthContext"
import { useState, setState, useEffect, useContext } from 'react';
import Movie from '../../MovieTemplate/Movie';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-promise-loader';
import { trackPromise} from 'react-promise-tracker';

export default function ToWatch() {

  // handle back-end
  // getToWatch
    const [user, setUser] = useContext(AuthContext);
    const [toWatch, setToWatch] = useState(null)

    // const [lists, setLists] = useState([])
    // const { promiseInProgress } = usePromiseTracker();
    // const loadData = async () => {
    // const getListsFromBE = await fetch(`http://localhost:4003/dashboard/${user._id}`)
    // setLists(await getListsFromBE.json())}

    // useEffect(() => {
    //   trackPromise(loadData());
    //   return () => [];


    // }, [])
      useEffect(() => {
      console.log("second")
      return fetch(`http://localhost:4003/dashboard/${user._id}`)
            .then(res => res.json())
          .then((res) => {
              if (res.message) throw new Error(res.message);
              setToWatch(res.toWatch)
          }).catch(err => {
              console.log(err.message)
          })
    }, [])

    // if (!promiseInProgress){
    //   console.log(lists.toWatch)
    //   if (lists.toWatch.length !== 0){
    //     setToWatch(true)
    //   }

    // }
    console.log(toWatch)

    return (
      <main className={style.towatch}>
        {/* {promiseInProgress && <Loader promiseTracker={usePromiseTracker} color={'#3d5e61'} background={'rgba(255,255,255,.5)'} />} */}
          <h1>Movies to watch</h1>          
            <ul>
            {/* {promiseInProgress ? "loading" : lists.toWatch} */}
            {toWatch && toWatch.map(movie => 
                        <Movie key={movie._id} {...movie} />
                    )}           
                       {!toWatch && <> <h2>There are no movies of this genre yet!</h2> 
                    <img className={style.noentries} src="/img/no-entries.png" alt="sad emoji"/></>}
            </ul>

      </main>

    );
  }
