import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import AlbumArt from '../../components/album-art';
import Controls from '../../components/music-controls';
import Timer from '../../components/music-timer';
import PlayerNagivation from '../../components/player-navigation';

import services from "../../services";

import './index.css';

const Player = (props) => {
	const [id] = useState(props.match.params.id.toString());
	
	const [album, setAlbum] = useState({});

	const [track, setTrack] = useState({
		current: {},
		index: 0,
	});
	
	const [isLiked, setLike] = useState({});

	const updateTrack = (next) => {
		let toSetup = {};
		if (next) {
			if (track.index + 1 >= album.tracks.length) {
				toSetup = {
					current: album.tracks[0],
					index: 0,
				};
			} else {
				toSetup = {
					current: album.tracks[track.index + 1],
					index: track.index + 1,
				};
			}
		} else {
			if (track.index - 1 <= 0) {
				toSetup = {
					current: album.tracks[album.tracks.length - 1],
					index: album.tracks.length - 1,
				};
			} else {
				toSetup = {
					current: album.tracks[track.index - 1],
					index: track.index - 1,
				};
			}
		}
		return setTrack(toSetup);
	};

	useEffect(() => {
		const fetch = async () => {
			const album = await services.albums.album(id);
			const [track] = album.tracks;

			setAlbum(album);
			setTrack({
				current: track,
				index: 0
			});

			sessionStorage.setItem(id, JSON.stringify(album));
		};
		
		fetch();
	}, [id] );

	return (
		<div className="player d-flex flex-column align-items-center justify-content-center">
			<PlayerNagivation id={id}/>
			<AlbumArt album={album} currentTrack={track.current}/>
			<Timer track={track.current} />
			<Controls isLiked={isLiked} like={setLike} next={() => updateTrack(true)} previous={() => updateTrack(false)} onUpdateTrack={updateTrack}/>
		</div>
	);
};

export default Player;
