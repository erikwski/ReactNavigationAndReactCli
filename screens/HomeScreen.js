import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
const {title} = StyleSheet.create({
  title: {
    fontSize: 40,
    marginTop: 40,
    marginBottom: 40,
  },
});

export const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={title}>CATEGORIES</Text>
    </View>
  );
};
