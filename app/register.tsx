import { useState } from "react";
import {
  Alert,
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

import { InputGroupField } from "@/models/InputGroupField";

import { useFormValidation } from "@/hooks/useFormValidation";

import ButtonPrimary from "@/components/ButtonPrimary";
import Title from "@/components/Title";
import FormField from "@/components/FormField";
import PrivacyPolicyText from "@/components/PrivacyPolicyText";
import LoginLink from "@/components/LoginLink";

import { onEmailAndPasswordButtonRegisterPress } from "@/services/login/email";

export default function RegisterScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const validateForm = (form: {
    email: string | undefined | null;
    password: string;
  }) => {
    return (
      Boolean(form.email?.trim().length) && Boolean(form.password.trim().length)
    );
  };

  const canPressPrimaryButton = useFormValidation({
    form,
    validateFn: validateForm,
  });

  const fields: Partial<InputGroupField>[] = [
    {
      value: form.email,
      onChangeText: (text) => setForm((prev) => ({ ...prev, email: text })),
      placeholder: "E-mail",
      label: "E-mail",
    },
    {
      value: form.password,
      onChangeText: (text) => setForm((prev) => ({ ...prev, password: text })),
      placeholder: "Senha",
      isPassword: true,
      label: "Senha",
    },
  ];

  const handlePressOnRegistrarButton = async () => {
    Keyboard.dismiss();

    const { email, password } = form;

    if (!email || !password) {
      Alert.alert("Atenção", "Por favor, preencha todos os campos.");
      return;
    }

    try {
      setIsLoading(true);

      await onEmailAndPasswordButtonRegisterPress(email, password);
    } catch (error) {
      console.log(error);

      if (error instanceof Error) {
        Alert.alert("Falha ao registrar-se", error.message);
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
            <Title text="Cadastrar" />
            <FormField fields={fields} />
          </View>

          <View style={styles.loginButtonArea}>
            <ButtonPrimary
              onPress={handlePressOnRegistrarButton}
              text="Cadastrar"
              disabled={!canPressPrimaryButton || isLoading}
              loading={isLoading}
            />
            <PrivacyPolicyText onPress={() => {}} loginOrRegister="register" />
          </View>

          <LoginLink onPress={() => router.navigate("/login")} />
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
    justifyContent: "flex-end",
    marginTop: 16,
    gap: 32,
  },
  loginButtonArea: {
    marginTop: 102,
  },
});
