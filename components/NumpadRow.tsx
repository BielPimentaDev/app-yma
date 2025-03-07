import { View, StyleSheet } from "react-native";

interface NumpadRowProps {
  children: React.ReactNode;
}

export default function NumpadRow({ children }: NumpadRowProps) {
  return <View style={styles.numpadRow}>{children}</View>;
}

const styles = StyleSheet.create({
  numpadRow: {
    flexDirection: "row",
    gap: 24,
  },
});
