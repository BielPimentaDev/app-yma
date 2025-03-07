import { Text, TextProps, StyleSheet } from "react-native";

interface SpaceGrotesk300Props extends TextProps {}

export default function SpaceGrotesk300({ ...rest }: SpaceGrotesk300Props) {
  return <Text style={[styles.text, rest.style]}>{rest.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "SpaceGrotesk-Light",
  },
});
