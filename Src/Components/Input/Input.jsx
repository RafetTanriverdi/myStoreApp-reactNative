import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TextInput } from "react-native";

const Input = ({ placeholder, onChange,value }) => {
  return (
    <View style={styles.contianer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contianer: {
    padding: 5,
    margin: 10,
    backgroundColor: "#e0e0e0e0",
  },
});
export default Input;
