import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Card, Paragraph } from "react-native-paper";

class Waypoint extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { color, arrival, departure, distance, duration, instructions } =
      this.props;

    const borderColor = color ? color : "#B500FF";

    return (
      <View style={styles.container}>
        <Card
          style={[
            styles.card,
            styles.shadow,
            {
              shadowColor: borderColor,
            },
            { borderColor },
          ]}
        >
          <Card.Title title={`${duration} (${distance})`} />
          <Card.Content style={styles.content}>
            <Paragraph>{instructions}</Paragraph>
            {arrival && departure ? (
              <Paragraph>{`${departure} ~ ${arrival}`}</Paragraph>
            ) : null}
          </Card.Content>
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
    width: "90%",
    borderWidth: 2,
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3.0,
    elevation: 5,
  },
  content: { fontSize: 17 },
});

export default Waypoint;
