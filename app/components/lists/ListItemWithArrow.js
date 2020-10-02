import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  Alert,
} from "react-native";

//Paleta de colores
import colors from "../../config/colors";

//Iconos
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItemWithArrow({ image, title, subTitle, onPress, showChevrons }) {
  return (
    <TouchableHighlight underlayColor={colors.lightgray} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={styles.containerText}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
        {showChevrons && (
          <MaterialCommunityIcons
            name="chevron-right"
            size={20}
            color={colors.medium}
          />
        )}
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  containerText: {
    marginVertical: 10,
    flex: 1,
  },

  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 20,
  },
  title: {
    color: colors.black,
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

  subTitle: {
    color: colors.medium,
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

export default ListItemWithArrow;
