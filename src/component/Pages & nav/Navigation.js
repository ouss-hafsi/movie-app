///////Navigation.js
import {useState} from 'react'
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Navigation = () => {
	const [active, setActive] = useState('nav-menu')
	const[toggleIcon, setToggleIcon] = useState('nav-toggle')
	const navToggle = () => {
		active === 'nav-menu' ? setActive('nav-menu nav-active') : setActive('nav-menu')
		
			// Toggle Animation
			toggleIcon === 'nav-toggle' 
			? setToggleIcon('nav-toggle toggle')
			: setToggleIcon('nav-toggle')
	
	}

	
	return (
		// <Navbar collapseOnSelect variant='light' expand='md'>
		// 	<Navbar.Brand as={Link} to='/home'>
		// 		MOVIE APPLICATION
		// 	</Navbar.Brand>
		// 	<Navbar.Toggle aria-controls='basic-navbar-nav' />
		// 	<Navbar.Collapse id='basic-navbar-nav'>
		// 		<Nav>
		// 			<Nav.Link as={Link} to='/home'>
		// 				Home
		// 			</Nav.Link>
		// 			<Nav.Link as={Link} to='/about'>
		// 				About Project
		// 			</Nav.Link>
		// 			<Nav.Link as={Link} to='/Movies'>
		// 				Display Movies
		// 			</Nav.Link>
		// 			<Nav.Link as={Link} to='/Contact'>
		// 				Contact
		// 			</Nav.Link>
		// 			<Nav.Link as={Link} to='/Favorite'>
		// 				Favorite
		// 			</Nav.Link>
		// 		</Nav>
		// 	</Navbar.Collapse>
		// </Navbar>

		<>
		<nav className='nav'>
		<Link to='' className='brand'>Movie APPLICATION</Link>
		<ul className={active}>
			<li className='nav-item'><Link to='/home' className='nav-link'>Home</Link></li>
			<li className='nav-item'><Link to='/about' className='nav-link'>About Project</Link></li>
			<li className='nav-item'><Link to='/Movies' className='nav-link'>Movies</Link></li>
			<li className='nav-item'><Link to='/Favorite' className='nav-link'>Favorite</Link></li>
			<li className='nav-item'><Link to='/Contact' className='nav-link'>Contact</Link></li>
        </ul>
		<div onClick={navToggle} className={toggleIcon}>
             <div className='line1'></div>
			 <div className='line2'></div>
			 <div className='line3'></div>
		</div>


		</nav>
		</>
	);
};

export default Navigation;
