import { Dimensions, StyleSheet } from "react-native";

const deviceRise = Dimensions.get("window");
export default StyleSheet.create({
  container: { flex: 1 },
  body_conatiner: { flex: 1, padding: 10 },
  image: {
    backgroundColor: "white",
    width: deviceRise.width,
    minHeight: deviceRise.height / 2,
    justifyContent: "center",
    resizeMode: "contain",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  desc: {
    fontStyle: "italic",
    marginVertical: 5,
  },
  price: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "right",
  },
});
