class Place {
  constructor(
    formatted_address,
    lat,
    lng,
    icon,
    name,
    rating,
    photos,
    user_ratings_total
  ) {
    this.formattedAddress = formatted_address;
    this.lat = lat;
    this.lng = lng;
    this.icon = icon;
    this.name = name;
    this.rating = rating;
    this.photos = photos;
    this.userRatingsTotal = user_ratings_total;
  }
}

export default Place;
