import { ImageStyle, StyleProp } from "react-native";
import { Image } from "expo-image";

interface LogoProps {
  style?: StyleProp<ImageStyle>;
  color: "white";
  width: number;
  height: number;
}

export default function Logo({ style, color, width, height }: LogoProps) {
  return color === "white" ? (
    <Image
      source={require("@/assets/images/yma-logo-white.png")}
      style={[{ width, height, resizeMode: "contain" }, style]}
    />
  ) : null;
}
