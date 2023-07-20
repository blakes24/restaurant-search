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

export default function CategoryContainer({
  term,
  setTerm,
}: {
  term: string;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item, index }) => (
          <CategoryCard
            title={item.title}
            image={item.img}
            index={index}
            active={item.title === term}
            handlePress={() => setTerm(item.title)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
});
