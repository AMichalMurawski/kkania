import React from "react";
import styles from "./ContactForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "../../../elements";
import { contactSchema } from "./contactValidation";
import { ContactFormData, ContactFormProps } from "./types";

const ContactForm: React.FC<ContactFormProps> = ({ style = 'light' }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: yupResolver(contactSchema),
    });

    const onSubmit = (data: ContactFormData) => {
        window.alert(`Form data: ${JSON.stringify(data)}`);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <Input
                style={style}
                type="text"
                label="Imię"
                error={errors.name?.message}
                {...register("name")}
            />

            <Input
                style={style}
                type="email"
                label="Email"
                error={errors.email?.message}
                {...register("email")}
            />

            <Input
                style={style}
                type="textarea"
                label="Wiadomość"
                placeholder="Napisz swoją wiadomość..."
                error={errors.message?.message}
                {...register("message")}
            />

            <Button type="submit" linkTo="">Wyślij wiadomość</Button>
        </form>
    );
};

export default ContactForm;
