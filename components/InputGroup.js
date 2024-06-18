import React, { useState, createRef } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

export default function InputGroup({ label }) {
  const inputRef = createRef();

  const [isFocused, setFocus] = useState(false);
  const [text, setText] = useState("");

  const toTop = {
    from: {
      top: 25,
    },
    to: {
      top: -18,
    },
  };

  const toBottom = {
    from: {
      top: -18,
    },
    to: {
      top: 25,
    },
  };

  return (
    <>
      <View style={styles.inputGroup}>
        <Animatable.Text
          animation={isFocused || text ? toTop : toBottom}
          duration={250}
          delay={0}
          style={
            isFocused || text
              ? [styles.label, { top: 0, opacity: 1 }]
              : styles.label
          }
          onPress={() => inputRef.current.focus()}
        >
          {label}
        </Animatable.Text>
        <TextInput
          style={styles.input}
          keyboardType="default"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChangeText={(newText) => setText(newText)}
          ref={inputRef}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputGroup: {
    position: "relative",
    backgroundColor: "rgba(24,21,21,0.4)",
    borderColor: "#242121",
    borderWidth: 1,
    height: 70,
    flex: 1,
    borderRadius: 15,
  },
  label: {
    color: "#fff",
    fontFamily: "Figtree-Semi",
    fontSize: 16,
    position: "absolute",
    left: 10,
    opacity: 0.4,
    pointerEvents: "none",
    paddingHorizontal: 10,
  },
  input: {
    height: 70,
    outlineStyle: "none",
    color: "#fff",
    fontSize: 16,
    marginHorizontal: 20,
    fontFamily: "Figtree-Regular",
  },
});
