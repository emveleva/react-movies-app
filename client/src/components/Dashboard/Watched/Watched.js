import style from './Watched.module.css';

function Watched() {
  // handle back-end
  // get watched
  return (
    <main className={style.watched}>
        <h1>Already Watched</h1>          
          <ul>
              <h2>You haven't added any movies yet!</h2>
              <img src="/img/no-entries.png" alt="" srcSet=""/>
          </ul>

    </main>

  );
}
    
    export default Watched;

