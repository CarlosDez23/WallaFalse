import React from "react";
import { StyleSheet, View, Platform, StatusBar, Image } from "react-native";

//Separamos importaciones propias del proyecto de las del framework
import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.redButton}></View>
        <View style={styles.greenButton}></View>
      </View>
      <Image
        source={require("../assets/chair.jpg")}
        style={styles.image}
        resizeMode="contain"
      ></Image>
    </View>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    //Para que ocupe toda la pantalla
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "30%",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    padding: 10,
  },
  redButton: {
    width: 70,
    height: 70,
    backgroundColor: colors.primary,
  },
  greenButton: {
    width: 70,
    height: 70,
    backgroundColor: colors.secondary,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
