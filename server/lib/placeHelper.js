export function toSearchPlacesParams(params) {
  const result = {
    term: 'food',
    latitude: params.latitude,
    longitude: params.longitude,
    radius: params.radius,
    limit: 50,
    open_now: true,
  };
  // must not include fields if null
  if (params.categories) result.categories =  params.categories;
  if (params.price) result.price =  params.price;
  return result;
}

export function fromSearchPlacesParams(params) {
  const result = {
    address: params.location.display_address.join(', '),
    categories: params.categories ? params.categories.map(c => c.title) : null,
    distance: params.distance ? (params.distance.toFixed(2) + 'm') : null,
    price: params.price,
    phone: params.phone,
    id: params.id,
    img: params.image_url,
    name: params.name,
    rating: params.rating,
    reviewCount: params.review_count,
  };
  return result;
}

export function fromPlacesDetailsParams(params) {
  const result = {
    address: params.location.display_address.join(', '),
    categories: params.categories ? params.categories.map(c => c.title) : null,
    coordinates: params.coordinates,
    price: params.price,
    phone: params.phone,
    id: params.id,
    img: params.image_url,
    name: params.name,
    photos: params.photos,
    rating: params.rating,
    reviewCount: params.review_count,
    url: params.url,
  };
  return result;
}
