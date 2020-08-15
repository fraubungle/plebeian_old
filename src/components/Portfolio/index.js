import React, {  } from 'react'
import { Route, useHistory } from "react-router-dom"

import { ReactComponent as Code } from '../../assets/svg/code.svg'
import { ReactComponent as ArrowRight } from '../../assets/svg/arrow-right.svg'
import { ReactComponent as LeftShortArrow } from '../../assets/svg/arrow-short-left.svg'

import style from './style.module.css'

const Portfolio = props => {

	const history = useHistory();
	
	const navigateToHome = () => {
		history.push({pathname: "/", state: {currentPath: 'home'}});
	}
	
	const navigateToPortfolio = () => {	
		history.push({pathname: "/portfolio", state: {currentPath: 'work'}});
	}

	console.log('props.className ', props.className)
	return (
		
		<div className={style[`side`] + ' ' + style[`${props.className}`]}>

			<div className={style[`poke-circle`]}>
				{ props.location !== `portfolio` ? <Code className={style[`code-icon`]} /> : <LeftShortArrow className={style[`left-short-arrow-icon`]} onClick={navigateToHome} /> }
			</div>
			
			<div className={style['side-inner']}>

				<h1 className={style[`title`]} onClick={navigateToPortfolio}>Work</h1>
				
				{/* { props.location !== `portfolio` ? <ArrowRight className={style[`right-arrow-icon`]} onClick={navigateToPortfolio} /> : null } */}
				
				<Route path="/portfolio" component={ () => {
					
					return (
						<div className={style['text']}>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
					)
				}} />

			</div>

		</div>

        
	)
}

export default Portfolio