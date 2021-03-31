import { NavLink } from 'react-router-dom';
import style from './Genres.module.css'

const Genres = () => {
    return (
        <div className={style.genres}>
            <ul>
                <li><NavLink activeClassName={style.listItem} to="/movies/all">All</NavLink></li>
                <li><NavLink activeClassName={style.listItem} to="/movies/Action">Action</NavLink></li>
                <li><NavLink activeClassName={style.listItem} to="/movies/Adventure">Adventure</NavLink></li>
                <li><NavLink activeClassName={style.listItem} to="/movies/Animation">Animation</NavLink></li>
                <li><NavLink activeClassName={style.listItem} to="/movies/Comedy">Comedy</NavLink></li>
                <li><NavLink activeClassName={style.listItem} to="/movies/Drama">Drama</NavLink></li>
                <li><NavLink activeClassName={style.listItem} to="/movies/Fantasy">Fantasy</NavLink></li>
                <li><NavLink activeClassName={style.listItem} to="/movies/Horror">Horror</NavLink></li>
                <li><NavLink activeClassName={style.listItem} to="/movies/Mystery">Mystery</NavLink></li>
                <li><NavLink activeClassName={style.listItem} to="/movies/Romance">Romance</NavLink></li>
                <li><NavLink activeClassName={style.listItem} to="/movies/Sci-Fi">Sci-Fi</NavLink></li>
                <li><NavLink activeClassName={style.listItem} to="/movies/Thriller">Thriller</NavLink></li>
                <li><NavLink activeClassName={style.listItem} to="/movies/TV-Series">TV-Series</NavLink></li>
            </ul>
        </div>
    );
};

export default Genres;