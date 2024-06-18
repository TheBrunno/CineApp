import React from "react";
import { Text, View, ImageBackground, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InputGroup from "../../components/InputGroup";
import SubmitButton, { RedirectMessage } from "../../components/SubmitButton";

import styles from "./style";
import BackButton from "../../components/BackButton";

export default function SignIn() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../../assets/moviesBanner.png")}
      style={styles.background}
    >
      <BackButton horizontal={40} vertical={60} />
      <View style={styles.container}>
        <View>
          <Text style={styles.h1}>Bem-vindo de volta!</Text>
          <Text style={[styles.text, { marginTop: 10 }]}>
            Sentimos sua falta! Faça login para continuar
          </Text>
        </View>
        <View style={{ gap: 20 }}>
          <InputGroup label="E-mail" />
          <InputGroup label="Senha" />
        </View>
        <View>
          <SubmitButton label="Entrar" redirect="Home" />
          <RedirectMessage text="Não possui uma conta?" redirect="SignUp" />
        </View>
      </View>
    </ImageBackground>
  );
}
