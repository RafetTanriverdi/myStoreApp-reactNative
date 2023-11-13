import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import { Formik } from "formik";

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Shooping</Text>
      <Formik initialValues={{ username: "", password: "" }}>
        {({ handleSubmit, handleChange, values }) => (
          <View>
            <Input
              placeholder="Username"
              value={values.username}
              onChange={handleChange("username")}
            />
            <Input
              placeholder="Password"
              value={values.password}
              onChange={handleChange("password")}
            />
            <Button text="Login" />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: "auto",
    backgroundColor: "#64b5f6",
  },
  logo: {
    color: "white",
    fontStyle: "italic",
    fontSize: 45,
    marginVertical: 15,
    textAlign: "center",
  },
});
export default LoginPage;
