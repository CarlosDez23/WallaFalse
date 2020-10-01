import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import colors from "../config/colors";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.medium,
    /* Si utilizamos demasiado el análisis del sistema operativo
      en el que se ejecuta nuestra aplicación, nuestro código se 
      irá volviendo más difícil de mantener y será muy difícil evitar
      los duplicados, por ello existe un método para hacer distinción
      entre plataformas y encapsular todo .Este método retorno uno de 
      los dos objetos dependiendo de la plataforma*/

    /*
      Utilizamos el operador de propagación ... para meter las porpiedades del objeto
      en el objeto text que defina el estilo 
      */
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
});

//Si utilizamos export default no podemos utilizar llaves en la importación
export default AppText;
