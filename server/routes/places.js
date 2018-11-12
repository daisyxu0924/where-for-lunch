import { Router } from 'express';

import { searchPlaces } from '../services/yelp';
import {
  toSearchPlacesParams,
  fromSearchPlacesParams,
} from '../lib/placeHelper';
import { PageNotFound } from '../lib/resultHelper';

const router = Router();
router.get('/', async (req, res) => {
  try {
    const list = await searchPlaces(toSearchPlacesParams(req.query));
    if (list.length > 0) return res.send(list.map(i => fromSearchPlacesParams(i)));
    PageNotFound(res);
  } catch(e) {
    PageNotFound(res);
  }
});

export default router;
