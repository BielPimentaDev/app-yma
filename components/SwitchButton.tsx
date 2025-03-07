import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Switch } from "react-native-switch";

import SpaceGrotesk500 from "@/components/TextComponents/SpaceGrotesk500";

interface SwitchButtonProps {
  icon: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  text: string;
  value: boolean;
  onValueChange: () => void;
}

export default function SwitchButton({
  icon,
  text,
  value,
  onValueChange,
}: SwitchButtonProps) {
  return (
    <View style={styles.switchButtonArea}>
      <View style={styles.switchButtonIconArea}>
        <MaterialCommunityIcons name={icon} size={20} color="#FFC600" />
      </View>
      <SpaceGrotesk500 style={styles.switchButtonText}>{text}</SpaceGrotesk500>
      <Switch
        value={value}
        onValueChange={onValueChange}
        activeText=""
        inActiveText=""
        circleSize={16}
        barHeight={24}
        circleBorderWidth={0}
        backgroundActive="#FFC600"
        backgroundInactive="#2E5FF121"
        circleActiveColor="#FFFFFF"
        circleInActiveColor="#FFFFFF"
        switchLeftPx={4}
        switchRightPx={4}
        switchBorderRadius={56}
        switchWidthMultiplier={2.5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  switchButtonArea: {
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  switchButtonIconArea: {
    width: 36,
    height: 36,
    backgroundColor: "#FFC60026",
    borderRadius: 999999,
    justifyContent: "center",
    alignItems: "center",
  },
  switchButtonText: {
    fontSize: 14,
    color: "#FFFFFF",
    flex: 1,
  },
});
