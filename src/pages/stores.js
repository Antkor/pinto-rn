import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Linking, Image } from "react-native";
import { StyleSheet } from "react-native";
import * as Location from "expo-location";
import { FontAwesome } from "@expo/vector-icons";

import { stores } from "../data/storeData";

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
      <FlatList
        style={{ width: "100%" }}
        data={stores}
        renderItem={({ item }) => (
          <StoreListItem
            name={item.name}
            address={item.address}
            phone={item.phone}
            coordinates={{
              lat: item.coordinates.lat,
              long: item.coordinates.long,
            }}
          ></StoreListItem>
        )}
      />
    </View>
  );
}

function StoreListItem({ imgUrl, name, address, coordinates, phone }) {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.image}
        source={require("../../assets/logo-hq.png")}
        resizeMode="contain"
      />
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.storeName}>{name}</Text>
          <Text style={styles.storeAddress}>{address}</Text>
          <Text style={styles.distance}>
            Distance: {coordinates.lat}, {coordinates.long}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <FontAwesome.Button
            style={styles.storeButton}
            borderRadius={0}
            backgroundColor="#fff"
            color="#DF9882"
            name="compass"
          >
            Directions
          </FontAwesome.Button>
          <FontAwesome.Button
            style={styles.storeButton}
            borderRadius={0}
            backgroundColor="#fff"
            color="#DF9882"
            name="phone"
            onPress={() => Linking.openURL(`tel:${phone}`)}
          >
            Call
          </FontAwesome.Button>
        </View>
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
  cardContainer: {
    boxShadow: "rgba(0, 0, 0, 0.12) 0px 4px 16px 0px",
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "#fff",
    display: 'flex',
    flexDirection: 'row'
  },
  infoContainer: {
    flex: 1,
  },
  image: {
    height: 120,
    width: 120,
    marginRight: 10
  },
  storeName: {
    fontFamily: 'Yanone Kaffeesatz',
    fontSize: 22,
    marginBottom: 5,
  },
  storeAddress: {
    fontFamily: 'Yanone Kaffeesatz',
    fontSize: 20,
    color: "#777",
    marginBottom: 5,
  },
  distance: {
    fontFamily: 'Yanone Kaffeesatz',
    fontSize: 18,
    color: "#DF9882",
    marginBottom: 10,
  },
  buttonContainer: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  storeButton: {
    borderWidth: 2,
    borderColor: "#DF9882",
    justifyContent: "center",
    width: 100,
    height: 35,
  },
});
