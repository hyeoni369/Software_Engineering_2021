import React, { Component } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

class PlaceTextBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { icon, value, onPress } = this.props;

    return (
      <Pressable onPress={onPress} style={styles.container}>
        <Ionicons name={icon} size={23} color={"#B500FF"} style={styles.icon} />
        <Text style={styles.text}>{value}</Text>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderColor: "#B500FF",
    borderWidth: 1,
    borderRadius: 20,
    margin: 3,
  },
  icon: {
    marginHorizontal: 10,
  },
  text: {
    fontSize: 16,
    marginVertical: 7,
  },
});

export default PlaceTextBox;
