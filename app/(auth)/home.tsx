import { SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "flex-end", paddingHorizontal: 16 }}
    >
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
