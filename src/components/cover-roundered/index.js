import React from 'react';
import './index.css';
import gunsCover from './guns-cover.jpg';

function Cover(){
	console.log(gunsCover);
	return (
		<div className='cover-roudered d-flex flex-column justify-content-center'>
			<div className="music-cover d-flex justify-content-center">
				<div style={{ backgroundImage: `url('${gunsCover}')` }} className="art" ></div>
				<div style={{ backgroundImage: `url('${gunsCover}')` }} className="art-shadow" ></div>
			</div>
			<div className="music-info d-flex mt-3 flex-column align-items-center">
				<span className="music-name">
					Sweet Child O` Mine
				</span>
				<span className="music-author">
					Guns N Roses
				</span>
			</div>
		</div>
	);
}

export default Cover;