import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

//Nos dice muchas propiedades del dispositivo
import Constants from "expo-constants";

/* En este componente tenemos metido todo lo necesario para que nuestras 
distintas pantallas no queden por encima de la barra de estado de android
o que pille la banda negra superior en el caso de iPhone */

function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    /*Con constants no tenemos que importar ni Platform ni StatusBar
    el código es más simple*/
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
