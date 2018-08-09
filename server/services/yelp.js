import axios from 'axios';

const YELP_API_URL = 'https://api.yelp.com/v3';
const YELP_API_KEY = process.env.YELP_API_KEY || '_Y0RC7Fb2Mhw6QIMbtiRdEqsrlX81gQqtmaqGM5Z6MkitCo9Hn3lTTKPHa8aJ3zJt1uEOrHfTKxN_sVjNrQxkejZq6sfm78uBAm_q_Nqz9KJJDVP0YP_MnixjR5sW3Yx';

const authedAxios = axios.create({
  baseURL: YELP_API_URL,
  headers: { Authorization: `Bearer ${YELP_API_KEY}` },
});

export async function searchPlaces(params) {
  try {
    const { data } = await authedAxios.get('/businesses/search', { params });
    return data.businesses;
  } catch (e) {
    console.log('search failed!', e);
  }
}
