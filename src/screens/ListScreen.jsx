import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

 export const ListScreen = () => {
  const food = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      name: "Burger",
      price: 5
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      name: "Pasta",
      price: 3
    },
    {
      id: "586534a0f-3da1-471f-bd96-145571e29d72",
      name: "Pizza",
      price: 6
    },
    {
      id: "58394a0f-3da1-471f-bd96-145571e29d72",
      name: "Sushi",
      price: 8
    },
    {
      id: "55694a0f-3da1-471f-bd96-145571e29d72",
      name: "Tea",
      price: 5
    },
    {
      id: "98694a0f-3da1-471f-bd96-145571e29d72",
      name: "Coke",
      price: 2
    },
    {
      id: "68694a0f-3da1-471f-bd96-145571e29d72",
      name: "Dope",
      price: 99
    },
  ];

  const renderItem = ({ item }) => (
    <Text style={styles.textStyle}>
      {item.name} <Text style={styles.baseText}>${item.price}</Text>
    </Text>
  );

  return (
    <View>
      <Text>List Of Food:</Text>
      <FlatList
        renderItem={renderItem}
        data={food}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
  baseText: {
    fontWeight: "bold",
  }
});
