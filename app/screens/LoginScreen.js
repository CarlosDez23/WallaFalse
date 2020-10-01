import React from "react";
import { Image, StyleSheet, Alert } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

//Componentes
import Screen from "../components/Screen";
/*Como hemos hecho una carpeta con todos los componentes de
formularios y le hemos puesto un index en la carpeta en el que
exportamos estos componentes, podemos importar estos componentes
de esta forma poniendo como ruta la ruta de la carpeta que tiene
el index.js*/
import { AppFormField, SubmitButton, AppForm } from "../components/forms";

//Para instalar formik (para formularios) --> npm i formik@2.1.4
//Para instalar yup (validar formik) --> npm i yup

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => Alert.alert(values.toString())}
        validationSchema={validationSchema}
      >
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
        <SubmitButton title={"Login"} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  errorText: {
    color: "red",
  },
});

export default LoginScreen;
