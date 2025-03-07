import { InputGroupField } from "@/models/InputGroupField";

import InputGroup from "@/components/InputGroup";

interface FormFieldProps {
  fields: Partial<InputGroupField>[];
}

export default function FormField({ fields }: FormFieldProps) {
  return <InputGroup fields={fields} />;
}
