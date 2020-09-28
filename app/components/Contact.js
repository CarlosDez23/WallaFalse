import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

import colors from "../config/colors";

function Contact({ name, listings, image }) {
  return (
    <View style={styles.contactContainer}>
      <Image source={image} style={styles.image}></Image>
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.listingsText}>{listings}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contactContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },

  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },

  textContainer: {
    padding: 5,
  },
  nameText: {
    color: colors.black,
    textAlign: "left",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 20,
        fontFamily: "Roboto",
      },
    }),
  },

  listingsText: {
    color: colors.medium,
    textAlign: "left",
    ...Platform.select({
      ios: {
        fontSize: 15,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 15,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default Contact;
