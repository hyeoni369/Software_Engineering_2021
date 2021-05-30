import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LogBox } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import MapScreen from "./screens/MapScreen";

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
              paddingBottom: 5,
              backgroundColor: "#41246b",
            },
          }}
        >
          <Tab.Screen
            name="Map"
            component={MapScreen}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <Ionicons name="map" color={color} size={23} />
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
