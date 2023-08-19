import { View, StyleSheet } from "react-native";
import CategoryItem from "./CategoryItem";

const CategoriesList = ({ categories }) => {
  const pairs = [];
  for (let i = 0; i < categories.length; i += 2) {
    pairs.push(categories.slice(i, i + 2));
  }
  return (
    <View style={styles.container}>
      {pairs.map((pair, index) => (
        <View key={index} style={styles.row}>
          {pair.map((item) => {
            return <CategoryItem category={item} key={item.id}/>;
          })}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default CategoriesList;
