import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/logo-hq.png")}
        resizeMode="contain"
      />
      <Text style={styles.aboutText}>
        Η εφαρμογή "Pinto" αναπτύχθηκε από τον Κοροσίδη Αντώνη για τις ανάγκες
        της διπλωματικής του εργασίας με τίτλο "Συγκριτικη αναλυση δημοφιλων
        framework αναπτυξης εφαρμογων για φορητες συσκευες με χρηση τεχνολογιων
        web" στο ΠΜΣ Εφαρμοσμένης Πληροφορικής στο Πανεπιστήμιο Μακεδονίας.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    textAlign: "center",
  },
  aboutText: {
    fontSize: 16,
  },
  image: {
    height: 100,
    width: 150,
    marginBottom: 20,
  },
});
