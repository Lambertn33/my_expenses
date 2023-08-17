import { useState } from "react";
import { View, StyleSheet } from "react-native";

import CategoriesHeader from "../components/categories/Header";
import CategoriesChart from "../components/categories/Chart";
import CategoriesList from "../components/categories/List";

import { Colors } from "../constants/colors";
import { categoriesMode } from "../constants/categoriesMode";

const Categories = () => {
  const [mode, setMode] = useState(categoriesMode.CHART);

  const switchModeHandler = () =>
    setMode(
      mode === categoriesMode.CHART ? categoriesMode.LIST : categoriesMode.CHART
    );

  const renderCategories = () => {
    return mode === categoriesMode.CHART ? (
      <CategoriesChart />
    ) : (
      <CategoriesList />
    );
  };

  return (
    <View style={styles.container}>
      <CategoriesHeader onSwitchModeHandler={switchModeHandler} mode={mode} />
      <View style={styles.categories}>{renderCategories()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mediumDark,
    padding: 24,
  },
  categories: {
    marginVertical: 8,
  },
});

export default Categories;
