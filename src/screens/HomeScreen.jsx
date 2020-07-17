import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

export const HomeScreen = ({ navigation }) => {
  const toComponents = () => {
    navigation.navigate("Components");
  };

  const toList = () => {
    navigation.navigate("List");
  };

  const toImage = () => {
    navigation.navigate("Image");
  };

  const toCounter = () => {
    navigation.navigate("Counter");
  };

    const toTextInput = () => {
      navigation.navigate("TextScreen");
    };

    const toBox = () => {
      navigation.navigate("BoxScreen");
    };
  return (
    <View>
      <Text style={styles.text}>React Native DEMO</Text>
      <Button title={"Components"} onPress={toComponents} />
      <Button title={"List"} onPress={toList} />
      <Button title={"Image"} onPress={toImage} />
      <Button title={"Counter"} onPress={toCounter} />
      <Button title={"Text Input"} onPress={toTextInput} />
      <Button title={"Box"} onPress={toBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center"
  }
});
