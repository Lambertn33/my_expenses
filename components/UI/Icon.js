import { Ionicons } from "@expo/vector-icons";

const Icon = ({ size, icon, color }) => {
  return <Ionicons size={size} name={icon} color={color} />;
};

export default Icon;
