import React from "react";
import { View, StyleSheet, Text } from "react-native";

import colors from "../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import RoundedColorIcon from "./RoundedColorIcon";

function ProfileMenuOption({ title, color, iconName }) {
  return (
    <View style={styles.container}>
      <RoundedColorIcon color={color} iconName={iconName} />
      <Text style={styles.name}>{title}</Text>
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

  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  name: {
    marginLeft: 10,
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
});

export default ProfileMenuOption;
