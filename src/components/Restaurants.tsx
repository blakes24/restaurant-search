import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import useRestaurants from "../hooks/useRestaurants";
import { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

export default function Restaurants({ term }: { term: string }) {
  const [{ data, loading, error }, searchRestaurants] = useRestaurants();
  useEffect(() => {
    searchRestaurants(term);
  }, [term]);

  if (loading) return <ActivityIndicator size="large" />;

  if (error)
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{error}</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Restaurants</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <RestaurantCard
            imgUrl={item.image_url}
            title={item.name}
            price={item.price}
            rating={item.rating}
            id={item.id}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
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
});
