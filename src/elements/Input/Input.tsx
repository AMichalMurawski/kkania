import { forwardRef, InputHTMLAttributes, Ref, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import styles from "./Input.module.css";
import { InputProps } from "./types";

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, InputProps>(
  ({ type, name, label, placeholder, error, darkStyle, ...rest }, ref) => {
    return (
      <div className={`${styles.wrapper} ${darkStyle ? styles.dark : styles.light}`}>
        {label && (
          <label htmlFor={name} className={styles.label}>
            {label}
          </label>
        )}

        {type === "text" || type === "email" || type === "date" ? (
          <input
            id={name}
            name={name}
            type={type}
            className={styles.input}
            ref={ref as Ref<HTMLInputElement>}
            {...(rest as InputHTMLAttributes<HTMLInputElement>)}
          />
        ) : type === "textarea" ? (
          <textarea
            id={name}
            name={name}
            rows={6}
            maxLength={250}
            placeholder={placeholder}
            className={styles.textarea}
            ref={ref as Ref<HTMLTextAreaElement>}
            {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : type === "select" ? (
          <select
            id={name}
            name={name}
            className={styles.select}
            defaultValue=""
            ref={ref as Ref<HTMLSelectElement>}
            {...(rest as SelectHTMLAttributes<HTMLSelectElement>)}
          >
            <option value="" disabled>
              Wybierz sesję
            </option>
            {"options" in rest && Array.isArray((rest as any).options)
              ? (rest as any).options.map((opt: { value: string; label: string }) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))
              : null}
          </select>
        ) : null}

        {error && <span className={styles.error}>{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
