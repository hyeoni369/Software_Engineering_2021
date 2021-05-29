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
    primary: "#9200cc",
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
              marginBottom: 3,
            },
          }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === "Map") {
                return <Ionicons name={"map"} size={size} color={color} />;
              } else if (route.name === "Settings") {
                return <Ionicons name={"ios-list"} size={size} color={color} />;
              }
            },
          })}
        >
          <Tab.Screen name="Map" component={MapScreen} />
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
