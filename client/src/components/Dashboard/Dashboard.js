import { Link } from 'react-router-dom';
import style from './Dashboard.module.css';

function Dashboard() {
    return (
      <main className={style.dashboard}>
          <Link to='/to-watch'><h1>Movies to watch</h1></Link>
          <Link to='/watched'><h1>Already watched</h1></Link>
          
          <Link to='/to-watch'><div>
            <img src="/img/to-watch2.png" alt="" srcSet=""/>
            </div></Link>

            <Link to='/watched'><div>
            <img src="/img/watched.png" alt="" srcSet=""/>
          </div> </Link>
      </main>

    );
  }
    
    export default Dashboard;

