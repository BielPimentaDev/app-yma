import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import SpaceGrotesk500 from "@/components/TextComponents/SpaceGrotesk500";

interface NumpadButtonProps {
  number?: string;
  icon?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  onPress?: () => void;
  noBackground?: boolean;
}

export default function NumpadButton({
  number,
  icon,
  onPress,
  noBackground,
}: NumpadButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.numpadButton, noBackground && styles.noBackground]}
      onPress={onPress}
    >
      {icon ? (
        <MaterialCommunityIcons name={icon} size={24} color="#FFFFFF" />
      ) : (
        <SpaceGrotesk500 style={styles.numpadButtonText}>
          {number}
        </SpaceGrotesk500>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  numpadButton: {
    height: 70,
    width: 70,
    backgroundColor: "#1f1f1f",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 64,
  },
  noBackground: {
    backgroundColor: "transparent",
  },
  numpadButtonText: {
    fontSize: 22,
    color: "#FFFFFF",
  },
});
