import { View, Text, StyleSheet } from "react-native";
import Navbar from "./Navbar";
import Icon from "./UI/Icon";

const Header = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>My Expenses</Text>
          <Text style={styles.subtitle}>Summary (Private)</Text>
        </View>
        <View style={styles.dateContainer}>
          <View style={styles.dateIcon}>
            <Icon color="gray" size={20} icon="calendar" />
          </View>
          <View>
            <Text style={styles.dateTitle}>07 Feb, 2019</Text>
            <Text style={styles.dateSubtitle}>more than last month</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 23,
    backgroundColor: "white",
    elevation: 4,
    borderRadius: 8,
  },
  header: {
    gap: 16,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  dateTitle: {
    fontSize: 16,
    letterSpacing: 1,
    fontWeight: "500",
  },
  dateSubtitle: {},
  dateIcon: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
  },
  titleContainer: {
    gap: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
  },
  subtitle: {
    fontWeight: "400",
  },
});

export default Header;
