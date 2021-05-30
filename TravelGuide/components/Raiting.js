import React, { Component } from "react";
import { Text } from "react-native";

class Raiting extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { rating, userRatingsTotal } = this.props;
    return (
      <Text style={{ marginRight: 15 }}>
        <Text style={{ color: "#B500FF" }}>★</Text> {rating} / 5.0 (
        {userRatingsTotal})
      </Text>
    );
  }
}

export default Raiting;
