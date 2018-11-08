
import { getRandom, isEmpty } from 'client/lib/utils';

describe('getRandom', () => {
  test('returns null when passed in an empty list', () => {
    expect(getRandom([])).toBe(null);
  });
  test('returns null when passed in null', () => {
    expect(getRandom()).toBe(null);
  });
});

describe('isEmpty', () => {
  test('returns true when pass null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  test('returns true when pass undefined', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  test('returns true when pass empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  test('returns false when pass 0', () => {
    expect(isEmpty(0)).toBe(false);
  });

  test('returns false when pass 0', () => {
    expect(isEmpty(0)).toBe(false);
  });
  
  test('returns false when pass double', () => {
    expect(isEmpty(1.2)).toBe(false);
  });
});
