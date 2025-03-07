import { View, StyleSheet } from "react-native";

interface CenteredContainerProps {
  children: React.ReactNode;
}

export default function CenteredContainer({
  children,
}: CenteredContainerProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
});
