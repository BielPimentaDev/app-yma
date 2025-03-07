import { View, StyleSheet } from "react-native";

import { InputGroupField } from "@/models/InputGroupField";

import InputField from "@/components/InputField";
import PasswordInput from "@/components/PasswordInput";

interface InputGroupProps {
  fields: Partial<InputGroupField>[];
}

export default function InputGroup({ fields }: InputGroupProps) {
  return (
    <View style={styles.inputGroupArea}>
      {fields.map((field, index) =>
        field.isPassword ? (
          <PasswordInput
            key={index}
            label={field.label}
            value={field.value}
            editable={field.editable ?? true}
            onChangeText={field.onChangeText}
            placeholder={field.placeholder}
            keyboardType={field.keyboardType}
            maxLength={field.maxLength}
          />
        ) : (
          <InputField
            key={index}
            label={field.label}
            value={field.value}
            editable={field.editable ?? true}
            onChangeText={field.onChangeText}
            placeholder={field.placeholder}
            keyboardType={field.keyboardType}
            maxLength={field.maxLength}
          />
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputGroupArea: {
    marginTop: 16,
    gap: 8,
  },
});
