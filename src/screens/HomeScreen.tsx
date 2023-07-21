import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Header from "../components/Header";
import Search from "../components/Search";
import CategoryContainer from "../components/CategoryContainer";
import Restaurants from "../components/Restaurants";

export default function HomeScreen({ navigation }) {
  const [term, setTerm] = useState("Burger");

  return (
    <View style={styles.container}>
      <Header />
      <Search setTerm={setTerm} />
      <CategoryContainer setTerm={setTerm} term={term} />
      <Restaurants term={term} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(253,253,253)",
  },
});
