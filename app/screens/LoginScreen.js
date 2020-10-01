import React from "react";
import { Image, StyleSheet, Alert } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

//Componentes
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

//Para instalar formic (para formularios) --> npm i formik@2.1.4
//Para instalar yup (validar formik) --> npm i yup

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => Alert.alert(values.toString())}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              icon="email"
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={handleChange("email")}
            />
            <AppText style={styles.errorText}>{errors.email}</AppText>
            <AppTextInput
              icon="lock"
              placeholder="Password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              onChangeText={handleChange("password")}
            />
            <AppText style={styles.errorText}>{errors.password}</AppText>
            <AppButton
              style={styles.button}
              title="Login"
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
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
  button: {
    marginTop: 40,
  },
  errorText: {
    color: "red",
  },
});

export default LoginScreen;
