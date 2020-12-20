import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../App';
function PrivateRoute({ children, ...rest }) {
	const { userInfo } = useContext(UserContext);
	const [users] = userInfo;
	return (
		<Route
			{...rest}
			render={({ location }) =>
				users.userEmail ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/login',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}
export default PrivateRoute;
