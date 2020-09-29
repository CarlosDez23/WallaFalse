import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  Alert,
} from "react-native";

import colors from "../config/colors";

//Componentes
import Swipeable from "react-native-gesture-handler/Swipeable";

/* Para los swipes importar expo install react-native-gesture-handler */
/*Como queremos que este sea un componente reutilizable, le pasamos los métodos
que se van a ejecutar, no los implementamos aquí*/
function ListItem({ name, listings, image, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.lightgray} onPress={onPress}>
        <View style={styles.contactContainer}>
          <Image source={image} style={styles.image}></Image>
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.listingsText}>{listings}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  contactContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },

  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },

  textContainer: {
    padding: 5,
  },
  nameText: {
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

  listingsText: {
    color: colors.medium,
    textAlign: "left",
    ...Platform.select({
      ios: {
        fontSize: 15,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 15,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default ListItem;
