import axios from 'axios';

const API_KEY = '4007110774184dce9a8ef9ec2d7c286d';
const URL_ASIDE = `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`;

//const URL = `http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-13&sortBy=publishedAt&apiKey=${API_KEY}`;

const MyApiClient = axios.create({
  baseURL: URL_ASIDE,
  timeout: 1000,
});

export default MyApiClient;
