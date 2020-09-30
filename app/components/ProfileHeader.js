import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../config/colors";

function ProfileHeader({ image, name, email }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.white,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
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

  email: {
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

export default ProfileHeader;
