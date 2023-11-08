import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import AnimatedLottieView from "lottie-react-native";

const LoadingComponent = () => {
  const animation = useRef(null);
  return (
    <View style={styles.container} >
      <AnimatedLottieView
        autoPlay
        style={{
          width: 400,
          height: 400,
        }}
        ref={animation}
        source={require("../../Assets/loadingAnimation.json")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default LoadingComponent;
