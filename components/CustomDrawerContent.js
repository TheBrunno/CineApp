import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";

const CustomDrawerContent = (props) => {
  console.log(props.state.routes);
  const renderDrawerItem = ({ item }) => (
    <TouchableOpacity key={item.key} style={styles.item}>
      <Text style={styles.itemName}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View contentContainerStyle={styles.container}>
      {props.state.routes.map(renderDrawerItem)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: "center",
    flex: 1,
  },
  item: {
    backgroundColor: "#000",
    padding: 10,
    marginVertical: 5,
  },
  itemName: {
    fontSize: 16,
    color: "white",
  },
});

export default CustomDrawerContent;
