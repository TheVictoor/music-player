import axios from 'axios';

const key = process.env.REACT_APP_AUTH_KEY;
const request = axios.create({
  baseURL: process.env.REACT_APP_AUTH_HOST,
	timeout: 2000,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
	}
});

async function authorization(isNew = false){
	const stored = sessionStorage.getItem('key');

	if(isNew || !stored){
		const { data } = await request.post(process.env.REACT_APP_AUTH_PATH, 'grant_type=client_credentials', {
			headers: {
				Authorization: `Basic ${key}`
			}
		});

		sessionStorage.setItem('key', data.access_token);
		return data.access_token;
	}

	return stored;
}

export default authorization;
