import React from "react";
import { Text, StyleSheet, View } from "react-native";

export const ComponentScreen = () => {
  const name = "Mattia";
  return (
    <View>
      <Text style={styles.text}>Hello World from text component</Text>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50
  }
});
