import React from 'react';
import './index.css';
import repeatIcon  from './../../assets/icons/repeat.svg';

function PlayPauseButton() {
	const element = Math.random() * 100 & 1
		? <i className="fas fa-play"></i>
		: <i className="fas fa-pause"></i>;

	return element;
}

function Controls () {
	return (
		<div className='controls d-flex justify-content-around align-items-center px-4'>
			<button className='music-repeat'>
				<img src={repeatIcon} alt=""/>
			</button>
			<button className='music-previous'>
				<i className="fas fa-step-backward"></i>
			</button>
			<button className='music-play-pause'>
				<PlayPauseButton />
			</button>
			<button className='music-next'>
				<i className="fas fa-step-forward"></i>
			</button>
			<button className='music-like'>
				<i className="far fa-heart"></i>
			</button>
		</div>
	);
}

export default Controls;
