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
        <Ionicons name="at" size={20}></Ionicons>
        <Text>Email</Text>
        <TextInput onChangeText={(text) => setEmail(text)}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <Ionicons name="key-outline" size={20}></Ionicons>
        <Text>password</Text>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          secureTextEntry={true}
        ></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <FontAwesome.Button
          onPress={() => {
            signIn({ userName: "1", password: "1" });
          }}
        >
          Login
        </FontAwesome.Button>
        <FontAwesome.Button>Register</FontAwesome.Button>
      </View>
      <Text>Forgot your password?</Text>
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
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
  },
});
