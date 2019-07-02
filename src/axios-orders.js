import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-ea7e3.firebaseio.com/'
});

export default instance;