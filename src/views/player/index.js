import React from 'react';
import CoverRounded from '../../components/cover-roundered';
import Controls from '../../components/max-music-controls';
import Timer from '../../components/music-timer';

import './index.css';

function Player(){
	return (
		<div className="player d-flex flex-column align-items-center justify-content-center">
			<CoverRounded />
			<Timer />
			<Controls />
		</div>
	);
}

export default Player;
