import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import TransportationIcon from "./TransportationIcon";

class Transportation extends Component {
  constructor(props) {
    super(props);
  }

  icon_size = 22;
  transportations = ["walk", "bus", "bicycle", "car"];

  render() {
    const { transportationMode, onChangeTransportationMode } = this.props;

    return (
      <View style={styles.container}>
        {this.transportations.map((transportation, index) => (
          <TransportationIcon
            transportationMode={transportation}
            currentMode={transportationMode}
            onChangeTransportationMode={onChangeTransportationMode}
            icon_size={this.icon_size}
            key={index}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    marginVertical: 5,
    marginBottom: 8,
  },
});

export default Transportation;
