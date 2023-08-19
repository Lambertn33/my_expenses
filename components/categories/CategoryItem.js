import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../../constants/colors";
import Icon from "../UI/Icon";

const CategoryItem = ({ category }) => {
  return (
    <TouchableOpacity style={styles.column}>
      <Icon color={category.color} icon={category.icon} size={24} />
      <Text style={styles.label}>{category.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  column: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 1,
    paddingVertical: 10,
    backgroundColor: Colors.secondaryDark,
    
  },
  label: {
    color: Colors.primaryLight,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CategoryItem;
