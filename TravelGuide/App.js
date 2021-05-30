import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LogBox } from "react-native";
import * as Device from "expo-device";
import Ionicons from "@expo/vector-icons/Ionicons";

import MapScreen from "./screens/MapScreen";
import RecommendScreen from "./screens/RecommendScreen";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

const MyTheme = {
  colors: {
    primary: "#ffffff",
  },
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={MyTheme} style={styles.container}>
        <Tab.Navigator
          tabBarOptions={{
            style: {
              backgroundColor: "#41246b",
            },
          }}
        >
          <Tab.Screen
            name="Map"
            component={MapScreen}
            options={{
              tabBarLabel: "길찾기",
              tabBarIcon: ({ color }) => (
                <Ionicons name="map" color={color} size={23} />
              ),
            }}
          />
          <Tab.Screen
            name="Recommend"
            component={RecommendScreen}
            options={{
              tabBarLabel: "추천",
              tabBarIcon: ({ color }) => (
                <Ionicons name="location" color={color} size={23} />
              ),
            }}
          />
          {/* <Tab.Screen name="Settings" component={PlaceSearchScreen} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
