import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";

import PlaceAPI from "./placeAPI";
import Raiting from "./Raiting";

class SearchedPlace extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      formattedAddress,
      name,
      rating,
      photos,
      userRatingsTotal,
      onPlaceCardSelected,
    } = this.props;

    const photo = photos[0]
      ? PlaceAPI.getPhotoURL(photos[0])
      : "https://picsum.photos/400";

    return (
      <Card style={styles.card} onPress={() => onPlaceCardSelected(this.props)}>
        <Card.Cover source={{ uri: photo }} />
        <Card.Title
          title={name}
          subtitle={formattedAddress}
          right={() => (
            <Raiting rating={rating} userRatingsTotal={userRatingsTotal} />
          )}
        />
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    marginHorizontal: 15,
  },
});

export default SearchedPlace;
