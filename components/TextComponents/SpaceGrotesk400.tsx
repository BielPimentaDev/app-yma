import { Text, TextProps, StyleSheet } from "react-native";

interface SpaceGrotesk400Props extends TextProps {}

export default function SpaceGrotesk400({ ...rest }: SpaceGrotesk400Props) {
  return <Text style={[styles.text, rest.style]}>{rest.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "SpaceGrotesk-Regular",
  },
});
