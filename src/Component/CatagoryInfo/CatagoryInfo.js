import React from 'react';
import { Link } from 'react-router-dom';
import './CatagoryInfo.css'
const CatagoryInfo = ({ data }) => {
    return (
        <div className="col-lg-3  mt-3" >
            <Link to={`/register/${data.id} `} >
                <div className="header-content-img" >
                    <img className="img-headerr" src={data.img} />
                    <div className="title" >
                        <h4 className="text-center" >{data.placeName}</h4>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CatagoryInfo;