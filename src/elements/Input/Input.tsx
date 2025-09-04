import React from "react";
import styles from "./Input.module.css";
import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({ type = 'text', name, label, options, placeholder, error, style='light' }) => {
    return (
        <div className={`${styles.wrapper} ${style === 'light' ? styles.light : styles.dark}`}>
            {label && <label className={styles.label}>{label}</label>}

            {type === 'text' &&
                <input id={name} name={name} type={type} className={styles.input} />
            }

            {type === 'email' &&
                <input id={name} name={name} type={type} className={styles.input} />
            }

            {type === 'date' &&
                <input
                    id={name}
                    name={name}
                    type={type}
                    min={new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                    className={styles.input}
                />
            }

            {type === 'textarea' &&
                <textarea id={name} name={name} rows={6} maxLength={250} placeholder={placeholder} className={styles.textarea} />
            }

            {(type === 'select') && options &&
                <select id={name} name={name} className={styles.select} defaultValue="" >
                    <option value="" disabled>Wybierz sesję</option>
                    {options.map(opt =>
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    )}
                </select>
            }

            {error && <span className={styles.error} >{error}</span>}
        </div>
    );
};

export default Input;