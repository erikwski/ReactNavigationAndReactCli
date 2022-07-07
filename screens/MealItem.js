import React from "react";
import { StyleSheet, View, Text } from "react-native";
const { title } = StyleSheet.create({
  title: {
    fontSize: 40,
    marginTop: 40,
    marginBottom: 40,
  },
});

export const MealItem = ({ navigation, route }) => {
  return (
    <View>
      <Text style={title}>LIST</Text>
    </View>
  );
};
