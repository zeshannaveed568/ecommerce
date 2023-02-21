import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export function Background() {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/bg.jpg")}
        style={styles.image}
      ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "110%",
    height: 500,
    alignSelf: "center",
  },
});
