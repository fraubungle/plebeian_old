import React, { useState } from 'react'
import { useLocation } from "react-router-dom";

import About from '../../components/About'
import Portfolio from '../../components/Portfolio';

const Home = props => {

    const [path, setPath] = useState('/');

    const location = useLocation();

    React.useEffect(() => {
		setPath(location.pathname.replace(/^\/+/, ''))
	// 	console.log('Location changed');
    }, [location, setPath]);
    
    console.log('location.pathname: ', path)

    return (
        <main className="main">
            <About location={path} className={path === 'about' ? 'animate' : ''} />
            <Portfolio location={path} className={path === 'portfolio' ? 'animate' : ''} />
		</main>
    )
}


export default Home


