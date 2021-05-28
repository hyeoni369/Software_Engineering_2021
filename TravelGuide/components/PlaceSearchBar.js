import React, { Component } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";

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
  },
  floatOption: {
    position: "absolute",
    top: 45,
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
