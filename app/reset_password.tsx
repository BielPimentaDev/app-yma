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
import { router } from "expo-router";

import { useFormValidation } from "@/hooks/useFormValidation";

import ButtonPrimary from "@/components/ButtonPrimary";
import InputGroup from "@/components/InputGroup";
import CloseButton from "@/components/CloseButton";

import { onEnviarEmailDeRecuperacaoButtonPress } from "@/services/login/email";
import FormDescription from "@/components/FormDescription";

export default function ResetPasswordScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
  });

  const validateForm = (form: { email: string }) => {
    return Boolean(form.email?.trim().length);
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
    },
  ];

  const handlePressOnEnviarEmailDeRecuperacaoButton = async () => {
    Keyboard.dismiss();

    const { email } = form;

    if (!email) {
      Alert.alert("Por favor, preencha todos os campos.");
      return;
    }
    try {
      setIsLoading(true);
      await onEnviarEmailDeRecuperacaoButtonPress(email);
      Alert.alert(
        "Sucesso!",
        `E-mail de recuperação enviado para ${email} com sucesso.`,
        [{ text: "Ok", onPress: () => router.back() }]
      );
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Falha ao recuperar a senha", error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <CloseButton onPress={() => router.back()} />
          <View style={styles.formArea}>
            <FormDescription
              title="Recuperar Senha"
              description="Coloque o e-mail que você utilizou no momento do cadastro para que possamos enviar um código de verificação"
            />
            <InputGroup fields={fields} />
          </View>

          <ButtonPrimary
            text="Enviar e-mail de recuperação"
            onPress={handlePressOnEnviarEmailDeRecuperacaoButton}
            disabled={!canPressPrimaryButton || isLoading}
            loading={isLoading}
          />
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
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  formArea: {
    flex: 1,
    marginTop: 110,
    marginBottom: 24,
  },
});
