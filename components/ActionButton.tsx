import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ActionButtonProps {
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  text: string;
  onPress: () => void;
}

export function ActionButton({ icon, text, onPress }: ActionButtonProps) {
  return (
    <TouchableOpacity style={styles.actionButton} onPress={onPress}>
      <View style={styles.actionButtonIconArea}>
        <MaterialCommunityIcons name={icon} size={20} color="#FFC600" />
      </View>
      <Text style={styles.actionButtonText}>{text}</Text>
      <MaterialCommunityIcons name="chevron-right" size={20} color="#A5A5A5" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  actionButtonIconArea: {
    width: 36,
    height: 36,
    backgroundColor: "#FFC60026",
    borderRadius: 999999,
    justifyContent: "center",
    alignItems: "center",
  },
  actionButtonText: {
    flex: 1,
    fontSize: 14,
    color: "#FFFFFF",
  },
});
