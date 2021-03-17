import { Fragment } from 'react';
import style from './Profile.module.css';

function Profile() {
    return (
      <main className={style.profile}>
          <li className={style.profileLeft}>
          <h1>Movies to watch</h1>
            <div>
            <img src="/img/to-watch2.png" alt="" srcset=""/>
            </div>

          </li>

          <li className={style.profileRight}>
          <h1>Already watched</h1>
          <div>
            <img src="/img/watched.png" alt="" srcset=""/>
          </div>

          </li>
      </main>

    );
  }
    
    export default Profile

