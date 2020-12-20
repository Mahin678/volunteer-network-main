import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Spinner from '../../Spinner/Spinner';
import CategoryInfo from '../CatagoryInfo/CatagoryInfo';
import Topbar from '../Topbar/Topbar';
import './Header.css';
const Header = (props) => {
	const { eventInfo } = useContext(UserContext);
	const [allEventsInfo, setAllEventsInfo] = eventInfo;
	const [getQuarry, SetGetQuarry] = useState(null);
	const [filter, setFilter] = useState(null);
	const [loading, setLoading] = useState(true);
	const [byDate, setByDate] = useState([]);
	const HandleSearch = () => {
		setFilter(getQuarry);
	};

	document.title = 'home';
	useEffect(() => {
		fetch('http://localhost:4000/toDayMovie', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				date: filter,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				// setByDate(data);
				console.log(data, 'nai');
				setAllEventsInfo(data);
			});
	}, [filter]);
	return (
		<div className="header-wrapper">
			<div>
				<Topbar />
			</div>
			{props.children ? (
				props.children
			) : (
				<>
					<div className="header-content text-center mt-5 mb-3">
						<h1 className="text-light">Watch and Discover Movies</h1>
						<div className="input-group mb-3 w-50 m-auto mt-5">
							<input
								onBlur={(e) => SetGetQuarry(e.target.value)}
								name="search"
								type="date"
								className="form-control "
								placeholder="write your Thing"
								aria-label="Username"
								aria-describedby="basic-addon1"
							/>
							<div className="input-group-prepend ">
								<button
									onClick={() => HandleSearch()}
									className="btn w-100 px-lg-5 px-sm-1 btn-danger"
								>
									Search
								</button>
							</div>
						</div>
					</div>
					<div className="row container mx-auto mt-5 pb-5">
						{allEventsInfo.length == 0 ? (
							<h1 className="text-danger text-center mx-auto pb-5 mb-5 pt-5 mt-5">
								Today have not movie ,Please at first select the date
							</h1>
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
				</>
			)}
		</div>
	);
};

export default Header;
