import { Router } from 'express';

import { searchPlaces, searchPlacesDetails } from '../services/yelp';
import {
  toSearchPlacesParams,
  fromSearchPlacesParams,
  reduceResponse,
} from '../lib/placeHelper';

const router = Router();
router.get('/', async (req, res) => {
  const list = await searchPlaces(toSearchPlacesParams(req.query));
  res.send(list.map(i => fromSearchPlacesParams(i)));
});

router.get('/place-details/', async (req, res) => {
 	const data = await searchPlacesDetails(req.query.id);
  	res.send(reduceResponse(data));
});

export default router;
