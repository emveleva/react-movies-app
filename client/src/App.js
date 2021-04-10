import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Logout from "./components/Logout";
import Dashboard from "./components/Dashboard";
import ToWatch from "./components/Dashboard/ToWatch";
import Watched from "./components/Dashboard/Watched";
import Movies from "./components/Movies";
import AddNew from "./components/Movies/AddNew";
import MovieDetails from "./components/MovieTemplate/MovieDetails";
import EditMovie from "./components/Movies/EditMovie/EditMovie";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import SearchResults from "./components/Header/SearchResults/";

import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <AuthProvider>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
            <Route
              path="/movies/details/:movieId"
              exact
              component={MovieDetails}
            />
            <PrivateRoute path="/results/:query" component={SearchResults} />
            <PrivateRoute
              path="/movies/details/edit/:movieId"
              exact
              component={EditMovie}
            />
            <PrivateRoute path="/movies/add-new" exact component={AddNew} />
            <Route path="/movies/:genre" exact component={Movies} />
            <PrivateRoute path="/dashboard/to-watch" component={ToWatch} />
            <PrivateRoute path="/dashboard/watched" component={Watched} />
            <Route path="/login" exact component={Login} />
            <Route path="/logout" component={Logout} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </AuthProvider>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
