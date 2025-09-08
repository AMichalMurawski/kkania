import React, { forwardRef } from "react";
import styles from "./Input.module.css";
import { InputProps } from "./types";

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement, InputProps>(
  ({ type, name, label, placeholder, error, style = "light", ...rest }, ref) => {
    return (
      <div className={`${styles.wrapper} ${style === "light" ? styles.light : styles.dark}`}>
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
            ref={ref as React.Ref<HTMLInputElement>}
            {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        ) : type === "textarea" ? (
          <textarea
            id={name}
            name={name}
            rows={6}
            maxLength={250}
            placeholder={placeholder}
            className={styles.textarea}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : type === "select" ? (
          <select
            id={name}
            name={name}
            className={styles.select}
            defaultValue=""
            ref={ref as React.Ref<HTMLSelectElement>}
            {...(rest as React.SelectHTMLAttributes<HTMLSelectElement>)}
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
