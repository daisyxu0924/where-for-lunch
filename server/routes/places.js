import { Router } from 'express';

import { searchPlaces, placeDetails } from '../services/yelp';
import {
  toSearchPlacesParams,
  fromSearchPlacesParams,
  fromPlacesDetailsParams,
} from '../lib/placeHelper';

const router = Router();
router.get('/', async (req, res) => {
  const list = await searchPlaces(toSearchPlacesParams(req.query));
  res.send(list.map(i => fromSearchPlacesParams(i)));
});

router.get('/:id', async (req, res) => {
  const data = await placeDetails(req.params.id);
  console.log(data);
  res.send(fromPlacesDetailsParams(data));
  // res.send(data);
});

export default router;
