import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "../UI/Icon";
import { Colors } from "../../constants/colors";

const HeaderIcon = ({ color, size, icon, isActive, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isActive}
      style={[styles.icon, isActive && styles.activeIcon]}
    >
      <Icon color={color} size={size} icon={icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    borderRadius: 50,
    padding: 10,
  },
  activeIcon: {
    backgroundColor: Colors.primaryOrange,
  },
});

export default HeaderIcon;
