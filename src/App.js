import Header from './components/Header'
import Footer from './components/Footer'
import Register from './components/Register'
import Login from './components/Login'
import NotFound from './components/NotFound'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route component={NotFound} />
        </Switch>
        </Router>
      
      <Footer />
    </div>
  );
}

export default App;
