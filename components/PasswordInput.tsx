import { forwardRef, useState } from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import SpaceGrotesk400 from "./TextComponents/SpaceGrotesk400";

interface PasswordInputProps extends TextInputProps {
  label?: string;
}

const PasswordInput = forwardRef<TextInput, PasswordInputProps>(
  ({ label, ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
      <View style={styles.inputArea}>
        {label && (
          <SpaceGrotesk400 style={styles.label}>{label}</SpaceGrotesk400>
        )}
        <View style={styles.passwordInputArea}>
          <TextInput
            style={[styles.formInput]}
            ref={ref}
            secureTextEntry={!showPassword}
            placeholderTextColor="#E1E1E1"
            {...rest}
          />
          <TouchableOpacity
            style={styles.passwordToggleButton}
            onPress={() => setShowPassword((prev) => !prev)}
            accessibilityLabel={
              showPassword ? "Ocultar senha" : "Mostrar senha"
            }
            accessibilityRole="button"
          >
            <MaterialCommunityIcons
              name={showPassword ? "eye" : "eye-off"}
              size={24}
              color="#FFFFFF96"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
);

export default PasswordInput;

const styles = StyleSheet.create({
  inputArea: {
    width: "100%",
    gap: 4,
  },
  passwordInputArea: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    color: "#DBDBDB",
    marginLeft: 8,
  },
  formInput: {
    width: "100%",
    height: 52,
    borderWidth: 2,
    borderColor: "#FFC600",
    borderRadius: 64,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#FFFFFF",
  },
  passwordToggleButton: {
    position: "absolute",
    right: 16,
  },
});
