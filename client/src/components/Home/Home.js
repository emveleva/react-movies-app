import style from './Home.module.css';




function Home() {

    return (
        <main className={style.home}>

                  <h1 className={style.welcome}>Welcome to NextMovie!</h1>
                  <video className={style.video} autoPlay src='/img/home2.mp4' type="video/mp4" />
                  {/* <h2>Our movie database is new and still growing. If you are looking for a movie and you can't find it, feel free to add it. </h2> */}
        </main>
        
    );
    }
    
    export default Home

