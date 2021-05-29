import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

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

  _getLocationAsync = async () => {
    const currentLocation = await Location.getCurrentLocationAsync();
    this.setState({
      mapRegion: {
        latitudeDelta: 0.007,
        longitudeDelta: 0.007,
        ...currentLocation,
      },
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={"google"}
          showsUserLocation={true}
          loadingEnabled={true}
          style={styles.map}
          region={this.state.mapRegion}
        />
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
