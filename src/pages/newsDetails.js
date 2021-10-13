import * as React from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";

export default function newsDetails({ route, navigation }) {
  const { imgUrl, title, text } = route.params;
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../../assets/logo-hq.png")}
        resizeMode="cover"
      />
      <Text>{title}</Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
  },
});
