import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";

const Button = ({ text,onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    padding: 10,
    width: Dimensions.get("window").width / 4,
    backgroundColor: "#e0e0e0",
    fontWeight: "bold",
  },
});
export default Button;
