import React, {  } from 'react';
import { Route, useHistory } from "react-router-dom";

import { ReactComponent as User } from '../../assets/svg/user.svg';
import { ReactComponent as ArrowLeft } from '../../assets/svg/arrow-left.svg';

const About = (props) => {

	const history = useHistory();

	const navigateToHome = () => {
		history.push({pathname: "/", state: {currentPath: 'home'}});
	}
	
	const navigateToAbout = () => {
		history.push({pathname: "/about", state: {currentPath: 'about'}});
	}

	return (
		<div className={`side left ${props.className}`}>
			<Route path="/about" component={() => <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>} />
			<ArrowLeft className="left-arrow-icon" onClick={navigateToHome} />
			<h1 className="title" onClick={navigateToAbout}>Mark</h1>
			<User className="user-icon" />
		</div>
	)
}

export default About