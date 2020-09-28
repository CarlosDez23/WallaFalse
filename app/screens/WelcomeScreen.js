import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
} from "react-native";

import colors from "../config/colors";
import WallaButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.logo}
        ></Image>
        <Text style={styles.text}>Vende lo que no necesites</Text>
      </View>
      <WallaButton title="login" onPress={() => Alert.alert("Login")} />
      <WallaButton
        title="registro"
        onPress={() => Alert.alert("Registro")}
        color="secondary"
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    //Tenemos que volver a añadirlo porque cuando se hace un contenedor, se resetea a flex-start
    alignItems: "center",
  },
  text: {
    marginTop: 20,
    color: colors.black,
    textTransform: "capitalize",
    fontWeight: "bold",
    textAlign: "justify",
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

export default WelcomeScreen;
