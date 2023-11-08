import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    borderColor: "#bdbdbd",
    backgroundColor: "#e0e0e0",
    borderWidth: 1,
    margin: 10,
    flexDirection: "row",
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: "contain",
    backgroundColor: "white",
  },
  body_container: {
    padding: 5,
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 13,
  },
  price: { textAlign: "right", fontSize: 13, fontStyle: "italic" },
});
 