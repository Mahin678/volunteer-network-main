import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import { FakeData } from '../../FakeData/FakeData';
import './Register.css'
const Register = () => {
    const { id } = useParams();
    const GetplaceInfo = FakeData.find(data => data.id == id)
    const { userInfo } = useContext(UserContext)
    const [users, setUser] = userInfo;

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
        newUserDetails.catagory = GetplaceInfo.placeName;
        newUserDetails.descriptions = inputValue.Descriptions;
        setUser(newUserDetails)
        e.preventDefault();
    }

    console.log(users);
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
                    <input onBlur={handleOnchangeValue} name="date" type="date" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="Descriptions">Descriptions</label>
                    <textarea onBlur={handleOnchangeValue} className="form-control" rows="3" placeholder="Descriptions" name="Descriptions" ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="Organization">Organization books at the library</label>
                    <input value={GetplaceInfo.placeName} type="text" className="form-control" />
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