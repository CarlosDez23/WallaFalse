import React from "react";
import { View, StyleSheet } from "react-native";

import * as Yup from "yup";

//Componentes
import Screen from "../components/Screen";
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
  AppFormPicker as Picker,
} from "../components/forms";

//Paleta de colores
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
  price: Yup.number().required().label("Price"),
  category: Yup.string().required().nullable().label("Category"),
  description: Yup.string().required().label("Description"),
});

const categories = [
  {
    label: "Furniture",
    value: "1",
    color: "primary",
    iconName: "floor-lamp",
  },
  {
    label: "Cars",
    value: "2",
    color: "orange",
    iconName: "car",
  },
  {
    label: "Cameras",
    value: "3",
    color: "yellow",
    iconName: "camera",
  },
  {
    label: "Games",
    value: "4",
    color: "green",
    iconName: "cards",
  },
  {
    label: "Clothing",
    value: "5",
    color: "aquamarine",
    iconName: "shoe-heel",
  },
  {
    label: "Sports",
    value: "6",
    color: "blue",
    iconName: "basketball",
  },
  {
    label: "Movies & Music",
    value: "7",
    color: "darkblue",
    iconName: "headphones",
  },
  {
    label: "Books",
    value: "8",
    color: "purple",
    iconName: "book-open-variant",
  },
  {
    label: "Other",
    value: "9",
    color: "bluegray",
    iconName: "ruler-square-compass",
  },
];
function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          name="title"
          placeholder="Title"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <FormField
          name="price"
          widthValue="45%"
          placeholder="Price"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="decimal-pad"
        />
        <Picker
          items={categories}
          widthValue="60%"
          placeholder="Category"
          name="category"
          onSelectItem={(item) => setCategory(item)}
        />
        <FormField
          name="description"
          multiline
          numberOfLines={3}
          placeholder="Description"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <View style={styles.buttonContainer}>
          <SubmitButton title={"Post"} />
        </View>
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default ListingEditScreen;
