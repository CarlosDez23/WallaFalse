import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

import colors from "../config/colors";
import WallaCard from "../components/Card";

function TestScreen(props) {
  return (
    <View>
      <View style={styles.container}>
        <WallaCard
          title={"Red jacket for sale!"}
          subTitle={"$100"}
          image={require("../assets/jacket.jpg")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.softgray,
    paddingTop: 100,
    padding: 20,
  },
});

export default TestScreen;
