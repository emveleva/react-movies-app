import { Link } from 'react-router-dom';
import style from './Dashboard.module.css';

// add onclick to-watch
// add onclick watched
function Dashboard() {
    return (
      <main className={style.dashboard}>
          <Link to='/dashboard/to-watch'><h1>Movies to watch</h1></Link>
          <Link to='/dashboard/watched'><h1>Already watched</h1></Link>
          
          <Link to='/dashboard/to-watch'><div>
            <img src="/img/to-watch2.png" alt="" srcSet=""/>
            </div></Link>

            <Link to='/dashboard/watched'><div>
            <img src="/img/watched.png" alt="" srcSet=""/>
          </div> </Link>
      </main>

    );
  }
    
    export default Dashboard;

