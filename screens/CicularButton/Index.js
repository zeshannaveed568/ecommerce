import React from "react";
import {
  Image,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

export function CircularButton() {
  return (
    <View style={[styles.container, styles.elevation]}>
      <Ionicons name="arrow-forward-outline" size={50} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "#FF5A5F",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -40,
    right: 50,
  },

  elevation: {
    shadowColor: "#",
    shadowOffset: {
      width: 0,
      height: 500,
    },
    shadowOpacity: 0.5,
    shadowRadius: 24,

    elevation: 5,
  },
});
