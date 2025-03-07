import { TouchableOpacity, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface TopFloatingButtonsProps {
  onClose: () => void;
  onSignOut: () => void;
}

export function TopFloatingButtons({
  onClose,
  onSignOut,
}: TopFloatingButtonsProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClose}>
        <MaterialCommunityIcons name="close" size={24} color="#E0E0E0" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onSignOut}>
        <MaterialCommunityIcons name="logout" size={24} color="#FFC600" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 14,
    left: 24,
    right: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
