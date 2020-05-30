import React from "react";
import Track from '../../components/song-description';
import TrackNavigation from '../../components/song-navigation';

import './index.css';

const TrackList = (props) => {
	const { id }= props.match.params;
	const { tracks, name: albumName } = JSON.parse(sessionStorage.getItem(id));

	const tracksComponents = tracks.map(track => {
		return (
			<Track key={track.id} track={track} album={albumName}/>
		);
	});
	
	return (
		<div className='d-flex flex-column align-items-center'>
			<TrackNavigation  id={id}/>
			<div className='song-list'>
				{ tracksComponents }
			</div>
		</div>
	);
};

export default TrackList;
