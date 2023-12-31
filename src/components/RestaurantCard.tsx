import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { elevation } from "../shared/styles";
import { useNavigation } from "@react-navigation/native";

export default function RestaurantCard({
  title,
  imgUrl,
  rating,
  price,
  id,
}: {
  title: string;
  imgUrl: ImageSourcePropType;
  rating: number;
  price: string;
  id: string;
}) {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("Restaurant", { id });
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.container, styles.elevation]}>
        <Image source={{ uri: imgUrl }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.details}>
            <Text style={styles.rating}>{rating}</Text>
            <Text style={styles.price}>{price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 100,
    margin: 5,
    backgroundColor: "white",
    // height: 100,
  },
  image: {
    borderRadius: 50,
    width: 80,
    height: 80,
    margin: 10,
  },
  info: {
    flex: 1,
    padding: 15,
  },
  details: {
    flexDirection: "row",
  },
  rating: {
    marginRight: 20,
  },
  price: {
    color: "gold",
  },
  elevation,
  title: {
    fontSize: 18,
    textTransform: "capitalize",
    fontWeight: "bold",
    marginBottom: 5,
  },
});
