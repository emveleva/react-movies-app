import Header from './components/Header'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Logout from './components/Logout'
import Dashboard from './components/Dashboard'
import Movies from './components/Movies'
import AddNew from './components/Movies/AddNew'

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
          <Route path='/movies' component={Movies} />
          <Route path='/add-new' component={AddNew} />
          <Route path='/login' component={Login} />
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
