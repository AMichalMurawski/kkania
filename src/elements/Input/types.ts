import React from "react";

export type BaseInputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  error?: string;
  darkStyle?: boolean;
};

export type TextInputProps = BaseInputProps & {
  type: "text" | "email" | "date";
} & React.InputHTMLAttributes<HTMLInputElement>;

export type TextareaProps = BaseInputProps & {
  type: "textarea";
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export type SelectProps = BaseInputProps & {
  type: "select";
  options: { label: string; value: string }[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export type InputProps = TextInputProps | TextareaProps | SelectProps;
