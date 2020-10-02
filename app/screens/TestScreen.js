import React from "react";
import { StyleSheet, Alert } from "react-native";

//Componentes
import Screen from "../components/Screen";
import { ListItemWithArrow as Item } from "../components/lists";
//Paleta de colores
import colors from "../config/colors";

function TestScreen(props) {
  return (
    <Screen style={styles.container}>
      <Item
        image={require("../assets/mosh.jpg")}
        title={"Title 1"}
        subTitle={"Subtitle 1"}
        onPress={() => Alert.alert("Elemento tocado")}
        showChevrons
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.softgray,
  },
});

export default TestScreen;
