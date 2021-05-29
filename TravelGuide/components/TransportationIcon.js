import Ionicons from "@expo/vector-icons/Ionicons";
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

class TransportationIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      transportationMode,
      currentMode,
      onChangeTransportationMode,
      icon_size,
    } = this.props;

    return (
      <View
        style={[
          styles.roundButton,
          transportationMode === currentMode
            ? styles.selectedButton
            : styles.notSelectedButton,
        ]}
      >
        <Ionicons
          name={transportationMode}
          size={icon_size}
          color={transportationMode === currentMode ? "#ffffff" : "#000000"}
          onPress={() => onChangeTransportationMode(transportationMode)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  roundButton: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
  },
  selectedButton: {
    backgroundColor: "#B500FF",
  },
  notSelectedButton: {},
});

export default TransportationIcon;
