import Ionicons from "@expo/vector-icons/Ionicons";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlaceTextBox from "./PlaceTextBox";

class Direction extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { from, to, swapFromTo, onFromPress, onToPress } = this.props;

    return (
      <View style={styles.container}>
        <Ionicons
          name={"git-compare"}
          size={30}
          color={"#0F0F0F"}
          onPress={swapFromTo}
          style={styles.swapButton}
        ></Ionicons>
        <View style={styles.directionBox}>
          <PlaceTextBox
            icon={"location"}
            value={from.name}
            onPress={onFromPress}
          />
          <PlaceTextBox
            icon={"navigate-circle"}
            value={to.name}
            onPress={onToPress}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingRight: 5,
  },
  swapButton: {
    marginRight: 3,
  },
  directionBox: {
    width: "87%",
  },
});

export default Direction;
