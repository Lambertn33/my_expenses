import { StatusBar } from "expo-status-bar";
import Navbar from "./components/Navbar";
import { View, StyleSheet, Platform } from "react-native";

export default function App() {
  return (
    <View style={styles.screen}>
      <StatusBar />
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: Platform.OS === "android" ? 40 : 0,
    paddingHorizontal: 16,
  },
});
