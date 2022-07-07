import React from "react";

import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./screens/HomeScreen";
import { ListOfMeals } from "./screens/ListOfMeals";
import { MealItem } from "./screens/MealItem";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="listOfMeals" component={ListOfMeals} />
        <Stack.Screen name="singleMeal" component={MealItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
