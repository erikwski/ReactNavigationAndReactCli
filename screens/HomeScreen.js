import React from "react";
import { StyleSheet, View, Text, FlatList, Dimensions } from "react-native";
import { CATEGORIES } from "../data/dummy";
import { CardCategories } from "../components/CardCategories";
const { title, listContainer } = StyleSheet.create({
  title: {
    fontSize: 40,
    marginTop: 10,
    marginBottom: 5,
    textAlign: "center",
  },
  listContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export const HomeScreen = ({ navigation }) => {
  let widthDevice = Dimensions.get("screen").width;
  return (
    <View>
      <Text style={title}>CATEGORIES</Text>
      <FlatList
        data={CATEGORIES}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        style={listContainer}
        numColumns={widthDevice > 500 ? 3 : 2}
        renderItem={(cat) => {
          return (
            <CardCategories
              id={cat.item.id}
              text={cat.item.title}
              color={cat.item.color}
              navItem={navigation}
              style={{ flex: 1 }}
            ></CardCategories>
          );
        }}
        keyExtractor={(cat) => cat.id}
      />
    </View>
  );
};
