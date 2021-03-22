import { NavLink } from 'react-router-dom';
import style from './Genres.module.css'

const Genres = () => {
    return (
        <div className={style.genres}>
            <ul>
                <li className={style.listItem}><NavLink to="/genres/all">All</NavLink></li>
                <li className={style.listItem}><NavLink to="/genres/action">Action</NavLink></li>
                <li className={style.listItem}><NavLink to="/genres/adventure">Adventure</NavLink></li>
                <li className={style.listItem}><NavLink to="/genres/animation">Animation</NavLink></li>
                <li className={style.listItem}><NavLink to="/genres/comedy">Comedy</NavLink></li>
                <li className={style.listItem}><NavLink to="/genres/fantsy">Fantasy</NavLink></li>
                <li className={style.listItem}><NavLink to="/genres/horror">Horror</NavLink></li>
                <li className={style.listItem}><NavLink to="/genres/scifi">Sci-Fi</NavLink></li>
                <li className={style.listItem}><NavLink to="/genres/thrilles">Thriller</NavLink></li>
                <li className={style.listItem}><NavLink to="/genres/tvseries">TV-Series</NavLink></li>
            </ul>
        </div>
    );
};

export default Genres;