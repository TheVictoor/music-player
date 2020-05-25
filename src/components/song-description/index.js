import React from "react";
import './index.css';

function Song(props){
	const album = props.album;
	const track = props.track;

	return (
		<div className='song-description d-flex align-items-center my-3'>
			<div className='d1'>
				<div className='play-button mx-3 d-flex align-items-center justify-content-center'>
					<i className="fas fa-play"></i>
				</div>
			</div>
			<div className='flex-grow-1 track-data'>
				<span className='song'> { track.name } </span>
				<span className='album'>{ album || 'teste' }</span>
			</div>
			<div className='options'>
				<i className="fas fa-ellipsis-v mx-2 mr-4"></i>
			</div>
		</div>
	);
}

export default Song;
