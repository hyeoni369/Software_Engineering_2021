import axios from "axios";

import { GOOGLE_API_KEY } from "../GOOGLE_API_KEY";

class PlaceAPI {
  static IMAGE_SIZE = 400;

  static PLACE_SEARCH_API_URL = `https://maps.googleapis.com/maps/api/place/textsearch/json?language=ko&key=${GOOGLE_API_KEY}&query=`;
  static PHOTO_API_URL = `https://maps.googleapis.com/maps/api/place/photo?language=ko&maxwidth=${this.IMAGE_SIZE}&key=${GOOGLE_API_KEY}&photoreference=`;

  async searchPlaces(keyword) {
    // 검색 URL
    const searchURL = `${PlaceAPI.PLACE_SEARCH_API_URL}${keyword}`;

    try {
      return await axios.get(searchURL);
    } catch (err) {
      console.error(err);
    }
  }

  static getPhotoURL(photoReference) {
    // 검색 URL
    const photoURL = `${PlaceAPI.PHOTO_API_URL}${photoReference}`;
    return photoURL;
  }
}

export default PlaceAPI;
