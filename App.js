import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Platform } from "react-native";
import Header from "./components/Header";
import { Colors } from "./constants/colors";
import Categories from "./screens/Categories";

export default function App() {
  return (
    <ScrollView style={styles.screen}>
      <StatusBar />
      <Header />
      <Categories />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primaryDark,
    paddingVertical: Platform.OS === "android" ? 40 : 0,
    paddingHorizontal: 16,
  },
});
