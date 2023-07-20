import { Text, View, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.lightHeader}>Grab your</Text>
      <Text style={styles.boldHeader}>delicious meal!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginHorizontal: 25,
  },
  lightHeader: {
    fontSize: 30,
  },
  boldHeader: {
    fontSize: 35,
    fontWeight: "bold",
  },
});
