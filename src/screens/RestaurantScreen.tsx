import { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";
import useRestaurantInfo from "../hooks/useRestaurantInfo";

export default function RestaurantScreen({ route }) {
  const { id } = route.params;
  const [{ data, loading, error }, getRestaurant] = useRestaurantInfo();
  useEffect(() => {
    getRestaurant(id);
  }, [id]);
  if (loading) return <ActivityIndicator size="large" />;

  if (error)
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{error}</Text>
      </View>
    );

  return (
    data && (
      <View style={styles.container}>
        <Text style={styles.header}>{data.name}</Text>
        <FlatList
          data={data.photos}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.image} />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  header: {
    paddingBottom: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  image: {
    marginVertical: 10,
    flex: 1,
    resizeMode: "cover",
    height: 300,
  },
});
