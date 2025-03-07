import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";

interface AvatarProps {
  photoUrl?: string | null;
  onChangeImage?: (uri: string) => void;
}

export default function Avatar({ photoUrl, onChangeImage }: AvatarProps) {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && onChangeImage) {
      onChangeImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.avatarArea}>
      <View style={styles.avatarImageArea}>
        <Image
          source={
            photoUrl ? { uri: photoUrl } : require("@/assets/images/avatar.png")
          }
          style={styles.avatar}
        />
      </View>
      {onChangeImage && (
        <TouchableOpacity style={styles.avatarChangeButton} onPress={pickImage}>
          <MaterialCommunityIcons
            name="camera-outline"
            size={18}
            color="#0E1620"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  avatarArea: {
    width: 96,
    height: 96,
    position: "relative",
    alignSelf: "center",
  },
  avatarImageArea: {
    width: "100%",
    height: "100%",
    borderRadius: 64,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  avatarChangeButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 36,
    height: 36,
    borderRadius: 999999,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFC600",
  },
});
