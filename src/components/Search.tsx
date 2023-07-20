import { TextInput, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { elevation } from "../shared/styles";
import { useState } from "react";

export default function Search({ setTerm }) {
  const [input, setInput] = useState("");

  const handleEndEditing = () => {
    if (!input) return;
    setTerm(input);
  };

  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name="search" size={25} />
      <TextInput
        style={styles.input}
        placeholder="Restaurants, food"
        onChangeText={(text) => setInput(text)}
        onEndEditing={handleEndEditing}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 100,
    marginVertical: 5,
    marginHorizontal: 25,
    backgroundColor: "white",
    padding: 10,
  },
  elevation,
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: "100%",
  },
});
