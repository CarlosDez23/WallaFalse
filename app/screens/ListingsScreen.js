import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
//Componentes
import Screen from "../components/Screen";
import WallaCard from "../components/Card";
//Paleta de colores
import colors from "../config/colors";

const dataList = [
  {
    id: 1,
    title: "Red jacket for sale",
    subTitle: "$100",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    subTitle: "$1000",
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <FlatList
          data={dataList}
          //El keyExtractor tiene que ser siempre una String
          keyExtractor={(product) => product.id.toString()}
          renderItem={({ item }) => (
            <WallaCard
              title={item.title}
              subTitle={item.subTitle}
              image={item.image}
            />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.lightgray,
  },
  container: {
    marginVertical: 10,
    padding: 15,
  },
});

export default ListingsScreen;
