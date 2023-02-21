import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import { Background } from "../Background/Index";
import { CircularButton } from "../CicularButton/Index";

export function SignIn({ navigation }) {
  return (
    <>
      <View>
        <Background />
        <ImageBackground style={styles.image}>
          <Text style={styles.welomeTitle}>Welcome</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
            <CircularButton />
          </TouchableOpacity>
          <View style={styles.signInContainer}>
            <Text style={styles.signInTitle}>Sign In</Text>
            <View style={styles.signInInputContainer}>
              <Ionicons name="phone-portrait-outline" size={24} color="red" />
              <TextInput
                inputMode="tel"
                placeholder="Phone"
                style={styles.signInInput}
              ></TextInput>
            </View>
            <View style={styles.signInInputContainer}>
              <Ionicons name="lock-closed-outline" size={24} color="red" />

              <TextInput
                secureTextEntry={true}
                autoCorrect={false}
                inputMode="password"
                placeholder="Password"
                style={styles.signInInput}
              ></TextInput>
            </View>
            <View style={styles.otherOptionsContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate("ForgotPassword")}
              >
                <Text style={styles.forgotPasswordBtn}>Forgot Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text style={styles.signUpBtn}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    position: "absolute",
    top: "90%",
    width: "100%",
    height: 700,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  signInContainer: {
    marginTop: 50,
    marginLeft: 30,
  },

  signInTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },

  signInInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
  },

  signInInput: {
    marginLeft: 10,
    fontSize: 16,
    borderBottomColor: "red",
    borderBottomWidth: 2,
    width: 300,
  },

  otherOptionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    alignItems: "center",
  },

  forgotPasswordBtn: {
    marginLeft: 10,
    color: "red",
    fontSize: 16,
  },

  signUpBtn: {
    marginRight: 50,
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  welomeTitle: {
    paddingLeft: 40,
    fontSize: 50,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
    top: "-48%",
    alignSelf: "center",
  },
});
