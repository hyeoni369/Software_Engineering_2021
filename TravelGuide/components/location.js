import * as ExpoLocation from "expo-location";

class Location {
  static async getCurrentLocationAsync() {
    let { status } = await ExpoLocation.requestForegroundPermissionsAsync();

    const location = await ExpoLocation.getCurrentPositionAsync({});
    const {
      coords: { latitude, longitude },
    } = location;

    return { latitude, longitude };
  }
}

export default Location;
