import React, { useEffect, useState } from 'react';
import './VolunteerList.css';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../../Spinner/Spinner';

const VolunteerList = () => {
	const [events, setEvents] = useState({
		placeName: '',
		date: '',
		descriptions: '',
	});
	const [manageEvents, setManageEvents] = useState(false);
	const [success, setSuccess] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('http://localhost:4000//getAllVolunteer')
			.then((res) => res.json())
			.then((info) => setData(info));
	}, [data]);

	const handleDeleteEvents = (id) => {
		fetch(`http://localhost:4000//CancelEvents/${id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((result) => {
				if (result) {
					setSuccess(true);
					toast.error('Successfully deleted');
				}
			});
	};
	document.title = 'Volunteer List';
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
							<p className=" mb-3">
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
							<p className=" ">
								<img src="https://i.imgur.com/CL89rYa.png" alt="" />
								Add event
							</p>
						</NavLink>
					</div>
				</div>
				<div className="w-75 volunteerData d-flex align-items-center">
					<div className="volunteerData-wrapper w-100">
						<table className="table">
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
								{data.length === 0 ? (
									<Spinner />
								) : (
									data.map((info) => (
										<tr key={info.id}>
											<td className="font-weight-bold">
												{info.UserName}
											</td>
											<td className="text-danger">
												{info.userEmail}
											</td>
											<td>{info.issuDate}</td>
											<td className="text-success font-weight-bold">
												{info.category}
											</td>
											<td className="delete-button">
												<button
													onClick={() =>
														handleDeleteEvents(info._id)
													}
													className="bg-danger "
												>
													<img
														src="https://i.imgur.com/YwDre2M.png"
														alt="delete-icon"
													/>
												</button>
											</td>
										</tr>
									))
								)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VolunteerList;
