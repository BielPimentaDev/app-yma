import { View, StyleSheet, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";

interface FaceIdIconProps {
  source: ImageSourcePropType;
}

export default function FaceIdIcon({ source }: FaceIdIconProps) {
  return (
    <View style={styles.faceIdIconAreaOuter}>
      <View style={styles.faceIdIconAreaMiddle}>
        <View style={styles.faceIdIconAreaInner}>
          <Image source={source} style={styles.faceIdIcon} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  faceIdIconAreaOuter: {
    width: 127,
    height: 127,
    borderRadius: 999999,
    backgroundColor: "#FFC60040",
    justifyContent: "center",
    alignItems: "center",
  },
  faceIdIconAreaMiddle: {
    width: 106,
    height: 106,
    borderRadius: 999999,
    backgroundColor: "#FFC60026",
    justifyContent: "center",
    alignItems: "center",
  },
  faceIdIconAreaInner: {
    width: 86,
    height: 86,
    borderRadius: 999999,
    backgroundColor: "#FFC600",
    justifyContent: "center",
    alignItems: "center",
  },
  faceIdIcon: {
    width: 42,
    height: 42,
    resizeMode: "contain",
  },
});
