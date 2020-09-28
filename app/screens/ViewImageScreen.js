import React from "react";
import { StyleSheet, View, Platform, StatusBar, Image } from "react-native";

//Separamos importaciones propias del proyecto de las del framework
import colors from "../config/colors";

//Iconos
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <MaterialCommunityIcons
          style={styles.iconClose}
          name="close"
          size={35}
          color={colors.white}
        />
        <MaterialCommunityIcons
          style={styles.iconDelete}
          name="trash-can-outline"
          size={35}
          color={colors.white}
        />
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
  iconClose: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  iconDelete: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
