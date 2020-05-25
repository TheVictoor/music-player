import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function nagivation(props){
	const id = props.id;
	console.log(id);
	return (
		<div className='navigation-song d-flex align-items-center px-3'>
			<Link to={`/player/${id}`} className='navigation-player-color'>
				<i className="fas fa-chevron-left"></i>
			</Link>
		</div>
	);
}

export default nagivation;
