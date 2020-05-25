import React from 'react';

import AlbumArt from '../../components/album-art';
import Controls from '../../components/music-controls';
import Timer from '../../components/music-timer';
import PlayerNagivation from '../../components/player-navigation';

import services from "../../services";

import './index.css';

class Player extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			album: {},
			track: {},
			id: props.match.params.id.toString(),
		};

		this.updateTrack = (t) => { this.setState({ track: t }) };
	}

	async componentDidMount(){
		const album = await services.albums.album(this.state.id);

		this.setState({
			album,
			track: album.tracks[0]
		});

		sessionStorage.setItem(this.state.id, JSON.stringify(album));
	}

	render(){
		return (
			<div className="player d-flex flex-column align-items-center justify-content-center">
				<PlayerNagivation id={this.state.id}/>
				<AlbumArt album={this.state.album} currentTrack={this.state.track}/>
				<Timer track={this.state.track} />
				<Controls onUpdateTrack={this.updateTrack}/>
			</div>
		);
	}
}

export default Player;
