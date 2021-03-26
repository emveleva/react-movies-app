import Header from './components/Header'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Logout from './components/Logout'
import Dashboard from './components/Dashboard'
import ToWatch from './components/Dashboard/ToWatch'
import Watched from './components/Dashboard/Watched'
import Movies from './components/Movies'
import AddNew from './components/Movies/AddNew'
import MovieDetails from './components/Movie/MovieDetails'

import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import './App.css';



function App() {
  return (
    <div className="app">
            <Router>
      <Header />

        <Switch>
          <Route path='/' exact component={Home} /> 
          <Route path='/register' component={Register} />
          <Route path="/movies/details/:movieId" component={MovieDetails} />
          <Route path='/movies/:genre' component={Movies} />
          <Route path='/add-new' component={AddNew} />
          <Route path='/to-watch' component={ToWatch} />
          <Route path='/watched' component={Watched} />
          <Route path='/login' exact component={Login} />
          <Route path='/logout' component={Logout} />
          <Route path='/dashboard' component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      
      <Footer />
    </div>
  );
}

export default App;
