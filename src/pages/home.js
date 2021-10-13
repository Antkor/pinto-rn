import * as React from "react";
import { View, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { StyleSheet } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Hello Antonis!</Text>
      <Text style={styles.pointsLabel}>Your pintos are:</Text>
      <Text style={styles.points}>8</Text>
      <Text style={styles.qrcodeLabel}>Scan to use or add more pintos</Text>
      <QRCode value="20118702776" size={120}/>
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
  userName: {
    fontFamily: 'Yanone Kaffeesatz',
    fontSize: 24,
    marginBottom: 20,
  },
  pointsLabel: {
    fontFamily: 'Yanone Kaffeesatz',
    fontSize: 30,
    color: '#75C8CC',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  points: {
    fontFamily: 'Yanone Kaffeesatz',
    fontSize: 68,
    borderWidth: 6,
    borderColor: "#DF9882",
    color: '#DF9882',
    fontWeight: 'bold',
    marginBottom: 40,
    paddingHorizontal: 50,
    paddingVertical: 30,
  },
  qrcodeLabel: {
    fontFamily: 'Yanone Kaffeesatz',
    fontSize: 20,
    marginBottom: 20,
  }
});