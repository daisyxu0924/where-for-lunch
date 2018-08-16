import axios from 'axios';

if (!process.env.YELP_API_KEY) {
  throw Error('Provide Yelp API Key');
}

const YELP_API_URL = 'https://api.yelp.com/v3';

const authedAxios = axios.create({
  baseURL: YELP_API_URL,
  headers: { Authorization: `Bearer ${process.env.YELP_API_KEY}` },
});

export async function searchPlaces(params) {
  try {
    const { data } = await authedAxios.get('/businesses/search', { params });
    return data.businesses;
  } catch (e) {
    console.log('search failed!', e);
  }
}

export async function getPlaceDetails(placeId) {
  try {
    const { data } = await authedAxios.get(`/businesses/${placeId}`);
    return data;
  } catch (e) {
    console.log('detail search failed!', e);
  }
}
