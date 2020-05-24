import React from 'react';
import './index.css';


function Timer () {
	return (
		<div className='music-timer'>
			<div className="timer-info d-flex justify-content-between px-4">
				<span> 2:12 </span>
				<span> 4:15 </span>
			</div>
			<div className="timer-ui px-4 my-2">
				<div className="base"></div>
				<div className="color"></div>
			</div>
		</div>
	);
}

export default Timer;
