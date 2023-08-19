import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import CategoriesHeader from "../components/categories/Header";
import CategoriesChart from "../components/categories/Chart";
import CategoriesList from "../components/categories/List";

import { Colors } from "../constants/colors";
import { categoriesMode } from "../constants/categoriesMode";

const Categories = () => {
  const [mode, setMode] = useState(categoriesMode.CHART);
  const { categoriesData } = useSelector((state) => state.categories);
  const switchModeHandler = () =>
    setMode(
      mode === categoriesMode.CHART ? categoriesMode.LIST : categoriesMode.CHART
    );

  const renderCategories = () => {
    return mode === categoriesMode.CHART ? (
      <CategoriesChart />
    ) : (
      <CategoriesList categories={categoriesData} />
    );
  };

  return (
    <View style={styles.container}>
      <CategoriesHeader
        onSwitchModeHandler={switchModeHandler}
        mode={mode}
        categoriesCount={categoriesData.length}
      />
      <View style={styles.categories}>{renderCategories()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    backgroundColor: Colors.mediumDark,
    padding: 24,
  },
  categories: {
    marginVertical: 8,
  },
});

export default Categories;
