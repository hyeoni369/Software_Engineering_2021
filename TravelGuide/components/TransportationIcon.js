import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";

import ImageIcon from "./ImageIcon";

const icons = {
  walk: {
    w: require("../assets/icons/walk_w.png"),
    b: require("../assets/icons/walk_b.png"),
  },
  bus: {
    w: require("../assets/icons/bus_w.png"),
    b: require("../assets/icons/bus_b.png"),
  },
  bike: {
    w: require("../assets/icons/bike_w.png"),
    b: require("../assets/icons/bike_b.png"),
  },
  car: {
    w: require("../assets/icons/car_w.png"),
    b: require("../assets/icons/car_b.png"),
  },
};

class TransportationIcon extends Component {
  constructor(props) {
    super(props);
    if (props.transportationMode === "walk") {
      this.icon = icons.walk;
    } else if (props.transportationMode === "bus") {
      this.icon = icons.bus;
    } else if (props.transportationMode === "bike") {
      this.icon = icons.bike;
    } else if (props.transportationMode === "car") {
      this.icon = icons.car;
    }
  }

  render() {
    const {
      transportationMode,
      currentMode,
      onChangeTransportationMode,
      icon_size,
    } = this.props;

    return (
      <IconButton
        icon={
          transportationMode === currentMode
            ? () => <ImageIcon source={this.icon.w} size={icon_size} />
            : () => <ImageIcon source={this.icon.b} size={icon_size} />
        }
        size={icon_size}
        onPress={() => onChangeTransportationMode(transportationMode)}
        accessibilityLabel={transportationMode}
        style={
          transportationMode === currentMode
            ? styles.selectedButton
            : styles.notSelectedButton
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  selectedButton: {
    backgroundColor: "#B500FF",
  },
  notSelectedButton: {},
});

export default TransportationIcon;
