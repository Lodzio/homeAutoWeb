import axios from 'axios';

const devURL = 'https://us-central1-usterki-jg-dev-87073.cloudfunctions.net/';
// @ts-ignore
const prodURL = '';

export default axios.create({
    baseURL: devURL
});