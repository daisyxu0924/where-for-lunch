
import { getRandom, hasCoordinate } from 'client/lib/utils';

describe('getRandom', () => {
  test('returns null when passed in an empty list', () => {
    expect(getRandom([])).toBe(null);
  });
  test('returns null when passed in null', () => {
    expect(getRandom()).toBe(null);
  });
});

describe('hasCoordinate', () => {
  test('returns true when pass coordinates', () => {
    expect(hasCoordinate(53.363665164191865, -7.591552734375001)).toBe(true);
  });
  test('returns false when pass none', () => {
    expect(hasCoordinate(null, undefined)).toBe(false);
  });

});
