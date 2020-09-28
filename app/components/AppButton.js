import React from "react";
import {
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import colors from "../config/colors";

//Los parámetros son los "atributos" de las etiquetas donde se renderiza
/*
Para el color de los botones. A los estilos le podemos pasar un array, en una
posición nos referiremos a un objeto de la stylesheet y en la otra posición podemos
meter otro objeto que va a sobreescribir las propiedades que nosotros digamos del objeto en 
la stylesheet. Para seleccionarlo, accedemos dinámicamente a nuestro objeto colors 
colors[loquetraecolor (variable)]
*/
function WallaButton({ title, onPress, color = "primary" }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors[color] }]}
        onPress={onPress}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: "100%",
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  button: {
    height: 50,
    borderRadius: 50,
    backgroundColor: colors.primary,
    justifyContent: "center",
  },
  text: {
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
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

export default WallaButton;
