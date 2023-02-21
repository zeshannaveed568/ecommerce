import React from "react";
import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Background } from "../Background/Index";

import Ionicons from "react-native-vector-icons/Ionicons";
export default function ForgotPassword({ navigation }) {
  return (
    <>
      <View>
        <View style={styles.contianer}>
          <Background />
        </View>
        <TouchableOpacity style={styles.backBtn}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="white"
            onPress={() => navigation.navigate("Signin")}
          />
        </TouchableOpacity>

        <Text style={styles.forgotPasswordTitle}>Forgot Password</Text>

        <ImageBackground style={styles.image}>
          <View style={styles.forgotPasswordContainer}>
            <View style={styles.forgotPasswordInputContainer}>
              <Ionicons name="mail-outline" size={24} color="red" />
              <TextInput
                placeholder="Email"
                style={styles.forgotPasswordInput}
              ></TextInput>
            </View>

            <View style={styles.forgotPasswordButton}>
              <TouchableOpacity>
                <Text style={styles.forgotPasswordButtonText}>
                  Send Verification Code
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  contianer: {
    width: "380%",
  },
  backBtn: {
    position: "absolute",
    top: "10%",
    left: "5%",
  },
  image: {
    position: "absolute",
    top: "60%",
    width: "100%",
    height: 700,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  forgotPasswordTitle: {
    position: "absolute",
    top: "40%",
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
  },

  forgotPasswordContainer: {
    marginTop: 10,
    marginLeft: 30,
  },

  forgotPasswordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
  },

  forgotPasswordInput: {
    marginLeft: 10,
    fontSize: 16,
    borderBottomColor: "red",
    borderBottomWidth: 1,
    width: 300,
  },

  forgotPasswordButton: {
    width: 250,
    height: 45,
    backgroundColor: "red",
    borderRadius: 10,
    marginTop: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  forgotPasswordButtonText: {
    color: "white",
    fontSize: 16,
  },
});
