import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";

//Componentes
import Screen from "./Screen";
import PickerItem from "./PickerItem";
import WallaButton from "./AppButton";

//Iconos
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Nuestra paleta de colores
import colors from "../config/colors";
import ItemListRounded from "./ItemListRounded";
/*
Esto es lo que llamaría a este componente
const categories = [
  {
    label: "Furniture",
    value: "1",
  },
  {
    label: "Clothing",
    value: "2",
  },
  {
    label: "Cameras",
    value: "3",
  },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <Screen>
      <CustomPicker
        icon="apps"
        items={categories}
        placeholder="Category"
        selectedItem={category}
        onSelectItem={(newCategory) => setCategory(newCategory)}
      />
      <AppTextInput icon="email" placeholder="email" />
    </Screen>
  );
}
*/

function CustomPicker({
  icon,
  items,
  widthValue = "100%",
  placeholder,
  onSelectItem,
  selectedItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width: widthValue }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={25}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          <Text style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
          <MaterialCommunityIcons
            //Flecha hacia abajo
            name="chevron-down"
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen /*Para que el botón no se salga de la pantalla*/>
          <View>
            <FlatList
              data={items}
              keyExtractor={(item) => item.value.toString()}
              renderItem={({ item }) => (
                <ItemListRounded
                  color={item.color}
                  iconName={item.iconName}
                  label={item.label}
                  onPress={() => {
                    setModalVisible(false);
                    onSelectItem(item);
                  }}
                />
              )}
            />
          </View>
          <WallaButton
            title={"Close"}
            onPress={() => setModalVisible(false)}
            marginTop={20}
          />
        </Screen>
      </Modal>
    </>
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

  text: {
    flex: 1,
  },
});

export default CustomPicker;
