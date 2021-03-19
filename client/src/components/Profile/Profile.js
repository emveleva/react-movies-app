import { Fragment } from 'react';
import style from './Profile.module.css';

function Profile() {
    return (
      <main className={style.profile}>
          <h1>Movies to watch</h1>
          <h1>Already watched</h1>
          
            <div>
            <img src="/img/to-watch2.png" alt="" srcset=""/>
            </div>

          <div>
            <img src="/img/watched.png" alt="" srcset=""/>
          </div>
      </main>

    );
  }
    
    export default Profile

