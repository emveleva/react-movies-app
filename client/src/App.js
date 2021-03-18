import Header from './components/Header'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Logout from './components/Logout'
import Profile from './components/Profile'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div className="App">
            <Router>
      <Header />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <Route path='/profile' component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      
      <Footer />
    </div>
  );
}

export default App;
