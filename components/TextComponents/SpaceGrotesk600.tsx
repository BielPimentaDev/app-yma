import { Text, TextProps, StyleSheet } from "react-native";

interface SpaceGrotesk600Props extends TextProps {}

export default function SpaceGrotesk600({ ...rest }: SpaceGrotesk600Props) {
  return <Text style={[styles.text, rest.style]}>{rest.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "SpaceGrotesk-SemiBold",
  },
});
