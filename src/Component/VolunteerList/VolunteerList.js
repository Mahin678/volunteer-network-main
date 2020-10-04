import React, { useEffect, useState } from 'react';
import './VolunteerList.css';
import { v4 as uuidv4 } from 'uuid';

const VolunteerList = () => {
    const [events, setEvents] = useState({
        placeName: "",
        date: "",
        descriptions: "",

    })
    const [manageEvents, setManageEvents] = useState(false)

    const [data, setData] = useState([]);

    const handleManageEvents = (e) => {
        setManageEvents(e)
    }
    useEffect(() => {
        fetch('http://localhost:4000/getAllVolunteer')
            .then(res => res.json())
            .then(info => setData(info))
    }, [data])

    const handleDeleteEvents = (id) => {
        fetch(`http://localhost:4000/CancelEvents/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                }
            })

    }
    const handleSubmit = (e) => {
        fetch('http://localhost:4000/addEvents', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(events)
        }).then(res => res.json())
            .then(result => console.log(result))
        e.preventDefault();
    }

    const handleOnBlur = (e) => {
        let newCategory = { ...events };
        if (e.target.name == "category") {
            newCategory.placeName = e.target.value;
        }
        else if (e.target.name == "date") {
            newCategory.date = e.target.value;
        }
        else if (e.target.name == "descriptions") {
            newCategory.descriptions = e.target.value;
        }
        newCategory.id = Math.round(Math.random() * 4000 + 1);
        setEvents(newCategory)
    }
    return (
        <div className="volunteerList-wrapper " >
            <div className="" >
                <div className="volunteerHeader p-4 d-flex" >
                    <img src="https://i.imgur.com/U7HMLBC.png" alt="logo" />
                    <h4 className="pl-5 ml-5  m-4">Volunteer register list</h4>
                </div>
            </div>
            <div className="volunteer-content d-flex  w-100"  >
                <div className="w-25 volunteerOptions container ml-3 mt-3" >
                    <div>
                        <button onClick={() => handleManageEvents(false)} className="btn  btn-outline-danger  mb-3"  >
                            <img src="https://i.imgur.com/Y4dWpr1.png" alt="" />
                        Volunteer Register List
                        </button>
                    </div>
                    <div>
                        <button onClick={() => handleManageEvents(true)} className="btn  btn-outline-danger ">
                            <img src="https://i.imgur.com/CL89rYa.png" alt="" />
                                    Add event
                                </button>
                    </div>

                </div>
                <div className="w-75 volunteerData d-flex align-items-center">
                    <div className="volunteerData-wrapper w-100" >
                        {
                            manageEvents == false ? <>
                                <table class="">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email Id</th>
                                            <th scope="col">Registrations Date</th>
                                            <th scope="col">Volunteer List</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map(info =>
                                            <tr key={info.id}>
                                                <td>{info.UserName}</td>
                                                <td>{info.userEmail}</td>
                                                <td>{info.issuDate}</td>
                                                <td>{info.category}</td>
                                                <td className="delete-button">
                                                    <button onClick={() => handleDeleteEvents(info._id)} className='bg-danger ' >
                                                        <img src="https://i.imgur.com/YwDre2M.png" alt="delete-icon" />
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                        }
                                    </tbody>
                                </table>
                            </>

                                :
                                <>

                                    <form onSubmit={handleSubmit}  >
                                        <div className="row container " >
                                            <div className="col-lg-6" >
                                                <div className="title" >
                                                    <div className="form-group" >
                                                        <label>Events Title</label>
                                                        <input
                                                            onBlur={handleOnBlur}
                                                            name="category"
                                                            className="form-control w-100" type="text" placeholder="write" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Discriptions</label>
                                                        <textarea onBlur={handleOnBlur} name="descriptions" className="form-control w-100" type=""> </textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6" >
                                                <div className="title" >
                                                    <div className="form-group">
                                                        <label>Date</label>
                                                        <input onBlur={handleOnBlur} name="date" className="form-control w-100" type="date" />
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>

                                </>



                        }


                    </div>


                </div>
            </div>
        </div >
    );
};

export default VolunteerList;