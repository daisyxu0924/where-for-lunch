export function getRandom(list) {
  if (!list || list.length === 0) return null;
  const rand = list[Math.floor(Math.random() * list.length)];
  return rand;
}
// fnc that check coordinate
export function hasCoordinate(lat, long) {
  return !!(lat && long);
}
