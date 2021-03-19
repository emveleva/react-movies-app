import style from './NotFound.module.css';

function NotFound() {
    return (
      <main>
      <div className={style.notFound}>
          <img src="/img/404.png" alt="" srcset=""/>
          <h1>The page you are trying to reach </h1>
          <h1> has not been found!</h1>
      </div>
      </main>
    );
  }


export default NotFound