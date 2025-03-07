import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";
import SpaceGrotesk500 from "@/components/TextComponents/SpaceGrotesk500";

interface ButtonPrimaryProps extends TouchableOpacityProps {
  text: string;
  textStyle?: StyleProp<TextStyle>;
  loading?: boolean;
}

export default function ButtonPrimary({
  text,
  textStyle,
  loading = false,
  ...rest
}: ButtonPrimaryProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          ...(rest.disabled && { opacity: 0.5 }),
        },
        rest.style,
      ]}
      disabled={loading || rest.disabled}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#000000" />
      ) : (
        <SpaceGrotesk500 style={[styles.text, textStyle]}>
          {text}
        </SpaceGrotesk500>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 52,
    backgroundColor: "#FFC600",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 64,
  },
  text: {
    fontSize: 16,
    color: "#000000",
  },
});
