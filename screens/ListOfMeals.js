import React from "react";
import { StyleSheet, View, Text } from "react-native";
const { title } = StyleSheet.create({
  title: {
    fontSize: 40,
    marginTop: 40,
    marginBottom: 40,
  },
});

export const ListOfMeals = ({ navigation, route }) => {
  return (
    <View>
      <Text style={title}>ITEM</Text>
    </View>
  );
};
