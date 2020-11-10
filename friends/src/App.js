import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

import axiosWithAuth from './utils/axiosWithAuth';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const logout = () => {

  }

  return (
    <Router>
      <div className='App'>
        <Link to='/login'>Login</Link>
        <Link to='/login' onClick={logout}>Logout</Link>
        <Link to='/friendsList'>Friends List</Link>
      </div>

      <Switch>
        <PrivateRoute exact path='/friendslist' component={FriendsList} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
