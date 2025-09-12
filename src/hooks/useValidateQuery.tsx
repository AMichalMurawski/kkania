import { useLocation } from "react-router-dom";

type Validator<T> = (value: string | null) => T | null;

const asNumber: Validator<number> = (value) => {
  if (value === null) return null;
  const num = Number(value);
  return isNaN(num) ? null : num;
};

const asString: Validator<string> = (value) => {
  return value ?? null;
};

const asBoolean: Validator<boolean> = (value) => {
  if (value === null) return null;
  if (value === "true") return true;
  if (value === "false") return false;
  return null;
};

export function useValidatedQuery<T extends Record<string, Validator<any>>>(validators: T) {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const result: { [K in keyof T]: ReturnType<T[K]> } = {} as any;

  for (const key in validators) {
    const validator = validators[key];
    result[key] = validator(params.get(key));
  }

  return result;
}

export { asNumber, asString, asBoolean };
