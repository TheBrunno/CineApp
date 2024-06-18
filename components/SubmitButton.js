import React from "react";

import { Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SubmitButton({ label, redirect }) {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate(redirect)}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

export function RedirectMessage({ text, cta = "Clique aqui", redirect }) {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate(redirect)}>
      <Text
        style={{
          fontSize: 14,
          fontFamily: "Figtree-Regular",
          color: "#808080",
          marginTop: 20,
          textAlign: "center",
        }}
      >
        {text}
        <span style={{ fontWeight: "600", color: "#fff", letterSpacing: 1 }}>
          {" "}
          {cta}
        </span>
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#E50914",
    height: 70,
    borderRadius: 15,
    justifyContent: "center",
    alignItens: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
    fontFamily: "Figtree-Semi",
  },
});
