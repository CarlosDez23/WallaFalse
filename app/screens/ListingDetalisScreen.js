import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

import colors from "../config/colors";
import WallaCard from "../components/Card";
import ListItem from "../components/ListItem";

function ListingDetailsScreen() {
  return (
    <View style={styles.container}>
      <WallaCard
        title={"Red jacket for sale!"}
        subTitle={"$100"}
        image={require("../assets/jacket.jpg")}
      />
      <ListItem
        name={"Mosh Hamedani"}
        listings={"5 listings"}
        image={require("../assets/mosh.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default ListingDetailsScreen;
