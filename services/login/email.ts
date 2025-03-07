import auth from "@react-native-firebase/auth";
import { router } from "expo-router";

export async function onEmailAndPasswordButtonPress(
  email: string,
  password: string
) {
  return auth().signInWithEmailAndPassword(email, password);
}

export async function onEmailAndPasswordButtonRegisterPress(
  email: string,
  password: string
) {
  if (auth().currentUser) {
    const credential = auth.EmailAuthProvider.credential(email, password);
    await auth().currentUser?.linkWithCredential(credential);
    router.replace("/");
  } else {
    return auth().createUserWithEmailAndPassword(email, password);
  }
}

export async function onEnviarEmailDeRecuperacaoButtonPress(email: string) {
  return auth().sendPasswordResetEmail(email);
}
