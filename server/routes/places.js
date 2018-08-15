import { Router } from 'express';

import { searchPlaces, getPlaceDetails } from '../services/yelp';
import {
  toSearchPlacesParams,
  fromSearchPlacesParams,
} from '../lib/placeHelper';

const router = Router();
router.get('/', async (req, res) => {
  const list = await searchPlaces(toSearchPlacesParams(req.query));
  res.send(list.map(i => fromSearchPlacesParams(i)));
});

router.get('/:placeid', async (req, res) => {
  const placeDetails = await getPlaceDetails(req.params.placeid);
  res.send(placeDetails);
});

export default router;
