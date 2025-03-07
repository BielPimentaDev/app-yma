import { View, TouchableOpacity, StyleSheet } from "react-native";

import SpaceGrotesk500 from "@/components/TextComponents/SpaceGrotesk500";
import SpaceGrotesk400 from "@/components/TextComponents/SpaceGrotesk400";

interface PrivacyPolicyTextProps {
  onPress: () => void;
  loginOrRegister?: "login" | "register";
}

export default function PrivacyPolicyText({
  onPress,
  loginOrRegister = "login",
}: PrivacyPolicyTextProps) {
  return (
    <View style={styles.privacyPolicyGroup}>
      <SpaceGrotesk400 style={styles.privacyPolicyGroupText}>
        Ao clicar em {loginOrRegister === "login" ? "Entrar" : "Cadastrar"} você
        concorda com
      </SpaceGrotesk400>
      <View style={styles.privacyPolicyGroupSecondLine}>
        <SpaceGrotesk400 style={styles.privacyPolicyGroupText}>
          nossa{" "}
        </SpaceGrotesk400>
        <TouchableOpacity onPress={onPress}>
          <SpaceGrotesk500 style={styles.privacyPolicyButtonText}>
            Política de Privacidade
          </SpaceGrotesk500>
        </TouchableOpacity>
        <SpaceGrotesk400 style={styles.privacyPolicyGroupText}>
          .
        </SpaceGrotesk400>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  privacyPolicyGroup: {
    marginTop: 8,
    alignSelf: "center",
    alignItems: "center",
  },
  privacyPolicyGroupText: {
    fontSize: 14,
    color: "#E1E1E1",
  },
  privacyPolicyGroupSecondLine: {
    flexDirection: "row",
  },
  privacyPolicyButtonText: {
    fontSize: 14,
    color: "#efba00",
  },
});
