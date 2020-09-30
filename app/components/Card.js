import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

import colors from "../config/colors";

function WallaCard({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image}></Image>
      <View style={styles.containerText}>
        <Text style={styles.textTitleStyle}>{title}</Text>
        <Text style={styles.textSubtitleStyle}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    marginBottom: 20,
    borderRadius: 10,
    //Para que no haya overflow
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 150,
  },

  containerText: {
    padding: 20,
  },
  textTitleStyle: {
    color: colors.black,
    fontWeight: "bold",
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
  textSubtitleStyle: {
    color: colors.cyan,
    fontWeight: "bold",
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

export default WallaCard;
