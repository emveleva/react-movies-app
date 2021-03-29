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
                    <Header />

                    <AuthProvider>
          <Switch>

        
          <Route path='/' exact component={Home} /> 
          
        
          <Route path='/register' component={Register} />
          <Route path="/movies/details/:movieId" component={MovieDetails} />
          <Route path='/movies/:genre' component={Movies} />
          <PrivateRoute path='/add-new' component={AddNew} />
          <PrivateRoute path='/to-watch' component={ToWatch} />
          <PrivateRoute path='/watched' component={Watched} />
          <Route path='/login' exact component={Login} />
          <PrivateRoute path='/logout' component={Logout} />
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
