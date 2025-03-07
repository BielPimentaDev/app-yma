import { useState } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import Constants from "expo-constants";
import { router } from "expo-router";

import { useAuth } from "@/contexts/auth";

import SpaceGrotesk400 from "@/components/TextComponents/SpaceGrotesk400";
import Avatar from "@/components/Avatar";
import TitleText from "@/components/TitleText";
import PinIndicator from "@/components/PinIndicator";
import NumpadRow from "@/components/NumpadRow";
import NumpadButton from "@/components/NumpadButton";

export default function PinCodeScreen() {
  const { user } = useAuth();
  const [form, setForm] = useState<number[]>([]);

  const handlePressOnPin = (pinNumber: number) => {
    if (form.length === 4) return;
    const updatedForm = [...form, pinNumber];
    setForm(updatedForm);

    if (updatedForm.length === 4) {
      router.navigate("/face_id");
    }
  };

  const handlePressOnBackSpace = () => {
    if (form.length === 0) return;
    setForm(form.slice(0, -1));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Avatar photoURL={user?.photoURL} />
        <TitleText text="Digite seu código PIN." />
        <View style={styles.pinIndicatorArea}>
          {[0, 1, 2, 3].map((_, index) => (
            <PinIndicator
              key={index}
              active={Boolean(form[index]?.toString())}
            />
          ))}
        </View>
        <View style={styles.numpadArea}>
          {[1, 2, 3].map((_, index) => (
            <NumpadRow key={index}>
              {[1, 2, 3].map((num) => (
                <NumpadButton
                  key={num}
                  number={(index * 3 + num).toString()}
                  onPress={() => handlePressOnPin(index * 3 + num)}
                />
              ))}
            </NumpadRow>
          ))}
          <NumpadRow>
            <NumpadButton noBackground />
            <NumpadButton number="0" onPress={() => handlePressOnPin(0)} />
            <NumpadButton
              icon="backspace-outline"
              onPress={handlePressOnBackSpace}
              noBackground
            />
          </NumpadRow>
        </View>
        <TouchableOpacity style={styles.forgotPinCodeButton}>
          <SpaceGrotesk400 style={styles.forgotPinCodeButtonText}>
            Esqueceu seu código PIN?
          </SpaceGrotesk400>
        </TouchableOpacity>
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
    justifyContent: "center",
    alignItems: "center",
  },
  pinIndicatorArea: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
    gap: 16,
  },
  numpadArea: {
    marginTop: 25,
    gap: 24,
  },
  forgotPinCodeButton: {
    marginTop: 50,
  },
  forgotPinCodeButtonText: {
    fontSize: 14,
    color: "#FFC600",
  },
});
