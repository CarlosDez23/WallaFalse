import React, { useState } from "react";
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
          placeholder="Price"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="decimal-pad"
        />
        <Picker
          items={categories}
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
