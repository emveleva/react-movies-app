import { NavLink } from 'react-router-dom';
import style from './Genres.module.css'

const Genres = () => {
    return (
        <div className={style.genres}>
            <ul>
                <li className={style.listItem}><NavLink to="/movies/all">All</NavLink></li>
                <li className={style.listItem}><NavLink to="/movies/Action">Action</NavLink></li>
                <li className={style.listItem}><NavLink to="/movies/Adventure">Adventure</NavLink></li>
                <li className={style.listItem}><NavLink to="/movies/Animation">Animation</NavLink></li>
                <li className={style.listItem}><NavLink to="/movies/Comedy">Comedy</NavLink></li>
                <li className={style.listItem}><NavLink to="/movies/Fantasy">Fantasy</NavLink></li>
                <li className={style.listItem}><NavLink to="/movies/Horror">Horror</NavLink></li>
                <li className={style.listItem}><NavLink to="/movies/Sci-Fi">Sci-Fi</NavLink></li>
                <li className={style.listItem}><NavLink to="/movies/Thriller">Thriller</NavLink></li>
                <li className={style.listItem}><NavLink to="/movies/TV-Series">TV-Series</NavLink></li>
            </ul>
        </div>
    );
};

export default Genres;