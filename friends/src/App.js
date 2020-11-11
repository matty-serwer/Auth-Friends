import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

import axiosWithAuth from "./utils/axiosWithAuth";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    setLoggedIn(false);
    localStorage.removeItem('token');
    // axiosWithAuth()
    //   .post("/logout")
    //   .then((req) => {
    //     localStorage.removeItem("token"); 
    //   });
  };

  useEffect(() => {
    if(localStorage.getItem('token')){
      setLoggedIn(true);
    }
  }, [])

  return (
    <Router>
      <div className='App'>
        {/* <Link to='/login'>Login</Link>
        <Link to='/login' onClick={logout}>
          Logout
        </Link>
        <Link to='/friendsList'>Friends List</Link> */}
        {isLoggedIn ? (
          <div>
            <Link to='/login' onClick={logout}>
              Logout
            </Link>
            <Link to='/friendsList'>Friends List</Link>
          </div>
        ) : (
          <Link to='/login'>Login</Link>
        )}
      </div>
      <Switch>
        <PrivateRoute exact path='/friendslist' component={FriendsList} />
        <Route
          path='/login'
          render={(props) => {
            return <Login {...props} setLoggedIn={setLoggedIn} />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
