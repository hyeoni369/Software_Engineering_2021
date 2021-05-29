import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";

class DirectionSummary extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { arrival_time, departure_time, distance, duration } = this.props;

    return (
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Title
            title={`${duration.text} (${distance.text})`}
            subtitle={`${departure_time.text} ~ ${arrival_time.text}`}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
  card: {
    marginVertical: 8,
    marginHorizontal: 15,
    width: "95%",
  },
  shadow: {
    shadowColor: "#B500FF",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 4.0,
    elevation: 5,
  },
});

export default DirectionSummary;
