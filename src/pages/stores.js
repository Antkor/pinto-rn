import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Linking, Image } from "react-native";
import { StyleSheet } from "react-native";
import * as Location from "expo-location";
import { FontAwesome } from "@expo/vector-icons";

export default function Stores({ navigation }) {
  const [location, setLocation] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList style={{width: '100%'}}
        data={[
          { key: "Devin" },
          { key: "Dan" },
          { key: "Dominic" },
          { key: "Jackson" },
          { key: "James" },
          { key: "Joel" },
          { key: "John" },
          { key: "Jillian" },
          { key: "Jimmy" },
          { key: "Julie" },
        ]}
        renderItem={({ item }) => (
          <StoreListItem
            name={item.key}
            address="Test Address"
            phone="2310123456789"
          ></StoreListItem>
        )}
      />
      <Text>{JSON.stringify(location)}</Text>
    </View>
  );
}

function StoreListItem({ imgUrl, name, address, long, lat, phone }) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../../assets/logo-hq.png")}
        resizeMode="contain"
      />
      <View>
        <Text>{name}</Text>
        <Text>{address}</Text>
        <Text>Distance: </Text>
      </View>
      <View>
        <FontAwesome.Button>Directions</FontAwesome.Button>
        <FontAwesome.Button onPress={() => Linking.openURL(`tel:${phone}`)}>
          Call
        </FontAwesome.Button>
      </View>
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
  image: {
    height: 100,
    with: 100,
  },
});
