import Ionicons from "@expo/vector-icons/Ionicons";
import React, { Component } from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import BottomDrawer from "react-native-bottom-drawer-view";
import { BottomTabBarHeightContext } from "@react-navigation/bottom-tabs";

import Waypoint from "./Waypoint";
import DirectionSummary from "./DirectionSummary";

class DirectionInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const iconSize = 30;
    const containerHeight = 500;
    const { direction } = this.props;

    if (!direction?.arrival_time) return null;

    return (
      <BottomTabBarHeightContext.Consumer>
        {(tabBarHeight) => (
          <BottomDrawer
            containerHeight={containerHeight}
            borderRadius={50}
            downDisplay={containerHeight - iconSize}
            startUp={false}
            offset={tabBarHeight}
          >
            {
              <View style={styles.container}>
                <Ionicons name={"reorder-three"} size={iconSize} />
                <ScrollView style={styles.scrollViewContainer}>
                  <TouchableOpacity
                    activeOpacity={1}
                    style={[
                      styles.scrollViewContainer,
                      { marginBottom: tabBarHeight },
                    ]}
                  >
                    <DirectionSummary
                      arrival_time={direction.arrival_time}
                      departure_time={direction.departure_time}
                      distance={direction.distance}
                      duration={direction.duration}
                    />
                    {direction.instructions.map((waypoint, index) => (
                      <Waypoint {...waypoint} key={index} />
                    ))}
                  </TouchableOpacity>
                </ScrollView>
              </View>
            }
          </BottomDrawer>
        )}
      </BottomTabBarHeightContext.Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    paddingBottom: 20,
  },
  scrollViewContainer: {
    width: "100%",
  },
});

export default DirectionInfo;
