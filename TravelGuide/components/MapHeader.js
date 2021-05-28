import React, { Component } from "react";
import { StyleSheet, SafeAreaView } from "react-native";

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
      onFromFocus,
      onToFocus,
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
          onFromFocus={onFromFocus}
          onToFocus={onToFocus}
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
  },
});

export default MapHeader;
