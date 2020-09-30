import React from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function RoundedColorIcon({ color, iconName }) {
  return (
    <View style={[styles.icon, { backgroundColor: colors[color] }]}>
      <MaterialCommunityIcons name={iconName} size={25} color={colors.white} />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RoundedColorIcon;
