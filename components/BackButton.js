import React from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function BackButton({ horizontal, vertical }) {
  const navigation = useNavigation();

  return (
    <Pressable
      style={{
        width: "fit-content",
        marginHorizontal: horizontal,
        marginVertical: vertical,
      }}
      onPress={() => navigation.goBack()}
    >
      <AntDesign name="close" size={35} color="#fff" />
    </Pressable>
  );
}
