
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import LottieView from "lottie-react-native";

export default function Loading() {
  return (
    <View>
      <LottieView
        source={require("./../../assets/ambloading.json")}
        style={styles.animation}
        autoPlay
      />
    </View>
  );
}
const styles = StyleSheet.create({
  animation: {
    width: 700,
    height: 700,
    alignItems:'center',
    justifyContent:'center'
  },
});