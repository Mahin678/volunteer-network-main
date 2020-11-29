import React from 'react';
import { Link } from 'react-router-dom';
import './CatagoryInfo.css';
const color = [
	'bg-success',
	'bg-info',
	'bg-danger',
	'bg-warning',
	'bg-secondary',
	'bg-success',
	'bg-info',
	'bg-danger',
	'bg-warning',
	'bg-secondary',
	'bg-success',
	'bg-info',
	'bg-danger',
	'bg-warning',
	'bg-secondary',
	'bg-success',
	'bg-info',
	'bg-danger',
	'bg-warning',
	'bg-secondary',
	'bg-success',
	'bg-info',
	'bg-danger',
	'bg-warning',
	'bg-secondary',
	'bg-success',
	'bg-info',
	'bg-danger',
	'bg-warning',
	'bg-secondary',
	'bg-success',
	'bg-info',
	'bg-danger',
	'bg-warning',
	'bg-secondary',
	'bg-success',
	'bg-info',
	'bg-danger',
	'bg-warning',
	'bg-secondary',
];
const CatagoryInfo = ({ data, i }) => {
	return (
		<section className="col-sm-6 col-md-4 col-lg-3  mt-3">
			<div className="volunteer-network-main-wrapper">
				<Link to={`/register/${parseInt(data.id)} `}>
					<div className={`header-content-img ${[color[i]]}`}>
						<img className="img-headerr" src={data.img} />
						<div className={`title ${[color[i]]}`}>
							<h4 className="text-center">{data.placeName}</h4>
						</div>
					</div>
				</Link>
			</div>
		</section>
	);
};

export default CatagoryInfo;
