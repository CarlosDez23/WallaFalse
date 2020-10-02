import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";

//Componentes
import RoundedColorIcon from "./RoundedColorIcon";

//Iconos
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Nuestra paleta de colores
import colors from "../config/colors";

function ItemListRounded({ color, iconName, label, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <RoundedColorIcon color={color} iconName={iconName} />
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    color: colors.medium,
    ...Platform.select({
      ios: {
        fontFamily: "Avenir",
      },
      android: {
        fontFamily: "Roboto",
      },
    }),
  },
});

export default ItemListRounded;
