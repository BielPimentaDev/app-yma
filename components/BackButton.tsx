import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";
import { router } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import SpaceGrotesk400 from "@/components/TextComponents/SpaceGrotesk400";

interface BackButtonProps {
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function BackButton({
  onPress = () => router.back(),
  style,
  textStyle,
}: BackButtonProps) {
  return (
    <TouchableOpacity style={[styles.backButton, style]} onPress={onPress}>
      <MaterialCommunityIcons name="chevron-left" size={22} color="#FFFFFF" />
      <SpaceGrotesk400 style={[styles.backButtonText, textStyle]}>
        Voltar
      </SpaceGrotesk400>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 15,
    marginTop: 14,
    height: 44,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  backButtonText: {
    fontSize: 17,
    color: "#FFFFFF",
  },
});
