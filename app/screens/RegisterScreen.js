import React from "react";
import { View, StyleSheet } from "react-native";
//Formik y yup para el formulario
import { Formik } from "formik";
import * as Yup from "yup";

//Componentes
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

//Esquema de validación del formulario
const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});
function RegisterScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="name"
          icon="account"
          placeholder="Name"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <AppFormField
          name="email"
          icon="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />
        <AppFormField
          name="password"
          icon="lock"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <SubmitButton title={"Register"} />
        </View>
      </AppForm>
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

export default RegisterScreen;
