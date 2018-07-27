
import { getRandom, hasLatLng, isCategoryChecked, formatCategories } from 'client/lib/utils';

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

describe('isCategoryChecked', () => {
  const arr = ['a', 'aaa', 'aaaa'];

  test('returns true if passed category is already checked', () => {
    expect(isCategoryChecked(arr, 'aaa')).toBeTruthy();
  });

  test('returns false if passed category is already checked', () => {
    expect(isCategoryChecked(arr, 'aa')).toBeFalsy();
  });
});

describe('formatCategories', () => {
  test('returns correct format of categories array for API Call', () => {
    expect(formatCategories(['a', 'b', 'c', 'd', 'c'])).toEqual('a,b,c,d');
  });
});
