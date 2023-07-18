import { View, StyleSheet, FlatList } from "react-native";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "Burger",
    img: require("../assets/images/burger.png"),
  },
  {
    title: "Pizza",
    img: require("../assets/images/pizza.png"),
  },
  {
    title: "Dessert",
    img: require("../assets/images/dessert.png"),
  },
  {
    title: "Drinks",
    img: require("../assets/images/drinks.png"),
  },
  {
    title: "Steak",
    img: require("../assets/images/steak.png"),
  },
  {
    title: "Pasta",
    img: require("../assets/images/pasta.png"),
  },
];

export default function CategoryContainer() {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item, index }) => (
          <CategoryCard title={item.title} image={item.img} index={index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.title}
      />
      {/* {categories.map(({ title, img }) => (
        <CategoryCard key={title} title={title} image={img} />
      ))} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});
