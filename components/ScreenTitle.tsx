import { StyleSheet, TextStyle } from "react-native";

import SpaceGrotesk700 from "@/components/TextComponents/SpaceGrotesk700";

interface ScreenTitleProps {
  title: string;
  style?: TextStyle;
}

export default function ScreenTitle({ title, style }: ScreenTitleProps) {
  return (
    <SpaceGrotesk700 style={[styles.titleText, style]}>{title}</SpaceGrotesk700>
  );
}

const styles = StyleSheet.create({
  titleText: {
    marginTop: 8,
    fontSize: 20,
    color: "#FFFFFF",
    alignSelf: "center",
  },
});
