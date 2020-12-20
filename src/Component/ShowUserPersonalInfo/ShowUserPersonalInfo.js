import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { UserContext } from '../../App';
import Topbar from '../Topbar/Topbar';
import './ShowUserPersonalInfo.css';
const ShowUserPersonalInfo = () => {
	const { userInfo } = useContext(UserContext);
	const [users, setUser] = userInfo;
	const [previousInfo, setPreviousInfo] = useState([]);
	useEffect(() => {
		fetch('http://localhost:4000//getUserTasks?userEmail=' + users.userEmail)
			.then((res) => res.json())
			.then((result) => setPreviousInfo(result));
	}, [previousInfo]);
	const handaleCancel = (id) => {
		fetch(`http://localhost:4000//CancelEvents/${id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((result) => {
				if (result) {
					toast.success('successfully cancelled');
				}
			});
	};
	return (
		<div>
			<div className="userInfo-header  ">
				<div className="userInfo-border">
					<Topbar />
				</div>
				<div className="row  mx-auto w-75  mt-5 pt-5">
					{previousInfo.map((task) => (
						<div className="col-lg-6">
							<div className=" task-wrapper shadow-lg   m-3 d-flex justify-content-space-between">
								<img
									className=" m-2 img-fluid   "
									src={task.categoryImg}
									alt="task-img"
								/>
								<div className="m-4">
									<h4>{task.category}</h4>
									<h6 className="card-title">{task.issuDate}</h6>
									<button
										onClick={() => handaleCancel(task._id)}
										className=" mt-1 btn btn-danger"
									>
										Cancel
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ShowUserPersonalInfo;
