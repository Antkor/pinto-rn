import * as React from "react";
import { View, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { FontAwesome } from '@expo/vector-icons';

export default function Home({ navigation }) {
  return (
      <View>
    <QRCode value="20118702776"/>
    <FontAwesome.Button name="home">Home</FontAwesome.Button>
    </View>
  );
}
