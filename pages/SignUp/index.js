import React from "react";
import { Text, View } from "react-native";
import creditCardType from "credit-card-type";

import InputGroup from "../../components/InputGroup";
import SubmitButton, { RedirectMessage } from "../../components/SubmitButton";
import BackButton from "../../components/BackButton";

import styles from "./style";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.h1}>Vamos fazer o seu cadastro</Text>
      <View style={{ gap: 20 }}>
        <Text style={styles.text}>
          Primeiro, iremos precisar de alguns dados.
        </Text>

        <View style={{ gap: 20 }}>
          <View style={{ flexDirection: "row", gap: 20 }}>
            <InputGroup label="Nome" />
            <InputGroup label="Sobrenome" />
          </View>
          <InputGroup label="CPF" />
        </View>
      </View>

      <View style={{ gap: 20 }}>
        <Text style={styles.text}>
          Agora, criaremos a sua{" "}
          <span style={{ fontWeight: "700" }}>conta.</span>
        </Text>

        <InputGroup label="E-mail" />
        <InputGroup label="Senha" />
      </View>

      <View style={{ gap: 20 }}>
        <Text style={styles.text}>
          E por fim, configure o método de pagamento.
        </Text>

        <InputGroup label="Número do Cartão" />

        <View style={{ flexDirection: "row", gap: 20 }}>
          <InputGroup label="CVV" />
          <InputGroup label="Vencimento" />
        </View>
      </View>
      <View>
        <SubmitButton label="Cadastrar" redirect="SignIn" />
        <RedirectMessage text="Já possui uma conta?" redirect="SignIn" />
      </View>
    </View>
  );
}
