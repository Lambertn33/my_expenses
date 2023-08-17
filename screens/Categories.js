import { useState } from "react";
import { View, StyleSheet } from "react-native";

import CategoriesHeader from "../components/categories/Header";
import { Colors } from "../constants/colors";
import { categoriesMode } from "../constants/categoriesMode";

const Categories = () => {
  const [mode, setMode] = useState(categoriesMode.CHART);

  const switchModeHandler = () =>
    setMode(
      mode === categoriesMode.CHART ? categoriesMode.LIST : categoriesMode.CHART
    );

  return (
    <View style={styles.container}>
      <CategoriesHeader onSwitchModeHandler={switchModeHandler} mode={mode} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mediumDark,
    padding: 24,
  },
});

export default Categories;
