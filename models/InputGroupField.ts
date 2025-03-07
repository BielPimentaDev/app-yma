import { TextInputProps } from "react-native";

export interface InputGroupField extends TextInputProps {
  label: string;
  isPassword: boolean;
}
