import axios from 'axios';
import authorization from './authorization';

const request = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
  timeout: 2000,
});

const Albums = {
	async recomendation() {
		const token = await authorization();

		try {

			const { data }= await request.get('v1/browse/new-releases', {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});

			const transformed = data && data.albums.items.map((album) => {
				return {
					name: album.name,
					art: album.images[0].url,
					artists: album.artists.map(a => a.name).join(', '),
					id: album.id
				}
			});

			return transformed;
		} catch (error) {
			console.log(error);
		}
	},

	async album(id){
		const token = await authorization();

		try {
			const { data }= await request.get(`v1/albums/${id}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			});

			const transformed = data && {
				id: data.id,
				name: data.name,
				art: data.images[0].url,
				artists: data.artists.map(a => a.name).join(', '),
				tracks: data.tracks.items.map(track => ({
					id: track.id,
					name: track.name,
					number: track.track_number,
					duration: track.duration_ms
				})),
			};

			return transformed;
		} catch (error) {
			console.log(error);
		}
	}
};

export default Albums;