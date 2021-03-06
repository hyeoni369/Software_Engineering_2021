import React, { Component } from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import * as Device from "expo-device";

class PlaceSearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onChangeKeyword, onFocus, keyword, mode } = this.props;
    const containerStyle =
      mode != "float"
        ? styles.container
        : [styles.container, styles.floatOption];

    return (
      <SafeAreaView style={containerStyle}>
        <Searchbar
          placeholder="목적지 검색"
          onChangeText={(text) => onChangeKeyword(text)}
          onFocus={onFocus}
          autoFocus={true}
          value={keyword}
          style={styles.searchBar}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    marginTop: Device.osName === "Android" ? StatusBar.currentHeight + 10 : 15,
  },
  floatOption: {
    position: "absolute",
    top: Device.osName === "Android" ? 10 : 45,
    zIndex: 1,
    width: "90%",
  },
  searchBar: {
    borderWidth: 1,
    borderColor: "#B500FF",
    borderRadius: 30,
  },
});

export default PlaceSearchBar;
