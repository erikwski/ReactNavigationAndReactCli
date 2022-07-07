import React from "react";
import { Text, Pressable, View } from "react-native";
export const CardCategories = (props) => {
  function goToListOfMeals() {
    console.log("click");
    props.navItem.navigate("listOfMeals", { name: props.id });
  }
  let default_style = {
    margin: 15,
    borderRadius: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };
  return (
    <View
      style={{
        ...default_style,
        backgroundColor: props.color,
      }}
    >
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={goToListOfMeals}
        style={{ padding: 10, borderRadius: 20 }}
      >
        <Text style={{ color: "#fff", fontSize: 26, textAlign: "center" }}>
          {props.text}
        </Text>
      </Pressable>
    </View>
  );
};
