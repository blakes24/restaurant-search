import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from "react-native";
import { elevation } from "../shared/styles";

export default function CategoryCard({
  title,
  image,
}: {
  title: string;
  image: ImageSourcePropType;
}) {
  return (
    <View style={[styles.container, styles.elevation]}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginVertical: 15,
    marginHorizontal: 15,
    backgroundColor: "white",
    width: 70,
    height: 100,
  },
  image: {
    width: 35,
    height: 35,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginBottom: 5,
    backgroundColor: "white",
    width: 50,
    height: 50,
  },
  elevation,
  title: {
    fontSize: 12,
    textTransform: "capitalize",
    fontWeight: "bold",
  },
});
