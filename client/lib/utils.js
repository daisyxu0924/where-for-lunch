export function getRandom(list) {
  if (!list || list.length === 0) return null;
  const rand = list[Math.floor(Math.random() * list.length)];
  return rand;
}

export function objectTostring(priceObj) {
  const obj = Object.keys(priceObj).reduce((p, c) => {
    if (priceObj[c]) p[c] = priceObj[c];
    return p;
  }, {});
  return Object.keys(obj).join();
}
