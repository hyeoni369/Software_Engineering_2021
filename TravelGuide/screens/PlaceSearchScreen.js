import React, { Component } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import Place from "../components/place";
import PlaceAPI from "../components/placeAPI";
import PlaceSearchBar from "../components/PlaceSearchBar";
import SearchedPlace from "../components/SearchedPlace";

class PlaceSearchScreen extends Component {
  constructor(props) {
    super(props);

    const { setPlace } = props.route.params;

    this.state = {
      keyword: "",
      searchedPlaces: [],
      nextPageToken: "",
    };
    this.placeAPI = new PlaceAPI();
    this.setPlace = setPlace;
  }

  async onChangeKeyword(keyword) {
    this.setState({ keyword });
    const {
      data: { results, next_page_token },
    } = await this.placeAPI.searchPlaces(keyword);

    this.setPlacesData(results, next_page_token);
  }

  setPlacesData(places, nextPageToken) {
    // 장소들 객체로 만들어서 저장
    const searchedPlaces = places.map((placeData) => {
      // 이름
      const placeName = placeData.name ? placeData.name : "?";

      // formatted_address, lat, lng, icon, rating, user_ratings_total
      const {
        formatted_address,
        geometry: {
          location: { lat, lng },
        },
        icon,
        rating,
        user_ratings_total,
      } = placeData;

      // 사진 데이터
      const photos = placeData.photos
        ? placeData.photos.map((photoInfo) => photoInfo.photo_reference)
        : [];

      // 장소 객체 만들어서 반환
      return new Place(
        formatted_address,
        lat,
        lng,
        icon,
        placeName,
        rating,
        photos,
        user_ratings_total
      );
    });

    // 객체로 해서 state 에 저장
    this.setState({
      nextPageToken,
      searchedPlaces,
    });
  }

  onPlaceCardSelected(place) {
    this.setPlace(place);
    this.props.navigation.goBack();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <PlaceSearchBar
          keyword={this.state.keyword}
          onChangeKeyword={this.onChangeKeyword.bind(this)}
        />
        <ScrollView>
          {this.state.searchedPlaces.map((searchedPlace, index) => (
            <SearchedPlace
              {...searchedPlace}
              onPlaceCardSelected={this.onPlaceCardSelected.bind(this)}
              key={index}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default PlaceSearchScreen;
