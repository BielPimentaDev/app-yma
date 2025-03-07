import { View, StyleSheet } from "react-native";

interface PinIndicatorProps {
  active: boolean;
}

export default function PinIndicator({ active }: PinIndicatorProps) {
  return (
    <View
      style={[
        styles.pinIndicator,
        { backgroundColor: active ? "#FFC600" : "transparent" },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  pinIndicator: {
    width: 14,
    height: 14,
    borderWidth: 2,
    borderColor: "#FFC600",
    borderRadius: 999999,
  },
});
