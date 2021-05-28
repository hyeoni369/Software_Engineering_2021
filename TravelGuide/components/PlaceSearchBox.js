import Ionicons from "@expo/vector-icons/Ionicons";
import React, { Component } from "react";
import { Pressable, StatusBar, StyleSheet, Text } from "react-native";
import * as Device from "expo-device";

class PlaceSearchBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onPress } = this.props;

    return (
      <Pressable onPress={onPress} style={[styles.container, styles.shadow]}>
        <Ionicons
          name={"search"}
          size={20}
          color={"#737373"}
          style={styles.icon}
        />
        <Text style={styles.text}>{"목적지 검색"}</Text>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 15,
    marginTop: Device.osName === "Android" ? StatusBar.currentHeight + 10 : 15,
    padding: 10,
    position: "absolute",
    top: Device.osName === "Android" ? 10 : 45,
    zIndex: 1,
    width: "90%",
    borderColor: "#B500FF",
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: "#ffffff",
  },
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  text: {
    textAlignVertical: "center",
    fontSize: 18,
    color: "#737373",
    marginHorizontal: 15,
  },
});

export default PlaceSearchBox;
