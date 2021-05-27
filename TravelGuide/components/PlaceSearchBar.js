import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";

class PlaceSearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onChangeKeyword, keyword } = this.props;

    return (
      <View style={styles.container}>
        <Searchbar
          placeholder="Search"
          onChangeText={(text) => onChangeKeyword(text)}
          value={keyword}
          style={styles.searchBar}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: "#B500FF",
    borderRadius: 30,
  },
});

export default PlaceSearchBar;
