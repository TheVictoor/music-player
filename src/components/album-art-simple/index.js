import React from 'react';
import './index.css';

function AlbumArtSimple(props){
	return (
		<div className="album-art-simple p-1 d-flex flex-column text-center align-items-center">
			<img src={props.album.art} alt="" title={props.album.name}/>
			<span className='album-name mt-1'> { props.album.name } </span>
		</div>
	);
}

export default AlbumArtSimple;
