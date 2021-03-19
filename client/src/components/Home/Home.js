import style from './Home.module.css';

function Home() {
    return (
        <main>
            <div className={style.home}>
            {/* if for logged user */}
            <h3>Welcome!</h3>
            <h1>Top Rated Movies</h1>
            </div>
        </main>
        
    );
    }
    
    export default Home

