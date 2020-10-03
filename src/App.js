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
import ShowUserPersonalInfo from './Component/ShowUserPersonalInfo/ShowUserPersonalInfo';

export const UserContext = createContext();

function App() {
  const [users, setUser] = useState({
    UserName: "",
    userEmail: "",
    issuDate: "",
    massage: "",
    category: "",
    descriptions: "",
    isAdmin: false,
  })
  const [allEventsInfo, setAllEventsInfo] = useState([])
  return (
    <UserContext.Provider value={{ userInfo: [users, setUser], eventInfo: [allEventsInfo, setAllEventsInfo] }}>
      <div className="App-wrapper">
        <Router>
          <Switch>
            <Route path="/home" >
              <Header />
            </Route>
            <PrivateRoute path="/event" >
              <ShowUserPersonalInfo />
            </PrivateRoute>
            <Route path="/login" >
              <GoogleSignIn />
            </Route>
            <Route path="/userAllTask" >
              <ShowUserPersonalInfo />
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
