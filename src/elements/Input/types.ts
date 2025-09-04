export type TypeProps = "text" | "email" | "date" | "textarea" | "select";

interface OptionProps {
    value: string;
    label: string;
}
export interface InputProps {
    type?: TypeProps;
    label: string;
    name: string;
    options?: OptionProps[];
    placeholder?: string;
    error?: string;
    style?: 'light' | 'dark';
}