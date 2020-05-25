import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function nagivation(props){
	const id = props.id;
	return (
		<div className='navigation-player d-flex justify-content-between align-items-center px-3'>
			<Link to='/' className='navigation-player-color'>
				<i className="fas fa-chevron-left"></i>
			</Link>
			<Link to={`/tracks/${id}`} className='navigation-player-color'>
				<i className="fas fa-ellipsis-v"></i>
			</Link>
		</div>
	);
}

export default nagivation;
