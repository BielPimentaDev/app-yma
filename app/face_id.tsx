import { SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { router } from "expo-router";

import ButtonPrimary from "@/components/ButtonPrimary";
import SkipButton from "@/components/SkipButton";
import FaceIdInfo from "@/components/FaceIdInfo";

export default function FaceIDScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <SkipButton onPress={() => router.navigate("/(auth)/home")} />
        <FaceIdInfo
          title="Face ID"
          text="O log-in do Face ID usa este recurso para evitar a reinserção do código PIN."
          iconSource={require("@/assets/images/face-id-icon.png")}
        />
        <ButtonPrimary
          text="Usar Face ID"
          onPress={() => router.navigate("/(auth)/home")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#000000",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
});
