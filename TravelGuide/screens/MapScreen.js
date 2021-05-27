import React, { Component } from "react";
import { Dimensions, SafeAreaView, StyleSheet } from "react-native";
import Map from "../components/Map";

import MapHeader from "../components/MapHeader";

class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "",
      to: "",
      transportationMode: "bus",
      mode: "map",
    };
  }

  onFromChange(from) {
    this.setState({
      from,
    });
  }

  onToChange(to) {
    this.setState({
      to,
    });
  }

  swapFromTo() {
    this.setState({
      from: this.state.to,
      to: this.state.from,
    });
  }

  onTransportationModeChange(transportationMode) {
    this.setState({
      transportationMode,
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MapHeader
          from={this.state.from}
          to={this.state.to}
          transportationMode={this.state.transportationMode}
          onFromChange={this.onFromChange.bind(this)}
          onToChange={this.onToChange.bind(this)}
          swapFromTo={this.swapFromTo.bind(this)}
          onChangeTransportationMode={this.onTransportationModeChange.bind(
            this
          )}
        />
        <Map />
      </SafeAreaView>
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

export default MapScreen;
