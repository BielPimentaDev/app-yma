import { TouchableOpacity, Text, StyleSheet, View, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";

interface IdDisplayProps {
  id: string;
}

export function IdDisplay({ id }: IdDisplayProps) {
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(id);
    Alert.alert(
      "Copiado!",
      "O ID da sua conta foi copiado para a área de transferência."
    );
  };

  return (
    <TouchableOpacity style={styles.idContainer} onPress={copyToClipboard}>
      <Text style={styles.idText}>ID {id}</Text>
      <MaterialCommunityIcons name="content-copy" size={16} color="#949494" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  idContainer: {
    height: 34,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF17",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 47,
    marginTop: 16,
    gap: 6,
    alignSelf: "center",
  },
  idText: {
    fontSize: 12,
    color: "#FFC600",
  },
});
