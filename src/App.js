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
import VolunteerList from './Component/VolunteerList/VolunteerList';
import VolunteerEventAdd from './Component/VolunteerEventAdd/VolunteerEventAdd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConstructionsSite from './Component/ConstructionsSite/ConstructionsSite';

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
        <ToastContainer />
        <Router>
          <Switch>
            <Route path="/home" >
              <Header />
            </Route>
            <Route path="/adminVolunteerList" >
              <VolunteerList />
            </Route>
            <Route path="/adminEventsUpdate" >
              <VolunteerEventAdd />
            </Route>
            <PrivateRoute path="/afterRegister" >
              <Header />
            </PrivateRoute>
            <Route path="/admin-panel" >
              <VolunteerList />
            </Route>
            <Route path="/donations" >
              <ConstructionsSite />
            </Route>
            <Route path="/blog" >
              <ConstructionsSite />
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
