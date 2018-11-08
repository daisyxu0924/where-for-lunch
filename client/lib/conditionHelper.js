export function toCondtionParams(condition) {
  return {
    latitude: condition.latitude,
    longitude: condition.longitude,
    radius: condition.radius,
    categories: condition.foods.join(', '),
    price: condition.prices.join(', '),
  };
}
