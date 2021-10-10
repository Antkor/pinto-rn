import * as React from "react";
import { View, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { StyleSheet } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello Antonis</Text>
      <Text>Your pintos are:</Text>
      <Text>8</Text>
      <Text>Scan to use or add more pintos</Text>
      <QRCode value="20118702776" />
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
});