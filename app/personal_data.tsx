import { useEffect, useState } from "react";
import {
  Alert,
  BackHandler,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { router } from "expo-router";

import { useFormValidation } from "@/hooks/useFormValidation";

import { InputGroupField } from "@/models/InputGroupField";

import BackButton from "@/components/BackButton";
import ScreenTitle from "@/components/ScreenTitle";
import Avatar from "@/components/Avatar";
import { useAuth } from "@/contexts/auth";
import InputGroup from "@/components/InputGroup";
import ButtonPrimary from "@/components/ButtonPrimary";

import { updateUserPhotoURL } from "@/services/user/updateUserPhotoURL";
import { updateUserDisplayName } from "@/services/user/updateUserInfo";
import { updateUserEmail } from "@/services/user/updateUserEmail";

export default function PersonalDataScreen() {
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    image: user?.photoURL,
    name: user?.displayName,
    email: user?.email,
    cpf: user?.cpf,
  });

  const validateForm = (form: {
    image: string | null | undefined;
    name: string | null | undefined;
    email: string | null | undefined;
    cpf: string | undefined;
  }) => {
    return (
      Boolean(form.name?.trim().length) &&
      Boolean(form.email?.trim().length) &&
      Boolean(form.cpf?.trim().length) &&
      (form.name !== user?.displayName ||
        form.image !== user?.photoURL ||
        form.email !== user?.email ||
        form.cpf !== user?.cpf)
    );
  };

  const canPressPrimaryButton = useFormValidation({
    form,
    validateFn: validateForm,
  });

  const fields: Partial<InputGroupField>[] = [
    {
      value: form.name || "",
      onChangeText: (text: string) =>
        setForm((prev) => ({ ...prev, name: text })),
      placeholder: "Nome",
    },
    {
      value: form.email || "",
      onChangeText: (text: string) =>
        setForm((prev) => ({ ...prev, email: text })),
      placeholder: "E-mail",
      editable: false,
    },
    {
      value: form.cpf || "",
      onChangeText: (text: string) =>
        setForm((prev) => ({ ...prev, cpf: text })),
      placeholder: "CPF",
      keyboardType: "number-pad",
      maxLength: 11,
    },
  ];

  useEffect(() => {
    const backAction = () => {
      if (isLoading) {
        Alert.alert(
          "Aguarde",
          "A atualização está em andamento. Por favor, aguarde."
        );
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [isLoading]);

  const handlePressOnBackButton = () => {
    if (!isLoading) {
      router.back();
    }
  };

  const handlePressOnButtonPrimary = async () => {
    try {
      setIsLoading(true);

      if (form.image !== user?.photoURL)
        await updateUserPhotoURL({ photoURL: String(form.image) });

      if (form.name !== user?.displayName)
        await updateUserDisplayName({ displayName: String(form.name) });

      if (form.email !== user?.email) {
        await updateUserEmail({ email: String(form.email) });
      }

      handlePressOnBackButton();
    } catch (error) {
      console.error(error);
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
          <BackButton onPress={handlePressOnBackButton} />
          <View style={styles.content}>
            <ScreenTitle title="Dados pessoais" />
            <View style={styles.avatarArea}>
              <Avatar
                photoUrl={form.image || null}
                onChangeImage={(uri) =>
                  setForm((prev) => ({ ...prev, image: uri }))
                }
              />
            </View>
            <InputGroup fields={fields} />
          </View>
          <View style={styles.primaryButtonArea}>
            <ButtonPrimary
              text="Atualizar dados"
              disabled={!canPressPrimaryButton || isLoading}
              loading={isLoading}
              onPress={handlePressOnButtonPrimary}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingTop: Constants.statusBarHeight,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "flex-end",
    paddingBottom: 14,
  },
  content: {
    flex: 1,
    marginTop: 8,
    paddingHorizontal: 24,
  },
  avatarArea: {
    marginTop: 24,
    marginBottom: 30,
    alignSelf: "center",
  },
  primaryButtonArea: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
});
