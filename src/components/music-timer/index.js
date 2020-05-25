import React, { useState } from 'react';
import './index.css';

function Timer (props) {
	const duration = props.track && props.track.duration;
	const inMinutes = duration / 1000 / 60;
	const inSeconds = duration / 1000;
	const [current,] = useState({ value: 1 });

	return (
		<div className='music-timer'>
			<div className="timer-info d-flex justify-content-between px-4">
				<span> { (current.value / 100).toFixed(2).toString().replace('.', ':') } </span>
				<span> { inMinutes.toFixed(2).toString().replace('.', ':') } </span>
			</div>
			<div className="timer-ui px-4 my-2">
				<div className="base"></div>
				<div className="color" style={{ width: `${current.value / inSeconds * 100}%` }}></div>
			</div>
		</div>
	);
}

export default Timer;
