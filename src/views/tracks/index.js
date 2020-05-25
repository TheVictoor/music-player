import React from "react";
import Track from '../../components/song-description';
import TrackNavigation from '../../components/song-navigation';

import './index.css';

class TrackList extends React.Component{
	constructor(props	){
		super(props);

		const id = props.match.params.id;
		let track = sessionStorage.getItem(id);
		track = JSON.parse(track);

		this.state = {
			albumName: track.name,
			tracks: track.tracks,
			id,
		}
	}

	render(){
		const elements = this.state.tracks.map(track => {
			return (
				<Track key={track.id} track={track} album={this.state.albumName}/>
			);
		});

		return (
			<div>
				<TrackNavigation  id={this.state.id}/>
				<div className='song-list'>
					{ elements }
				</div>
			</div>
		);
	}
}

export default TrackList;
