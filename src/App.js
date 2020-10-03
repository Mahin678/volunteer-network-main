import React, { createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Component/Header/Header';
import GoogleSignIn from './Component/GoogleSignIn/GoogleSignIn';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useContext } from 'react';
import Error from './Component/Error/Error';
import Register from './Component/Register/Register';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import { useState } from 'react';

export const UserContext = createContext();

function App() {
  const [users, setUser] = useState({
    UserName: "",
    userEmail: "",
    issuDate: "",
    massage: "",
    catagory: "",
    descriptions: "",
    isAdmin: false,
  })
  return (
    <UserContext.Provider value={{ userInfo: [users, setUser] }}>
      <div className="App-wrapper">
        <Router>
          <Switch>
            <Route path="/login" >
              <GoogleSignIn />
            </Route>
            <PrivateRoute path="/register/:id" >
              <Register />
            </PrivateRoute>
            <Route exact path="/" >
              <Header />
            </Route>
            <Route path="*" >
              <Error />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider >
  );
}

export default App;
