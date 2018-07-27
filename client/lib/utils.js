export function getRandom(list) {
  if (!list || list.length === 0) return null;
  const rand = list[Math.floor(Math.random() * list.length)];
  return rand;
}

export function hasLatLng(obj) {
  const { latitude, longitude } = obj;
  return !isNaN(latitude) && !isNaN(longitude);
}

export function isCategoryChecked(arr, obj) {
  return arr.indexOf(obj) > -1;
}

export function formatCategories(arr) {
  return arr
    .filter((x, i, a) => a.indexOf(x) === i)
    .join(',');
}
