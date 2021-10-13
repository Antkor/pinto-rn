import * as React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

export default function newsList({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList style={{width: '100%'}}
        data={[
          { key: "News 1" },
          { key: "News 2" },
          { key: "News 3" },
          { key: "News 4" },
        ]}
        renderItem={({ item }) => (
          <NewsListItem
            navigation={navigation}
            title={item.key}
            text="Dummy Text"
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
        <View>
          <Text>{title}</Text>
          <Text>{text}</Text>
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
      height: 100,
      with: 100,
    },
    cardContainer: {
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 4px 16px 0px',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        backgroundColor: "#fff",
    },
  });