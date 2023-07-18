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
  index,
}: {
  title: string;
  image: ImageSourcePropType;
  index: number;
}) {
  return (
    <View
      style={[
        styles.container,
        styles.elevation,
        index === 0 ? { marginLeft: 25 } : { marginLeft: 15 },
      ]}
    >
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
