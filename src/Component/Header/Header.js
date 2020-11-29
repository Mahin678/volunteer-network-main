import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Spinner from '../../Spinner/Spinner';
import CategoryInfo from '../CatagoryInfo/CatagoryInfo';
import Topbar from '../Topbar/Topbar';
import './Header.css';
const Header = () => {
	const { eventInfo } = useContext(UserContext);
	const [allEventsInfo, setAllEventsInfo] = eventInfo;
	const [getQuarry, SetGetQuarry] = useState('');
	const [filter, setFilter] = useState('');
	const [loading, setLoading] = useState(true);
	const HandleSearch = () => {
		const task = getQuarry.toLowerCase();
		setFilter(task);
	};
	useEffect(() => {
		fetch(
			'https://dry-bayou-78136.herokuapp.com/searchEvents?filter=' + filter
		)
			.then((res) => res.json())
			.then((res) => {
				setAllEventsInfo(res);
				setLoading(false);
			});
	}, [filter]);
	useEffect(() => {
		fetch('https://dry-bayou-78136.herokuapp.com/getVolunteerData')
			.then((res) => res.json())
			.then((data) => {});
	}, []);
	document.title = 'home';
	return (
		<div className="header-wrapper">
			<div>
				<Topbar />
			</div>
			<div className="header-content text-center mt-5 mb-3">
				<h1>I grow by helping people in need.</h1>
				<div className="input-group mb-3 w-50 m-auto mt-5">
					<input
						onBlur={(e) => SetGetQuarry(e.target.value)}
						name="search"
						type="text"
						className="form-control "
						placeholder="write your Thing"
						aria-label="Username"
						aria-describedby="basic-addon1"
					/>
					<div onClick={HandleSearch} className="input-group-prepend ">
						<button className="btn w-100 px-lg-5 px-sm-1 btn-danger">
							Search
						</button>
					</div>
				</div>
			</div>
			<div className="row container mx-auto mt-5 ">
				{loading === true ? (
					<Spinner />
				) : (
					allEventsInfo.map((info, i) => (
						<CategoryInfo
							key={info.length}
							data={info}
							i={i}
						></CategoryInfo>
					))
				)}
			</div>
		</div>
	);
};

export default Header;
