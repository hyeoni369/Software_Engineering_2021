import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LogBox } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import MapScreen from "./screens/MapScreen";
import RecommendScreen from "./screens/RecommendScreen";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
  "Location provider is unavailable. Make sure that location services are enabled.",
]);

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer style={styles.container}>
        <Tab.Navigator
          tabBarOptions={{
            inactiveTintColor: "#d3b2db",
            activeTintColor: "#ffffff",
            style: {
              backgroundColor: "#41246b",
            },
          }}
        >
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
