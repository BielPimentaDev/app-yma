import { useCallback, useEffect, useState } from "react";

interface FormValidationParams<T> {
  form: T;
  validateFn: (form: T) => boolean;
}

export function useFormValidation<T>({
  form,
  validateFn,
}: FormValidationParams<T>) {
  const [canSubmit, setCanSubmit] = useState(false);

  const validate = useCallback(() => {
    setCanSubmit(validateFn(form));
  }, [form, validateFn]);

  useEffect(() => {
    validate();
  }, [form, validate]);

  return canSubmit;
}
