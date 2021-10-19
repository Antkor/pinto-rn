import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Linking, Image, Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { storeData } from "../common/data/storeData";
import { applyHaversine, getUserLocation } from "../common/utils";

const width = Dimensions.get('window').width; 

export default function Stores({ navigation }) {
  const [location, setLocation] = useState();
  const [stores, setStores] = useState(storeData);

  useEffect(() => {
    const fetchLocation = async () => {
      const userLocaltion = await getUserLocation();
      setLocation(userLocaltion);

      const storeDataWithDistance = applyHaversine(
        storeData,
        userLocaltion.lat,
        userLocaltion.long
      );
  
      const sortedStoreData = storeDataWithDistance.sort(
        (locationA, locationB) => {
          return locationA.distance - locationB.distance;
        }
      );
  
      setStores([...sortedStoreData]);
    };

    fetchLocation();
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
            distance={item.distance}
          ></StoreListItem>
        )}
      />
    </View>
  );
}

function StoreListItem({ imgUrl, name, address, distance, phone }) {
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
            Distance: {distance}
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
    display: "flex",
    flexDirection: "row",
  },
  infoContainer: {
    flex: 1,
  },
  image: {
    height: 120,
    width: 120,
    marginRight: 10,
  },
  storeName: {
    fontFamily: "Yanone Kaffeesatz",
    fontSize: 22,
    marginBottom: 5,
  },
  storeAddress: {
    fontFamily: "Yanone Kaffeesatz",
    fontSize: 20,
    color: "#777",
    marginBottom: 5,
  },
  distance: {
    fontFamily: "Yanone Kaffeesatz",
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
    height: 35,
    width: width * 0.28,
  },
});
