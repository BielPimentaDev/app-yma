import { Text, TextProps, StyleSheet } from "react-native";

interface SpaceGrotesk500Props extends TextProps {}

export default function SpaceGrotesk500({ ...rest }: SpaceGrotesk500Props) {
  return <Text style={[styles.text, rest.style]}>{rest.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "SpaceGrotesk-Medium",
  },
});
