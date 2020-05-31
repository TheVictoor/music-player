import React, { useState, useEffect } from 'react';

import AlbumArt from '../../components/album-art';
import Controls from '../../components/music-controls';
import Timer from '../../components/music-timer';
import PlayerNagivation from '../../components/player-navigation';

import services from "../../services";

import './index.css';

const Player = (props) => {
	const [id] = useState(props.match.params.id.toString());
	const [album, setAlbum] = useState({});
	const [track, setTrack] = useState({});
	const updateTrack = (t) => { this.setState({ track: t }) };

	useEffect(() => {
		const fetch = async () => {
			const album = await services.albums.album(id);
			const [track] = album.tracks;

			setAlbum(album);
			setTrack(track);

			sessionStorage.setItem(id, JSON.stringify(album));
		};
		
		fetch();
	}, [id] );

	return (
		<div className="player d-flex flex-column align-items-center justify-content-center">
			<PlayerNagivation id={id}/>
			<AlbumArt album={album} currentTrack={track}/>
			<Timer track={track} />
			<Controls onUpdateTrack={updateTrack}/>
		</div>
	);
};

export default Player;
