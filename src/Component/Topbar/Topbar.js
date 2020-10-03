import React from 'react';
import { NavLink } from 'react-router-dom';
import './Topbar.css'
const Topbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  p-4">
                <div className="container">
                    <img className="navbar-brand" src="https://i.imgur.com/U7HMLBC.png" />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Donations</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/" >Events</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/" >Blog</NavLink>
                            </li>
                        </ul>
                        <button className="btn btn-danger mr-4" >Register</button>
                        <button className="btn btn-success" >Admin</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Topbar;