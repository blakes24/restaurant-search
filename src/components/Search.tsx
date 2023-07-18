import { TextInput, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { elevation } from "../shared/styles";

export default function Search() {
  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name="search" size={25} />
      <TextInput style={styles.input} placeholder="Restaurants, food" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 100,
    marginTop: 5,
    marginHorizontal: 25,
    backgroundColor: "white",
    padding: 10,
  },
  elevation,
  input: {
    fontSize: 18,
    marginLeft: 10,
  },
});
