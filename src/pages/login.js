import React, { useState } from "react";
import { View, Text, Image, TextInput } from "react-native";
import { AuthContext } from "../routes/mainDrawer";
import { StyleSheet } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function newsDetails({ navigation }) {
  const { signIn } = React.useContext(AuthContext);
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/logo-hq.png")}
        resizeMode="contain"
      />
      <View style={styles.inputContainer}>
        <View style={styles.inputLabel}>
          <Ionicons name="at" size={20}></Ionicons>
          <Text>Email</Text>
        </View>
        <TextInput
          style={styles.inputField}
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputLabel}>
          <Ionicons name="key-outline" size={20}></Ionicons>
          <Text>Password</Text>
        </View>
        <TextInput
          style={styles.inputField}
          onChangeText={(text) => setEmail(text)}
          secureTextEntry={true}
        ></TextInput>
      </View>
      <View style={styles.buttonContainer}>
        <FontAwesome.Button
          style={styles.primaryButton}
          onPress={() => {
            signIn({ userName: "1", password: "1" });
          }}
          borderRadius={0}
          backgroundColor="#75C8CC"
          color="#fff"
        >
          Login
        </FontAwesome.Button>
        <FontAwesome.Button
          borderRadius={0}
          style={styles.secondaryButton}
          backgroundColor="#fff"
          color="#75C8CC"
        >
          Register
        </FontAwesome.Button>
      </View>
      <Text style={styles.forgotPassword}>Forgot your password?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 140,
    height: 60,
    marginBottom: 30,
  },
  inputContainer: {
    display: "flex",
    width: "80%",
  },
  inputLabel: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 10,
  },
  inputField: {
    borderColor: "#75C8CC",
    borderWidth: 2,
    height: 40,
  },
  buttonContainer: {
    display: "flex",
    width: "80%",
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "space-between"
  },
  primaryButton: {
    justifyContent: "center",
    width: 145,
  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: "#75C8CC",
    justifyContent: "center",
    width: 145
  },
  forgotPassword: {
    color: "#DF9882",
    fontSize: 16,
    marginBottom: 40
  },
});
