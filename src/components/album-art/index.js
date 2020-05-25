import React from 'react';
import './index.css';

function Cover(props){
	return (
		<div className='cover-roudered d-flex flex-column justify-content-center'>
			<div className="music-cover d-flex justify-content-center">
				<div style={{ backgroundImage: `url('${props.album.art}')` }} className="art" ></div>
				<div style={{ backgroundImage: `url('${props.album.art}')` }} className="art-shadow" ></div>
			</div>
			<div className="music-info d-flex mt-3 flex-column align-items-center">
				<span className="music-name">
					{ props.currentTrack && props.currentTrack.name }
				</span>
				<span className="music-author">
					{ props.album.name }
				</span>
			</div>
		</div>
	);
}

export default Cover;