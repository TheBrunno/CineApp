import React from "react";
import { Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export default function Splash() {
  const navigation = useNavigation();

  function loading() {
    setTimeout(() => {
      navigation.navigate("Index");
    }, 2000);
  }
  loading();

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.svg")} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 192,
    height: 209,
  },
});
