import React, {  } from 'react';
import { Route, useHistory } from "react-router-dom";

import { ReactComponent as User } from '../../assets/svg/user.svg';
import { ReactComponent as ArrowLeft } from '../../assets/svg/arrow-left.svg';
import { ReactComponent as RightShortArrow } from '../../assets/svg/arrow-short-right.svg'
import { RouteTransition, AnimatedRoutes } from '../../moo/RouteTransition'

import style from './style.module.css'

const About = (props) => {

	const history = useHistory();

	const navigateToHome = () => {
		history.push({pathname: "/", state: {currentPath: 'home'}});
	}
	
	const navigateToAbout = () => {
		history.push({pathname: "/about", state: {currentPath: 'about'}});
	}

	return (
			<div className={style[`side`] + ' ' + style[`${props.className}`]}>

				<div className={style[`poke-circle`]}>
					{ props.location !== `about` ? <User className={style[`user-icon`]} /> : <RightShortArrow className={style[`right-short-arrow-icon`]} onClick={navigateToHome} /> }
				</div>

				<div className={style['side-inner']}>

					<h1 className={style[`title`]} onClick={navigateToAbout}>Mark</h1>

					{/* { props.location !== `about` ? <ArrowLeft className={style[`left-arrow-icon`]} onClick={navigateToAbout} /> : null } */}
					
					<AnimatedRoutes exitBeforeEnter initial={false}>
        				<RouteTransition exact path="/about" slide={50}>
							<div className={style['text']}>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							</div>
						</RouteTransition>
					</AnimatedRoutes>
					{/* <Route path="/about" component={ () => {
					
						return (
							<div className={style['text']}>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							</div>
						)
					}} /> */}
					

				</div>
			
		</div>
	)
}

export default About