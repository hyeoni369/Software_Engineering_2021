import React, { Component } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import * as Device from "expo-device";

import Direction from "./Direction";
import Transportation from "./Transportation";

class MapHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      from,
      to,
      onFromPress,
      onToPress,
      swapFromTo,
      transportationMode,
      onChangeTransportationMode,
    } = this.props;

    return (
      <SafeAreaView
        style={{
          ...styles.container,
        }}
      >
        <Direction
          from={from}
          to={to}
          onFromPress={onFromPress}
          onToPress={onToPress}
          swapFromTo={swapFromTo}
        />
        <Transportation
          transportationMode={transportationMode}
          onChangeTransportationMode={onChangeTransportationMode}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: Device.osName === "Android" ? StatusBar.currentHeight : 0,
  },
});

export default MapHeader;
