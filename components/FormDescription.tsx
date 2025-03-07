import { View, StyleSheet } from "react-native";

import Title from "@/components/Title";
import SpaceGrotesk400 from "@/components/TextComponents/SpaceGrotesk400";

interface FormDescriptionProps {
  title: string;
  description: string;
}

export default function FormDescription({
  title,
  description,
}: FormDescriptionProps) {
  return (
    <View style={styles.container}>
      <Title text={title} />
      <SpaceGrotesk400 style={styles.description}>
        {description}
      </SpaceGrotesk400>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    marginBottom: 54,
  },
  description: {
    maxWidth: 342,
    fontSize: 14,
    color: "#E1E1E1",
    textAlign: "center",
  },
});
