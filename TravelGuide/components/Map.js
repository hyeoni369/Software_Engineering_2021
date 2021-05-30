import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import { GOOGLE_API_KEY } from "../GOOGLE_API_KEY";
import Location from "./location";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapRegion: null,
      hasLocationPermissions: false,
      locationResult: null,
    };
  }

  componentDidMount() {
    this._getLocationAsync();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.origin?.latitude !== this.props.origin?.latitude ||
      prevProps.destination?.latitude !== this.props.destination?.latitude
    ) {
      this.setState({
        mapRegion: {
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
          ...this.props.origin,
        },
      });
    }
  }

  async _getLocationAsync() {
    const currentLocation = await Location.getCurrentLocationAsync();
    this.setState({
      mapRegion: {
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
        ...currentLocation,
      },
    });
  }

  convertMode(mode) {
    if (mode === "walk") {
      return "WALKING";
    } else if (mode == "bus") {
      return "TRANSIT";
    } else if (mode == "bicycle") {
      return "BICYCLING";
    } else if (mode == "car") {
      return "DRIVING";
    }
    return "TRANSIT";
  }

  render() {
    const { origin, destination, mode } = this.props;
    const convertedMode = this.convertMode(mode);

    return (
      <View style={styles.container}>
        <MapView
          // provider={"google"}
          initialRegion={{
            latitude: 37.50465079401713,
            longitude: 126.95738252505444,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          showsUserLocation={true}
          loadingEnabled={true}
          style={styles.map}
          region={this.state.mapRegion}
        >
          {origin?.latitude &&
          origin?.longitude &&
          destination?.latitude &&
          destination?.longitude &&
          mode ? (
            <MapViewDirections
              origin={origin}
              destination={destination}
              apikey={GOOGLE_API_KEY}
              language={"ko"}
              mode={convertedMode}
              strokeWidth={5}
              strokeColor={"#B500FF"}
            />
          ) : null}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default Map;
