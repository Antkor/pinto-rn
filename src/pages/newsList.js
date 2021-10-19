import * as React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

import { newsData } from "../common/data/newsData";

export default function newsList({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList style={{width: '100%'}}
        data={newsData}
        renderItem={({ item }) => (
          <NewsListItem
            navigation={navigation}
            title={item.title}
            text={item.text}
          ></NewsListItem>
        )}
      />
    </View>
  );
}

function NewsListItem({navigation, imgUrl, title, text }) {
    return (
      <TouchableOpacity style={styles.cardContainer} onPress={() => navigation.navigate("NewsDetails", {imgUrl, title, text})}>
        <Image
          style={styles.image}
          source={require("../../assets/logo-hq.png")}
          resizeMode="contain"
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text.substring(0, 140)}...</Text>
        </View>
      </TouchableOpacity >
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#efefef",
      alignItems: "center",
      justifyContent: "center",
    },
    image: {
      height: 120,
      width: 120,
      marginRight: 15,
    },
    cardContainer: {
      boxShadow: "rgba(0, 0, 0, 0.12) 0px 4px 16px 0px",
      marginTop: 15,
      marginLeft: 10,
      marginRight: 10,
      paddingHorizontal: 15,
      paddingVertical: 15,
      backgroundColor: "#fff",
      display: "flex",
      flexDirection: "row",
    },
    infoContainer: {
      flex: 1,
    },
    title: {
      fontFamily: "Yanone Kaffeesatz",
      fontSize: 22,
      marginBottom: 5,
      color: "#DF9882"
    },
    text: {
      fontFamily: "Yanone Kaffeesatz",
      fontSize: 16,
      color: "#777",
      marginBottom: 5,
    }
  });