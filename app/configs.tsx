import { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";

import BackButton from "@/components/BackButton";
import ScreenTitle from "@/components/ScreenTitle";
import SwitchButton from "@/components/SwitchButton";

export default function ConfigsScreen() {
  const [notification, setNotification] = useState<boolean>(true);
  const [emailNotification, setEmailNotification] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <BackButton />
      <View style={styles.content}>
        <ScreenTitle title="Configurações" />
        <View style={styles.switchButtonsArea}>
          <SwitchButton
            icon="bell"
            text="Notificações"
            value={notification}
            onValueChange={() => setNotification((prev) => !prev)}
          />
          <SwitchButton
            icon="email"
            text="Notificações por email"
            value={emailNotification}
            onValueChange={() => setEmailNotification((prev) => !prev)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    flex: 1,
    marginTop: 8,
    paddingHorizontal: 24,
    gap: 24,
  },
  switchButtonsArea: {
    gap: 8,
  },
});
