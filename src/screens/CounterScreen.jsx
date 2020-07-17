import React, { useState, useReducer } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const reducer = (state, action) => {
  //action === { type: increase||decrease amount: 1||2||3}
  switch (action.type) {
    case "increase":
      return { ...state, counter: state.counter + action.payload };
    case "decrease":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

export const CounterScreen = () => {
  //const [counter, setCounter] = useState(0);

  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  const increaseCounter = () => {
    dispatch({ type: "increase", payload: 2 });
  };

  const decreaseCounter = () => {
    dispatch({ type: "decrease", payload: 2 });
  };

  return (
    <View>
      <Text style={styles.text}>Current Count: {counter}</Text>
      <Button
        color="#F44336"
        title={"Increase Counter"}
        onPress={increaseCounter}
      />
      <Button
        color="#F44336"
        title={"Decrease Counter"}
        onPress={decreaseCounter}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
  },
});
