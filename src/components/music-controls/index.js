import React from 'react';
import './index.css';
import repeatIcon  from './../../assets/icons/repeat.svg';

function Controls (props) {
	return (
		<div className='controls d-flex justify-content-around align-items-center px-4'>
			<button className='music-repeat' onClick={props.repeat}>
				<img src={repeatIcon} alt=""/>
			</button>
			<button className='music-previous' onClick={props.previous}>
				<i className="fas fa-step-backward"></i>
			</button>
			<button className='music-play-pause' onClick={props.play}>
				<i className="fas fa-play"></i>
			</button>
			<button className='music-next' onClick={props.next}>
				<i className="fas fa-step-forward"></i>
			</button>
			<button className='music-like' onClick={props.like}>
				<i className="far fa-heart"></i>
			</button>
		</div>
	);
}

export default Controls;
