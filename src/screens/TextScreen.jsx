import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export const TextScreen = () => {
  const [input, setInput] = useState();

  const onInputChange = (newValue) => {
    setInput(newValue);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="sentences"
        autoCorrect={false}
        value={input}
        onChangeText={onInputChange}
      />
      <Text style={styles.text}>You are typing: {input}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 100,
    borderWidth: 2,
  },
  text:{
      fontSize: 15,
      textAlign: "center"
  }
});
