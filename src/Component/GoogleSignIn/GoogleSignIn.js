import React from 'react';
import './GoogleSignIn.css';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../Image/movie-icon-15157.png';
const GoogleSignIn = () => {
	const { userInfo } = useContext(UserContext);
	const [users, setUser] = userInfo;
	let history = useHistory();
	let location = useLocation();

	let { from } = location.state || { from: { pathname: '/' } };
	if (firebase.apps.length === 0) {
		firebase.initializeApp(firebaseConfig);
	}
	const provider = new firebase.auth.GoogleAuthProvider();
	const HandleGoogleSignIn = () => {
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(function (result) {
				var token = result.credential.accessToken;
				var user = result.user;
				const { displayName, email, photoURL } = user;
				const newUser = { ...users };
				newUser.UserName = displayName;
				newUser.userEmail = email;
				newUser.photoURL = photoURL;
				setUser(newUser);
				history.replace(from);
			})
			.catch(function (error) {
				var errorCode = error.code;
				var errorMessage = error.message;
				var email = error.email;
				var credential = error.credential;
			});
	};
	document.title = 'Google sign in';
	return (
		<div className="SignIn-wrapper text-center ">
			<div className="SignIn-Header text-enter  m-auto ">
				<img style={{ width: '90px' }} className="mt-5" src={logo} alt="" />
			</div>
			<div className="SignIn-body  ">
				<div className="w-50 mx-auto p-5 text-center mt-5   ">
					<h1 className="mb-5">Login With</h1>
					<button
						onClick={HandleGoogleSignIn}
						className="btn btn-primary  d-block m-auto  d-flex"
					>
						<img
							className=""
							src="https://i.imgur.com/qMCPtll.png"
							alt=""
						/>
						<h4 className="m-2">Continue With google</h4>
					</button>
					<p className="mt-4">
						Don't have an acount <a href="/">Create an acount</a>{' '}
					</p>
				</div>
			</div>
		</div>
	);
};

export default GoogleSignIn;
