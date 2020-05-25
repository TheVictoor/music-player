import React, { useState } from 'react';
import './index.css';

const getInMinutes = (seconds) => {
	let result = 0;
	
	while (seconds > 59){
		++result;
		seconds -= 60;
	}

	return `${result}.${seconds < 10 ? '0' + seconds : seconds}`;
};

function Timer (props) {
	const duration = props.track && props.track.duration;
	const inSeconds = parseInt(duration / 1000);
	const inMinutes = getInMinutes(inSeconds);
	const [current,] = useState({ value: 1 });

	return (
		<div className='music-timer'>
			<div className="timer-info d-flex justify-content-between px-4">
				<span> { (getInMinutes(current.value)).replace('.', ':') } </span>
				<span> { inMinutes.replace('.', ':') } </span>
			</div>
			<div className="timer-ui px-4 my-2">
				<div className="base"></div>
				<div className="color" style={{ width: `${current.value / inSeconds * 100}%` }}></div>
			</div>
		</div>
	);
}

export default Timer;
