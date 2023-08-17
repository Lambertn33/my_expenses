import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Platform } from "react-native";
import Header from "./components/Header";
import { Colors } from "./constants/colors";

export default function App() {
  return (
    <ScrollView style={styles.screen}>
      <StatusBar/>
      <Header />
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
