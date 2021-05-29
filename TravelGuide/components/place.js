class Place {
  constructor(
    formatted_address,
    latitude,
    longitude,
    icon,
    name,
    rating,
    photos,
    user_ratings_total
  ) {
    this.formattedAddress = formatted_address;
    this.latitude = latitude;
    this.longitude = longitude;
    this.icon = icon;
    this.name = name;
    this.rating = rating;
    this.photos = photos;
    this.userRatingsTotal = user_ratings_total;
  }
}

export default Place;
