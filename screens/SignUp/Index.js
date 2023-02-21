import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Background } from "../Background/Index";
import { CircularButton } from "../CicularButton/Index";
import Ionicons from "react-native-vector-icons/Ionicons";

export function SignUp({ navigation }) {
  return (
    <View>
      <Background />
      <TouchableOpacity style={styles.backBtn}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="white"
          onPress={() => navigation.navigate("Signin")}
        />
      </TouchableOpacity>
      <ImageBackground style={styles.image}>
        <Text style={styles.welomeTitle}>Let's Start!</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("VerificationCode")}
        >
          <CircularButton />
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpTitle}>Sign Up</Text>
          <View style={styles.signUpInputContainer}>
            <Ionicons name="person-outline" size={24} color="red" />
            <TextInput
              inputMode="text"
              placeholder="Name"
              style={styles.signUpInput}
            ></TextInput>
          </View>
          <View style={styles.signUpInputContainer}>
            <Ionicons name="mail-outline" size={24} color="red" />
            <TextInput
              inputMode="email"
              placeholder="Email"
              style={styles.signUpInput}
            ></TextInput>
          </View>
          <View style={styles.signUpInputContainer}>
            <Ionicons name="lock-closed-outline" size={24} color="red" />
            <TextInput
              inputMode="password"
              placeholder="Password"
              style={styles.signUpInput}
            ></TextInput>
          </View>
          <View style={styles.signUpInputContainer}>
            <Ionicons name="phone-portrait-outline" size={24} color="red" />
            <TextInput
              placeholder="Phone"
              inputMode="tel"
              style={styles.signUpInput}
            ></TextInput>
          </View>
          <View style={styles.otherOptionsContainer}>
            <Text style={styles.alreadyHaveAccountBtn}>
              Already have an Account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
              <Text style={styles.signUpBtn}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    position: "absolute",
    top: "10%",
    left: "5%",
  },
  image: {
    position: "absolute",
    top: "77%",
    width: "100%",
    height: 700,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  signUpContainer: {
    marginTop: 50,
    marginLeft: 30,
  },

  signUpTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },

  signUpInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
  },

  signUpInput: {
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

  alreadyHaveAccountBtn: {
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
    fontSize: 40,
    paddingLeft: 30,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 80,
    position: "absolute",
    top: "-48%",
    alignSelf: "center",
  },
});
