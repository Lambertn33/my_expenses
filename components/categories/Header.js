import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";
import { categoriesMode } from "../../constants/categoriesMode";
import HeaderIcon from "./HeaderIcon";

const CategoriesHeader = ({ onSwitchModeHandler, mode }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerTitle}>Categories</Text>
        <Text style={styles.headerSubtitle}>4 total</Text>
      </View>
      <View style={styles.iconsContainer}>
        <HeaderIcon
          onPress={onSwitchModeHandler}
          icon="stats-chart"
          size={22}
          color={Colors.primaryLight}
          isActive={mode === categoriesMode.CHART}
        />
        <HeaderIcon
          onPress={onSwitchModeHandler}
          icon="list-outline"
          size={22}
          color={Colors.primaryLight}
          isActive={mode === categoriesMode.LIST}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    color: Colors.primaryLight,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "600",
  },
  headerSubtitle: {
    color: Colors.primaryLight,
    fontWeight: "500",
  },

  iconsContainer: {
    flexDirection: "row",
    gap: 16,
  },
});

export default CategoriesHeader;
