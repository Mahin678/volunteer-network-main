import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Register.css';
const Register = () => {
    const { id } = useParams();
    const { userInfo, eventInfo } = useContext(UserContext)
    const [users, setUser] = userInfo;
    const [events, setEvent] = useState([])
    let history = useHistory();
    useEffect(() => {
        fetch('https://dry-bayou-78136.herokuapp.com/getEvent/' + id)
            .then(res => res.json())
            .then(data => setEvent(data))
    }, [id])
    const [inputValue, setInputValue] = useState({
        date: "",
        Descriptions: "",
    })

    const handleOnchangeValue = (e) => {
        const userDetails = { ...inputValue };
        if (e.target.name == "date") {
            userDetails.date = e.target.value;
        }
        else if (e.target.name == "Descriptions") {
            userDetails.Descriptions = e.target.value;
        }
        setInputValue(userDetails)
    }

    const HandleSubmitInfo = (e) => {
        const newUserDetails = { ...users }
        newUserDetails.issuDate = inputValue.date;
        newUserDetails.category = events.placeName;
        newUserDetails.descriptions = inputValue.Descriptions;
        newUserDetails.categoryImg = events.img;
        setUser(newUserDetails)
        fetch('https://dry-bayou-78136.herokuapp.com/addVolunteer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUserDetails),
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    history.push('/userAllTask')
                }
            })
        e.preventDefault();
    }

    return (
        <div className="register-wrapper container" >

            <form onSubmit={HandleSubmitInfo} className="w-50 mt-5 pt-5 mx-auto" >
                <h2>register as volunteer </h2>
                <div className="form-group mt-3">
                    <label htmlFor="Name">Name</label>
                    <input type="text" className="form-control" value={users.UserName} />
                </div>
                <div className="form-group">
                    <label htmlFor="Email">Email address</label>
                    <input type="email" className="form-control" value={users.userEmail} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Date</label>
                    <input required onBlur={handleOnchangeValue} name="date" type="date" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="Descriptions">Descriptions</label>
                    <textarea onBlur={handleOnchangeValue} className="form-control" rows="3" placeholder="Descriptions" name="Descriptions" ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="Organization">Organization books at the library</label>
                    <input value={events.placeName} type="text" className="form-control" />
                </div>

                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
};

export default Register; 