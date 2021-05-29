import axios from "axios";

import { GOOGLE_API_KEY } from "../GOOGLE_API_KEY";

class DirectionAPI {
  DIRECTION_API_URL = `https://maps.googleapis.com/maps/api/directions/json?language=ko&mode=transit&key=${GOOGLE_API_KEY}`;

  async getDirection(origin, destination) {
    if (
      !(
        origin?.latitude &&
        origin?.longitude &&
        destination?.latitude &&
        destination?.longitude
      )
    ) {
      return null;
    }

    // 길찾기 URL
    const directionURL = `${this.DIRECTION_API_URL}&origin=${origin?.latitude},${origin?.longitude}&destination=${destination?.latitude},${destination?.longitude}`;

    try {
      return await axios.get(directionURL);
    } catch (err) {
      console.error(err);
    }
  }

  parse(apiResponse) {
    if (!apiResponse) return null;

    const {
      data: { routes },
    } = apiResponse;

    const { arrival_time, departure_time, distance, duration, steps } =
      routes[0]?.legs[0];

    const instructions = steps.map((step) => {
      const {
        distance,
        duration,
        html_instructions,
        travel_mode,
        transit_details,
      } = step;

      if (travel_mode === "WALKING") {
        return {
          distance: distance.text,
          duration: duration.text,
          instructions: html_instructions,
        };
      } else if (travel_mode === "TRANSIT") {
        const { arrival_stop, departure_stop, line } = transit_details;
        return {
          distance: distance.text,
          duration: duration.text,
          instructions: `${line.name} ${line.short_name}`,
          arrival: arrival_stop.name,
          departure: departure_stop.name,
        };
      }
    });

    return {
      arrival_time,
      departure_time,
      distance,
      duration,
      instructions,
    };
  }
}

export default DirectionAPI;
