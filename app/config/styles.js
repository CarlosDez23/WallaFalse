import { Platform } from "react-native";

import colors from "./colors";

//Un estilo para nuestros textos que sea común a la aplicación
export default {
  text: {
    //El color del texto que se introduce
    color: colors.darkgray,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
