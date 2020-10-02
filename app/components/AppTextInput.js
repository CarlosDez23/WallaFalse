import React from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
/*Importamos nuestros estilos personalizados, lo utilizamos
en el textinput style={defaultStyles.text}, llamamos al objeto 
text del objeto estilos que importamos por defecto */
import defaultStyles from "../config/styles";

/*Con el operador de propagación le mandamos las demás
propiedades que podamos querer utilizar del objeto en cuestión,
en este caso es el componente TextInput de react, otherProps 
es un objeto. De esta forma cuando nosotros le pasamos el 
placeholder, lo aplica al textipnut que hay en nuestro componente
personalizado*/
/*Renderizamos solo si el icono esta definido (metemos un componente entre llaves
y le ponemos la el nombre de la variable y un &&, considerando que si icon
no viene vacío entonces se renderiza el icono si no no aparecerá nada*/
function AppTextInput({ icon, widthValue = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width: widthValue }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={defaultStyles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightgray,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },

  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
