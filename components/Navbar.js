import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "./UI/Icon";

const Navbar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon color="gray" size={32} icon="arrow-back" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon color="gray" size={32} icon="ellipsis-horizontal" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
});

export default Navbar;
