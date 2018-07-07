import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://my-burger-app-9f7c6.firebaseio.com/'
});

export default instance;