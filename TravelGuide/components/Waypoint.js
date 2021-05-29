import React, { Component } from "react";
import { Card } from "react-native-paper";

class Waypoint extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { arrival, departure, distance, duration, instructions } = this.props;
    return (
      <Card>
        <Card.Title
          title={"instructions"}
          subtitle="Card Subtitle"
          //   left={"LeftContent"}
        />
      </Card>
    );
  }
}

export default Waypoint;
