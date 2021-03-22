import { Fragment } from 'react';
import style from './Watched.module.css';

function Watched() {
  return (
    <main className={style.watched}>
        <h1>Already Watched</h1>          
          <ul>
              <h2>You haven't added any movies yet!</h2>
              <img src="/img/no-entries.png" alt="" srcset=""/>
          </ul>

    </main>

  );
}
    
    export default Watched;

