import { SafeAreaView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { router } from "expo-router";

import { useAuth } from "@/contexts/auth";

import SpaceGrotesk500 from "@/components/TextComponents/SpaceGrotesk500";
import { IdDisplay } from "@/components/IdDisplay";
import { UserInfo } from "@/components/UserInfo";
import { ActionButton } from "@/components/ActionButton";
import { TopFloatingButtons } from "@/components/TopFloatingButtons";

export default function AccountScreen() {
  const { signOut, user } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.content}>
        <SpaceGrotesk500 style={styles.title}>Perfil</SpaceGrotesk500>

        <UserInfo
          photoURL={user?.photoURL}
          displayName={user?.displayName}
          email={user?.email}
        />

        <IdDisplay id={String(user?.uid)} />

        <View style={styles.actionsArea}>
          <ActionButton
            icon="account"
            text="Dados pessoais"
            onPress={() => {
              router.navigate("/personal_data");
            }}
          />
          <ActionButton
            icon="security"
            text="Segurança da Conta"
            onPress={() => {
              /* Navegar para segurança da conta */
            }}
          />
          <ActionButton
            icon="cog"
            text="Configurações"
            onPress={() => {
              router.navigate("/configs");
            }}
          />
          <ActionButton
            icon="chat-processing"
            text="Suporte"
            onPress={() => {
              /* Navegar para suporte */
            }}
          />
        </View>

        <TopFloatingButtons onClose={() => router.back()} onSignOut={signOut} />
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
    paddingTop: 14,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 16,
    color: "#FFFFFF",
    alignSelf: "center",
  },
  actionsArea: {
    marginTop: 16,
    gap: 8,
  },
});
