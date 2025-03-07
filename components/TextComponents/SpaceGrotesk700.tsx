import { Text, TextProps, StyleSheet } from "react-native";

interface SpaceGrotesk700Props extends TextProps {}

export default function SpaceGrotesk700({ ...rest }: SpaceGrotesk700Props) {
  return <Text style={[styles.text, rest.style]}>{rest.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "SpaceGrotesk-Bold",
  },
});
