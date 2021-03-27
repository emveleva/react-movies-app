import style from './ToWatch.module.css';

function ToWatch() {
    return (
      <main className={style.towatch}>
          <h1>Movies to watch</h1>          
            <ul>
                <h2>You haven't added any movies yet!</h2>
                <img src="/img/no-entries.png" alt="" srcset=""/>
            </ul>

      </main>

    );
  }
    
    export default ToWatch;

