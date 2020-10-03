import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import CategoryInfo from '../CatagoryInfo/CatagoryInfo';
import Topbar from '../Topbar/Topbar';
import './Header.css'
const Header = () => {

    const { eventInfo } = useContext(UserContext)
    const [allEventsInfo, setAllEventsInfo] = eventInfo;
    useEffect(() => {
        fetch('http://localhost:4000/getVolunteerData')
            .then(res => res.json())
            .then(data => setAllEventsInfo(data))
    }, [])
    return (
        <div className="header-wrapper" >
            <div>
                <Topbar />
            </div>
            <div className="header-content text-center mt-5 mb-3" >
                <h1>I grow by helping people in need.</h1>
                <div className="input-group mb-3 w-50 m-auto mt-5">
                    <input type="text" className="form-control " placeholder="write your Thing"
                        aria-label="Username" aria-describedby="basic-addon1" />
                    <div className="input-group-prepend ">
                        <button className="btn w-100  btn-danger" >Search</button>
                    </div>
                </div>
            </div>
            <div className="row container mx-auto mt-5 " >
                {
                    allEventsInfo.map(info => <CategoryInfo data={info} ></CategoryInfo>)
                }
            </div>
        </div>
    );
};

export default Header;