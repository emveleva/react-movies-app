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
import MovieDetails from './components/MovieTemplate/MovieDetails'
import { AuthProvider } from "./contexts/AuthContext"
import PrivateRoute from "./components/PrivateRoute"

import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import './App.css';



function App() {
  return (
    <div className="app">
      <Router>
        <AuthProvider>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />        
          <Route path='/register' component={Register} />
          <PrivateRoute path="/movies/details/:movieId" exact component={MovieDetails} />
          <PrivateRoute path='/movies/add-new' exact component={AddNew} />
          <PrivateRoute path='/movies/:genre' exact component={Movies} />
          <PrivateRoute path='/dashboard/to-watch' component={ToWatch} />
          <PrivateRoute path='/dashboard/watched' component={Watched} />
          <Route path='/login' exact component={Login} />
          <Route path='/logout' component={Logout} />
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
        </AuthProvider>
      </Router>
      
      <Footer />
    </div>
  );
}

export default App;
