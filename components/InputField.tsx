import { forwardRef } from "react";
import {
  TextInput,
  TextInputProps,
  StyleSheet,
  View,
  StyleProp,
  TextStyle,
} from "react-native";
import SpaceGrotesk400 from "./TextComponents/SpaceGrotesk400";

interface InputFieldProps extends TextInputProps {
  isPassword?: boolean;
  label?: string;
  style?: StyleProp<TextStyle>;
}

const InputField = forwardRef<TextInput, InputFieldProps>(
  ({ isPassword = false, label, style, ...rest }, ref) => {
    return (
      <View style={styles.inputArea}>
        {label && (
          <SpaceGrotesk400 style={styles.label}>{label}</SpaceGrotesk400>
        )}
        <TextInput
          ref={ref}
          style={[
            styles.input,
            {
              ...(rest.editable === false && {
                opacity: 0.5,
              }),
            },
            style,
          ]}
          placeholderTextColor="#E1E1E1"
          secureTextEntry={isPassword}
          {...rest}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  inputArea: {
    width: "100%",
    gap: 4,
  },
  label: {
    fontSize: 14,
    color: "#DBDBDB",
    marginLeft: 8,
  },
  input: {
    width: "100%",
    height: 52,
    borderWidth: 2,
    borderColor: "#FFC600",
    borderRadius: 64,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#FFFFFF",
  },
});

export default InputField;
