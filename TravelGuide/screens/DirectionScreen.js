import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Map from "../components/Map";

import MapHeader from "../components/MapHeader";
import PlaceSearchBar from "../components/PlaceSearchBar";

class DirectionScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      from: "",
      to: "",
      transportationMode: "bus",
    };
  }

  setFrom(from) {
    this.setState({ from });
  }

  setTo(to) {
    this.setState({ to });
  }

  onFromFocus() {
    this.props.navigation.navigate("PlaceSearch", {
      setPlace: this.setFrom.bind(this),
    });
  }

  onToFocus() {
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
    return (
      <View style={styles.container}>
        {this.state.from || this.state.to ? (
          <MapHeader
            from={this.state.from}
            to={this.state.to}
            transportationMode={this.state.transportationMode}
            onFromFocus={this.onFromFocus.bind(this)}
            onToFocus={this.onToFocus.bind(this)}
            swapFromTo={this.swapFromTo.bind(this)}
            onChangeTransportationMode={this.onTransportationModeChange.bind(
              this
            )}
          />
        ) : (
          <PlaceSearchBar mode={"float"} onFocus={this.onToFocus.bind(this)} />
        )}
        <Map />
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
