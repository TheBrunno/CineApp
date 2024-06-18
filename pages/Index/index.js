import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";

export default function Index() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={require("../../assets/logo.svg")} style={styles.logo} />
      </View>
      <View style={styles.content}>
        <View>
          <Text style={styles.h1}>A plataforma de filmes perfeita.</Text>
          <Text style={styles.text}>Algum texto convincente aqui.</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.signinButton}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
