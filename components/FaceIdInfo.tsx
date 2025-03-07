import { View, StyleSheet, ImageSourcePropType } from "react-native";

import SpaceGrotesk700 from "@/components/TextComponents/SpaceGrotesk700";
import SpaceGrotesk400 from "@/components/TextComponents/SpaceGrotesk400";
import FaceIdIcon from "@/components/FaceIdIcon";

interface FaceIdInfoProps {
  title: string;
  text: string;
  iconSource: ImageSourcePropType;
}

export default function FaceIdInfo({
  title,
  text,
  iconSource,
}: FaceIdInfoProps) {
  return (
    <View style={styles.faceIdInfoArea}>
      <FaceIdIcon source={iconSource} />
      <View style={styles.faceIdInfo}>
        <SpaceGrotesk700 style={styles.faceIdInfoTitle}>
          {title}
        </SpaceGrotesk700>
        <SpaceGrotesk400 style={styles.faceIdInfoText}>{text}</SpaceGrotesk400>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  faceIdInfoArea: {
    alignItems: "center",
    gap: 80,
  },
  faceIdInfo: {
    gap: 8,
    alignItems: "center",
  },
  faceIdInfoTitle: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  faceIdInfoText: {
    maxWidth: 283,
    fontSize: 14,
    color: "#E1E1E1",
    textAlign: "center",
  },
});
