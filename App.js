import React, { useState } from "react";
import { Alert } from "react-native";

//Pantallas
import ListingEditScreen from "./app/screens/ListingEditScreen";

import ItemListRounded from "./app/components/ItemListRounded";
import colors from "./app/config/colors";
import Screen from "./app/components/Screen";

export default function App() {
  return <ListingEditScreen />;
}

/*
<Screen>
      <ItemListRounded
        color={"orange"}
        iconName={"car"}
        label={"Cars"}
        onPress={() => Alert.alert("Elemento tocado")}
      />
    </Screen>
*/
