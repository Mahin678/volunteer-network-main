import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import './Topbar.css'
const Topbar = () => {
    const history = useHistory()
    const { userInfo } = useContext(UserContext)
    const [users, setUser] = userInfo;
    const handaleRegister = () => {
        history.push('/afterRegister')
    }
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
                                <NavLink className="nav-link " to="/event" >Events</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/" >Blog</NavLink>
                            </li>
                        </ul>
                        {
                            users.UserName ?
                                <>
                                    <h6 className="m-1" >{users.UserName}</h6>
                                    <img className="ml-2" style={{ height: "60px", borderRadius: "50px" }} src={users.photoURL} alt="user-img" />
                                </>
                                :
                                <>
                                    <button onClick={handaleRegister} className="btn btn-danger mr-4" >Register</button>
                                    <button className="btn btn-success" >Admin</button>
                                </>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Topbar;