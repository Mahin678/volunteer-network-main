import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Register.css';
const Register = () => {
	const { id } = useParams();
	const { userInfo, eventInfo } = useContext(UserContext);
	const [users, setUser] = userInfo;
	const [info, setInfo] = useState([
		1,
		2,
		3,
		4,
		5,
		6,
		7,
		8,
		9,
		10,
		11,
		12,
		13,
		14,
		15,
		16,
		17,
		18,
		19,
		20,
		21,
		22,
		23,
		24,
		25,
		26,
		27,
		28,
		29,
		30,
		31,
		32,
		33,
		34,
		35,
		36,
		37,
		38,
		39,
		40,
	]);
	const [booked, setBooked] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

	const [allData, setAllData] = useState([]);
	const [books, setBooks] = useState([]);

	let history = useHistory();
	useEffect(() => {
		fetch(`http://localhost:4000/getSpecificMovie/5fdf0bef77ee670414ba6e70`)
			.then((res) => res.json())
			.then((data) => setAllData(data));
	}, []);
	console.log(allData);
	// allData.available.map((info) => console.log(info));
	let dat = allData.available || [];
	console.log(dat, 'infos');
	const HandleSubmitInfo = (e) => {
		dat.push(e);
		fetch(
			`http://localhost:4000/UpdateAvailable/5fdf0bef77ee670414ba6e70
		`,
			{
				method: 'PATCH',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ available: dat }),
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
		// const newUserDetails = { ...users };
		// newUserDetails.issuDate = inputValue.date;
		// newUserDetails.category = events.placeName;
		// newUserDetails.descriptions = inputValue.Descriptions;
		// newUserDetails.categoryImg = events.img;
		// setUser(newUserDetails);
		// fetch('http://localhost:4000//addVolunteer', {
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify(newUserDetails),
		// })
		// 	.then((res) => res.json())
		// 	.then((result) => {
		// 		if (result) {
		// 			history.push('/userAllTask');
		// 		}
		// 	});
	};
	document.title = 'Register Form';

	return (
		<>
			<Header>
				<div className="register-wrapper container text-light">
					<h1 className="text-center mt-5 text-danger text-uppercase">
						Select Seat For Booking
					</h1>
					<p className="mx-auto text-center" style={{ maxWidth: '500px' }}>
						We Provide best facilities For Client , we believe we can able
						to give best performance . We have strong side for diffences
						Fire
					</p>
					<div>
						{info.map((item, i) => (
							<input
								type="button"
								onClick={(e) => HandleSubmitInfo(e.target.value)}
								className={dat.map((obj) =>
									obj == item
										? 'btn-disable btn btn-danger m-2'
										: 'btn btn-danger m-2'
								)}
								value={item}
							/>
						))}
					</div>
				</div>
			</Header>
			{/* <form onSubmit={HandleSubmitInfo} className="w-50 mt-5 pt-5 mx-auto">
				<h2>register as volunteer </h2>
				<div className="form-group mt-3">
					<label htmlFor="Name">Name</label>
					<input
						type="text"
						className="form-control"
						value={users.UserName}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="Email">Email address</label>
					<input
						type="email"
						className="form-control"
						value={users.userEmail}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="">Date</label>
					<input
						required
						onBlur={handleOnchangeValue}
						name="date"
						type="date"
						className="form-control"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="Descriptions">Descriptions</label>
					<textarea
						onBlur={handleOnchangeValue}
						className="form-control"
						rows="3"
						placeholder="Descriptions"
						name="Descriptions"
					></textarea>
				</div>
				<div className="form-group">
					<label htmlFor="Organization">
						Organization books at the library
					</label>
					<input
						value={events.placeName}
						type="text"
						className="form-control"
					/>
				</div>

				<div className="form-group form-check">
					<input
						type="checkbox"
						className="form-check-input"
						id="exampleCheck1"
					/>
					<label className="form-check-label" htmlFor="exampleCheck1">
						Check me out
					</label>
				</div>
				<button type="submit" className="btn btn-primary">
					Register
				</button>
			</form> */}
		</>
	);
};

export default Register;
