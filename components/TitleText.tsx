import { StyleSheet } from "react-native";

import SpaceGrotesk400 from "@/components/TextComponents/SpaceGrotesk400";

interface TitleTextProps {
  text: string;
}

export default function TitleText({ text }: TitleTextProps) {
  return <SpaceGrotesk400 style={styles.title}>{text}</SpaceGrotesk400>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: "#E1E1E1",
  },
});
