import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import CategoryContainer from "./src/components/CategoryContainer";
import { useState } from "react";

export default function App() {
  const [term, setTerm] = useState("Burger");
  return (
    <View style={styles.container}>
      <Header />
      <Search setTerm={setTerm} />
      <CategoryContainer setTerm={setTerm} term={term} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
