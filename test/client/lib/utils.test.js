
import { getRandom, hasLatLng } from 'client/lib/utils';

describe('getRandom', () => {
  test('returns null when passed in an empty list', () => {
    expect(getRandom([])).toBe(null);
  });
  test('returns null when passed in null', () => {
    expect(getRandom()).toBe(null);
  });
});

describe('hasLatLng', () => {
  test('returns true when passed object is with lat and lng', () => {
    expect(hasLatLng({ latitude: 0, longitude: 2.1 })).toBe(true);
  });

  test('returns false when passed object is without lat and lng', () => {
    expect(hasLatLng({})).toBe(false);
  });

  test('returns false when passed object is without lat or lng', () => {
    expect(hasLatLng({ latitude: 1 })).toBe(false);
  });

  test('returns false when passed object\'s lat/lng are not numerical', () => {
    expect(hasLatLng({ latitude: 'test', longitude: 0 })).toBe(false);
  });
});
