import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface CloseButtonProps {
  onPress: () => void;
}

export default function CloseButton({ onPress }: CloseButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <MaterialCommunityIcons name="close" size={24} color="#E0E0E0" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
  },
});
