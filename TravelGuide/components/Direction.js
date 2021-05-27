import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { IconButton } from "react-native-paper";

import TextInputBox from "./TextInputBox";

class Direction extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { from, to, swapFromTo, onFromChange, onToChange } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.swapButton}>
          <IconButton
            icon={"compare-vertical"}
            size={40}
            onPress={swapFromTo}
          ></IconButton>
        </View>
        <View style={styles.directionBox}>
          <TextInputBox
            placeholder={"출발지 입력"}
            value={from}
            onChange={onFromChange}
          />
          <TextInputBox
            placeholder={"도착지 입력"}
            value={to}
            onChange={onToChange}
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    width: "10%",
  },
  directionBox: {
    width: "85%",
  },
});

export default Direction;
