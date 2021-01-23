import { StatusBar } from "react-native";
import React from "react";
import { StyleSheet, View } from "react-native";
import CarList from "./components/CarList";

export default function App() {
  return (
    <View style={styles.container}>
      <CarList />
      <StatusBar barStyle="light-content" backgroundColor="#000" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff00ff",
    alignItems: "center",
    justifyContent: "center",
  },
});
