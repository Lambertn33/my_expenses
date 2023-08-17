import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Platform } from "react-native";
import Header from "./components/Header";

export default function App() {
  return (
    <ScrollView style={styles.screen}>
      <StatusBar />
      <Header />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#e6e6e6",
    paddingVertical: Platform.OS === "android" ? 40 : 0,
    paddingHorizontal: 16,
  },
});
