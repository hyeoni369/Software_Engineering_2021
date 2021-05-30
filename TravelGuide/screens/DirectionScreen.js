import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import Map from "../components/Map";
import MapHeader from "../components/MapHeader";
import Location from "../components/location";
import PlaceSearchBox from "../components/PlaceSearchBox";
import DirectionInfo from "../components/DirectionInfo";
import DirectionAPI from "../components/directionAPI";

class DirectionScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      from: {
        name: "내 위치",
      },
      to: null,
      transportationMode: "bus",
      direction: {},
    };
    this.directionApi = new DirectionAPI();
    this._getLocationAsync();
  }

  componentDidUpdate(_prevProps, prevState) {
    if (
      prevState?.from !== this.state?.from ||
      prevState?.to !== this.state?.to
    ) {
      this.findDirection(this.state.from, this.state.to);
    }
  }

  async findDirection(origin, destination) {
    const direction = await this.directionApi.getDirection(origin, destination);
    this.setState({ direction: this.directionApi.parse(direction) });
  }

  _getLocationAsync = async () => {
    const currentLocation = await Location.getCurrentLocationAsync();
    this.setState({
      from: {
        ...this.state.from,
        ...currentLocation,
      },
    });
  };

  setFrom(from) {
    this.setState({ from });
  }

  setTo(to) {
    this.setState({ to });
  }

  onFromPress() {
    this.props.navigation.navigate("PlaceSearch", {
      setPlace: this.setFrom.bind(this),
    });
  }

  onToPress() {
    this.props.navigation.navigate("PlaceSearch", {
      setPlace: this.setTo.bind(this),
    });
  }

  swapFromTo() {
    this.setState({
      from: this.state.to,
      to: this.state.from,
    });
  }

  onTransportationModeChange(transportationMode) {
    this.setState({ transportationMode });
  }

  render() {
    const origin = {
      latitude: this.state.from?.latitude,
      longitude: this.state.from?.longitude,
    };
    const destination = {
      latitude: this.state.to?.latitude,
      longitude: this.state.to?.longitude,
    };

    return (
      <View style={styles.container}>
        {this.state.from?.name !== "내 위치" || this.state.to ? (
          <MapHeader
            from={this.state.from}
            to={this.state.to}
            transportationMode={this.state.transportationMode}
            onFromPress={this.onFromPress.bind(this)}
            onToPress={this.onToPress.bind(this)}
            swapFromTo={this.swapFromTo.bind(this)}
            onChangeTransportationMode={this.onTransportationModeChange.bind(
              this
            )}
          />
        ) : (
          <PlaceSearchBox mode={"float"} onPress={this.onToPress.bind(this)} />
        )}
        <Map
          origin={origin}
          destination={destination}
          mode={this.state.transportationMode}
        />
        <DirectionInfo direction={this.state.direction} />
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
});

export default DirectionScreen;
