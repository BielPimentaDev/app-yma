import { View, TouchableOpacity, StyleSheet } from "react-native";

import SpaceGrotesk500 from "@/components/TextComponents/SpaceGrotesk500";
import SpaceGrotesk400 from "@/components/TextComponents/SpaceGrotesk400";

interface LoginLinkProps {
  onPress: () => void;
}

export default function LoginLink({ onPress }: LoginLinkProps) {
  return (
    <View style={styles.container}>
      <SpaceGrotesk400 style={styles.text}>
        Já possui uma conta?{" "}
      </SpaceGrotesk400>
      <TouchableOpacity onPress={onPress}>
        <SpaceGrotesk500 style={styles.linkText}>Entre aqui</SpaceGrotesk500>
      </TouchableOpacity>
      <SpaceGrotesk400 style={styles.text}>.</SpaceGrotesk400>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", alignSelf: "center", marginTop: 89 },
  text: { fontSize: 14, color: "#E1E1E1" },
  linkText: { fontSize: 14, color: "#efba00" },
});
