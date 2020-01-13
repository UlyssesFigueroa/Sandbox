import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

import './App.css';

import { Provider } from "react-redux";
import store from "./store";

// import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";



// import Navbar from "./components/appLayout/Navbar";
// import SignUp from "./components/appLayout/SignUp";
// import SignIn from "./components/appLayout/SignIn";
// import Selection from "./components/appLayout/Selection";
// import PlayerChoices from "./components/appLayout/Playerchoices";
// import TableHeadings from "./components/appLayout/TableHeadings";
// import TableData from "./components/appLayout/TableData";
// import Profile from "./components/appLayout/Profile";
// import PlayerQue from "./components/appLayout/PlayerQue";
// import OpenGames from "./components/appLayout/OpenGames";
// import Welcome from "./components/appLayout/Welcome";

// const choices = ["tackle", "fumble", "reception", "field goal"]


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {/* <Navbar /> */}
            <Route exact path="/" component={Landing} />
            {/* <Route path="/join" exact component={Join} />
            <Route path="/chat" component={Chat} /> */}
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/" component={Welcome} /> */}
            {/* <Route exact path="/opengames" component={OpenGames} /> */}
            
            {/* <Route exact path="/playerque" component={PlayerQue} /> */}
            {/* <Route exact path="/signup" component={SignUp} /> */}
            {/* <Route exact path="/signin" component={SignIn} /> */}
            {/* <Route exact path="/selection" component={Selection} /> */}
            {/* <PlayerChoices choices={choices} /> */}
            {/* <TableHeadings/> */}
            {/* <TableData/> */}
            <Switch>
              
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/join" exact component={Join} />
              <PrivateRoute path="/chat" component={Chat} />
              {/* <PrivateRoute exact path="/profile" component={Profile} /> */}
              
            </Switch>
            
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
