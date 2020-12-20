import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const VolunteerEventAdd = () => {
	const [events, setEvents] = useState({
		placeName: '',
		date: '',
		descriptions: '',
		available: '',
	});

	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('http://localhost:4000//getAllVolunteer')
			.then((res) => res.json())
			.then((info) => setData(info));
	}, [data]);
	console.log(events);
	const handleSubmit = (e) => {
		fetch('http://localhost:4000/addEvents', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(events),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result) {
					toast.success(
						'Successfully added Category and now go to home for see that '
					);
				}
			});
		e.preventDefault();
	};

	const handleOnBlur = (e) => {
		let newCategory = { ...events };
		if (e.target.name == 'category') {
			newCategory.placeName = e.target.value;
		} else if (e.target.name == 'date') {
			newCategory.date = e.target.value;
		} else if (e.target.name == 'descriptions') {
			newCategory.descriptions = e.target.value;
		} else if (e.target.name == 'img') {
			newCategory.img = e.target.value;
		} else if (e.target.name == 'available') {
			newCategory.available = e.target.value;
		}
		newCategory.id = Math.round(Math.random() * 4000 + 1);
		setEvents(newCategory);
	};
	return (
		<div className="volunteerList-wrapper ">
			<div className="">
				<div className="volunteerHeader p-4 d-flex">
					<Link to={'/home'}>
						<img src="https://i.imgur.com/U7HMLBC.png" alt="logo" />
					</Link>
					<h4 className="pl-5 ml-5  m-4">Volunteer register list</h4>
				</div>
			</div>
			<div className="volunteer-content d-flex  w-100">
				<div className="w-25 volunteerOptions container ml-3 mt-3">
					<div>
						<NavLink
							activeStyle={{
								fontWeight: 'bold',
								color: 'Blue',
							}}
							to="/adminVolunteerList"
						>
							<p className="    mb-3">
								<img src="https://i.imgur.com/Y4dWpr1.png" alt="" />
								Volunteer Register List{' '}
							</p>
						</NavLink>
					</div>
					<div>
						<NavLink
							activeStyle={{
								fontWeight: 'bold',
								color: 'Blue',
							}}
							to="/adminEventsUpdate"
						>
							<p className="   ">
								<img src="https://i.imgur.com/CL89rYa.png" alt="" />
								Add event
							</p>
						</NavLink>
					</div>
				</div>
				<div className="w-75 volunteerData d-flex align-items-center">
					<div className="volunteerData-wrapper w-100">
						<>
							<form onSubmit={handleSubmit} className="">
								<div className="row container">
									<div className="col-lg-6">
										<div className="title">
											<div className="form-group">
												<label>Events Title</label>
												<input
													required
													onBlur={handleOnBlur}
													name="category"
													className="form-control w-100"
													type="text"
													placeholder="write Events"
												/>
											</div>
											<div className="form-group">
												<label>Available </label>
												<input
													required
													onBlur={handleOnBlur}
													name="available"
													className="form-control w-100"
													type="number"
													placeholder="write Events"
												/>
											</div>
											<div className="form-group">
												<label>Discriptions</label>
												<textarea
													onBlur={handleOnBlur}
													name="descriptions"
													placeholder="Description"
													className="form-control w-100"
													type=""
												>
													{' '}
												</textarea>
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="title">
											<div className="form-group">
												<label>Date</label>
												<input
													required
													onBlur={handleOnBlur}
													name="date"
													className="form-control w-100"
													type="date"
												/>
											</div>
											<div className="form-group">
												<label>Give img hosteg link</label>
												<input
													placeholder="Give hosting link"
													onBlur={handleOnBlur}
													name="img"
													className="form-control w-100"
													type="text"
												/>
											</div>
											<button
												type="submit"
												className="btn btn-primary"
											>
												Submit
											</button>
										</div>
									</div>
								</div>
							</form>
						</>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VolunteerEventAdd;
