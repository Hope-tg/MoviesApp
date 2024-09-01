import "react-native-gesture-handler";
import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import MovieScreen from "../Screens/MovieScreen";
import PersonScreen from "../Screens/PersonScreen";
import SearchScreen from "../Screens/SearchScreen";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <Stack.Navigator screenOptions={{headerShown : false}} >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Person" component={PersonScreen} />
        <Stack.Screen name="Movie" component={MovieScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
