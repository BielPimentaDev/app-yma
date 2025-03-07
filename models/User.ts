import { FirebaseAuthTypes } from "@react-native-firebase/auth";

export interface User extends FirebaseAuthTypes.User {
  pinCodeHash?: string;
  cpf?: string;
}
