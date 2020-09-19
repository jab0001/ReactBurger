import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myreact-23f28.firebaseio.com/'
})

export default instance;