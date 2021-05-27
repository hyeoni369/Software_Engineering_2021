import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

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
      onFromChange,
      onToChange,
      swapFromTo,
      transportationMode,
      onChangeTransportationMode,
    } = this.props;

    return (
      <View
        style={{
          ...styles.container,
        }}
      >
        <Direction
          from={from}
          to={to}
          onFromChange={onFromChange}
          onToChange={onToChange}
          swapFromTo={swapFromTo}
        />
        <Transportation
          transportationMode={transportationMode}
          onChangeTransportationMode={onChangeTransportationMode}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MapHeader;
