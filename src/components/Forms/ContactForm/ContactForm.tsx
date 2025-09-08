import React from "react";
import styles from "./ContactForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "../../../elements";
import { contactSchema } from "./contactValidation";

type ContactFormData = {
    name: string;
    email: string;
    message: string;
};

const ContactForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: yupResolver(contactSchema),
    });

    const onSubmit = (data: ContactFormData) => {
        window.alert(`Form data: ${JSON.stringify(data)}`);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <Input
                type="text"
                label="Imię"
                error={errors.name?.message}
                {...register("name")}
            />

            <Input
                type="email"
                label="Email"
                error={errors.email?.message}
                {...register("email")}
            />

            <Input
                type="textarea"
                label="Wiadomość"
                placeholder="Napisz swoją wiadomość..."
                error={errors.message?.message}
                {...register("message")}
            />

            <Button type="submit" linkTo="">Wyślij</Button>
        </form>
    );
};

export default ContactForm;
