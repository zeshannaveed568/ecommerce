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

export default function VerificationCode({ navigation }) {
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
            onPress={() => navigation.navigate("Signup")}
          />
        </TouchableOpacity>
        <ImageBackground style={styles.image}>
          <View style={styles.verificationContainer}>
            <Text style={styles.verificationTitle}>Code Verification</Text>

            <Text style={styles.verificaionLabel}>
              We have send you a code{" "}
            </Text>

            <Text style={styles.verficationLabel2}>
              Enter Verification Code here
            </Text>

            <View style={styles.digitsContainer}>
              <TextInput style={styles.digits}></TextInput>
              <TextInput style={styles.digits}></TextInput>
              <TextInput style={styles.digits}></TextInput>
              <TextInput style={styles.digits}></TextInput>
              <TextInput style={styles.digits}></TextInput>
            </View>
          </View>

          <View style={styles.otherOptionsContainer}>
            <Text style={styles.verificationCodeBtn}>
              Didn't recieve an SMS?
            </Text>
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
    top: "30%",
    width: "100%",
    height: 700,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  verificationContainer: {
    position: "absolute",
    top: "7%",
    left: "10%",
  },
  verificationTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  verificaionLabel: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: 10,
  },
  verficationLabel2: {
    fontSize: 14,
    color: "black",
    fontWeight: "500",
    marginTop: 10,
  },
  digitsContainer: {
    width: "90%",
    flexDirection: "row",
    marginVertical: 30,
    justifyContent: "space-around",
  },

  digits: {
    marginHorizontal: 10,
    width: 50,
    height: 70,
    backgroundColor: "white",
    borderRadius: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  otherOptionsContainer: {
    position: "absolute",
    top: "40%",
    left: "10%",
  },
  verificationCodeBtn: {
    fontSize: 14,
    color: "red",
    fontWeight: "500",
  },
});
