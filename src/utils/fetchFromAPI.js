import axios from 'axios'
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

// const axios = require('axios');

const options = {
  method: 'GET',
  // url: https://youtube-v31.p.rapidapi.com/search,
  params: {
    // relatedToVideoId: '7ghhRHRP6t4',
    // part: 'id,snippet',
    // type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	// console.error(error);
}

const fetchFromAPI = async (url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`, options);
  console.log(`${BASE_URL}/${url}`);
  return data;

}



export default fetchFromAPI;