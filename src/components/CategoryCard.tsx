import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { elevation } from "../shared/styles";

export default function CategoryCard({
  title,
  image,
  index,
  active,
  handlePress,
}: {
  title: string;
  image: ImageSourcePropType;
  index: number;
  active: boolean;
  handlePress: () => void;
}) {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          styles.container,
          styles.elevation,
          index === 0 ? { marginLeft: 25 } : { marginLeft: 15 },
          active
            ? { backgroundColor: "rgb(241,186,87)" }
            : { backgroundColor: "white" },
        ]}
      >
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
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
