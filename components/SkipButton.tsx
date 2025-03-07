import { TouchableOpacity, StyleSheet } from "react-native";

import SpaceGrotesk500 from "@/components/TextComponents/SpaceGrotesk500";

interface SkipButtonProps {
  onPress: () => void;
  text?: string;
}

export default function SkipButton({
  onPress,
  text = "Pular",
}: SkipButtonProps) {
  return (
    <TouchableOpacity style={styles.skipButton} onPress={onPress}>
      <SpaceGrotesk500 style={styles.skipButtonText}>{text}</SpaceGrotesk500>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  skipButton: {
    alignSelf: "flex-end",
  },
  skipButtonText: {
    fontSize: 14,
    color: "#E0E0E0",
  },
});
