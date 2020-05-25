import React from 'react';
import { Link } from 'react-router-dom';

import AlbumArt from '../../components/album-art-simple';
import services from '../../services';
import './index.css';

class Albums extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			albums: [],
		};
	}

	async componentDidMount(){
		const albums = await services.albums.recomendation();
		this.setState({ albums });
	}

	render(){
		return (
			<div>
				<div>
					<h1 className='text-center header-albums py-2'>
						Albums
					</h1>
				</div>
				<div>
					{
						this.state.albums.map(a => {
							return (
								<div className="d-inline-block" key={a.id}>
									<Link to={`/player/${a.id}`} className='link-color'>
										<AlbumArt album={a}/>
									</Link>
								</div>
							)
						})
					}
				</div>
			</div>
		);
	}
}

export default Albums;
