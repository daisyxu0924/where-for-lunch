import { Router } from 'express';

import { searchPlaces, placeDetails } from '../services/yelp';
import {
  toSearchPlacesParams,
  fromSearchPlacesParams,
  fromPlacesDetailsParams,
} from '../lib/placeHelper';
import { PageNotFound } from '../lib/resultHelper';


const router = Router();
router.get('/', async (req, res) => {
  const list = await searchPlaces(toSearchPlacesParams(req.query));
  if (list.length > 0) return res.send(list.map(i => fromSearchPlacesParams(i)));
  PageNotFound(res);
}); 

router.get('/:id', async (req, res) => {
  const data = await placeDetails(req.params.id);
  console.log(data);
  res.send(fromPlacesDetailsParams(data));
  // res.send(data);
});

export default router;
