import * as React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const width = Dimensions.get('window').width; 

export default function newsDetails({ route, navigation }) {
  const { imgUrl, title, text } = route.params;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/logo-hq.png")}
        resizeMode="contain"
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
    padding: 20,
  },
  image: {
    height: 200,
    width: width * 0.85,
  },
  title: {
    fontFamily: "Yanone Kaffeesatz",
    fontSize: 22,
    marginBottom: 10,
    color: "#DF9882",
    alignSelf: "flex-start",
    fontWeight: "bold"
  },
  text: {
    fontFamily: "Yanone Kaffeesatz",
    fontSize: 16,
    color: "#777",
    marginBottom: 5,
  }
});
