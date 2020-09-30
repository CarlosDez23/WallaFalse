import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import ProfileHeader from "../components/ProfileHeader";
import ListItemSeparator from "../components/ListItemSeparator";
import ProfileMenuOption from "../components/ProfileMenuOption";

import colors from "../config/colors";

const menuOptions = [
  {
    title: "My Listings",
    color: "primary",
    iconName: "format-list-bulleted",
  },
  {
    title: "My Messages",
    color: "secondary",
    iconName: "email",
  },
];

function MyAccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ProfileHeader
          image={require("../assets/mosh.jpg")}
          name={"Mosh Hamedani"}
          email={"programmingwithmosh@gmail.com"}
        />
      </View>
      <View
        style={styles.container}
        //Hay que meter las listas en container, si no ocupan todo el espacio
      >
        <FlatList
          data={menuOptions}
          keyExtractor={(option) => option.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ProfileMenuOption
              title={item.title}
              color={item.color}
              iconName={item.iconName}
            />
          )}
        />
      </View>
      <ProfileMenuOption
        style={styles.containerLogOut}
        title={"Log Out"}
        color={"yellow"}
        iconName={"logout"}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },

  containerLogOut: {
    marginTop: 15,
    position: "absolute",
    bottom: 65,
  },

  screen: {
    backgroundColor: colors.lightgray,
  },
});

export default MyAccountScreen;
