import { TouchableOpacity, StyleSheet } from "react-native";

import SpaceGrotesk500 from "@/components/TextComponents/SpaceGrotesk500";

interface ForgotPasswordButtonProps {
  onPress: () => void;
}

export default function ForgotPasswordButton({
  onPress,
}: ForgotPasswordButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <SpaceGrotesk500 style={styles.buttonText}>
        Esqueceu a senha?
      </SpaceGrotesk500>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { alignSelf: "flex-end" },
  buttonText: { fontSize: 14, color: "#E0E0E0" },
});
