import axios from "axios";

class PlaceAPI {
  static IMAGE_SIZE = 400;

  static API_KEY = "AIzaSyCWY4qFf2hFomtUDwJyzaCd5-DXc0pUTs4";
  static PLACE_SEARCH_API_URL = `https://maps.googleapis.com/maps/api/place/textsearch/json?language=ko&key=${this.API_KEY}&query=`;
  static PHOTO_API_URL = `https://maps.googleapis.com/maps/api/place/photo?language=ko&maxwidth=${this.IMAGE_SIZE}&key=${this.API_KEY}&photoreference=`;

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
