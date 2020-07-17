import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.child_one}>Child #1</Text>
        <Text style={styles.child_two}>Child #2</Text>
        <Text style={styles.child_three}>Child #3</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    height:200,
    borderWidth: 10,
    borderColor: "white",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  child_one: {
    borderWidth: 10,
    borderColor: "red",
    flex: 1,
  },
  child_two: {
    borderWidth: 10,
    borderColor: "red",
    flex: 1,
    marginHorizontal: 10,
    alignSelf:"flex-end"
  },
  child_three: {
    borderWidth: 10,
    borderColor: "red",
    flex: 1,
  },
});
