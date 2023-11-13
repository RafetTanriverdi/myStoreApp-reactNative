import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import { Formik } from "formik";

const LoginPage = ({ navigation }) => {
  const [error, setError] = useState('')
  const handleLogin = (item) => {
    if (item.password === "Rafet.test1!" && item.username === "Rafet") {
      navigation.navigate("Products");
    } 
    else{
      setError('username or password is incorrect')
      
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Shooping</Text>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={handleLogin}
      >
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
            <Text style={styles.error}>{error}</Text>
            <Button text="Login" onPress={handleSubmit} />
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
  error:{
    color:'red',
    textAlign:'center',
    marginBottom:10
  }
});
export default LoginPage;
