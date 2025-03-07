import { useState } from "react";
import {
  Alert,
  Dimensions,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

import { useFormValidation } from "@/hooks/useFormValidation";

import ButtonPrimary from "@/components/ButtonPrimary";
import Title from "@/components/Title";
import FormField from "@/components/FormField";
import ForgotPasswordButton from "@/components/ForgotPasswordButton";
import PrivacyPolicyText from "@/components/PrivacyPolicyText";
import RegisterLink from "@/components/RegisterLink";

import { onEmailAndPasswordButtonPress } from "@/services/login/email";

const { height } = Dimensions.get("screen");

export default function LoginScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const validateForm = (form: {
    email: string;
    password: string;
    showPassword: boolean;
  }) => {
    return (
      Boolean(form.email?.trim().length) && Boolean(form.password.trim().length)
    );
  };

  const canPressPrimaryButton = useFormValidation({
    form,
    validateFn: validateForm,
  });

  const fields = [
    {
      value: form.email,
      onChangeText: (text: string) =>
        setForm((prev) => ({ ...prev, email: text })),
      placeholder: "E-mail",
      label: "E-mail",
    },
    {
      value: form.password,
      onChangeText: (text: string) =>
        setForm((prev) => ({ ...prev, password: text })),
      placeholder: "Senha",
      isPassword: true,
      label: "Senha",
    },
  ];

  const handlePressOnEntrarButton = async () => {
    Keyboard.dismiss();
    const { email, password } = form;
    if (!email || !password) {
      Alert.alert("Por favor, preencha todos os campos.");
      return;
    }
    try {
      setIsLoading(true);
      await onEmailAndPasswordButtonPress(email, password);
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Falha ao logar", error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.formArea}>
            <Title text="Entrar" />
            <FormField fields={fields} />
            <ForgotPasswordButton
              onPress={() => router.navigate("/reset_password")}
            />
          </View>

          <View style={styles.loginButtonArea}>
            <ButtonPrimary
              onPress={handlePressOnEntrarButton}
              text="Entrar"
              disabled={!canPressPrimaryButton || isLoading}
              loading={isLoading}
            />
            <PrivacyPolicyText onPress={() => {}} />
          </View>

          <RegisterLink onPress={() => router.navigate("/register")} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#000000",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 44,
    justifyContent: "flex-end",
  },
  formArea: {
    flex: 1,
    marginTop: 32,
    justifyContent: "flex-end",
    gap: 32,
  },
  loginButtonArea: {
    marginTop: height > 800 ? 102 : 72,
  },
});
