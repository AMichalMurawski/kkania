import { FC } from "react";
import styles from "./ContactForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "../../../elements";
import { contactSchema } from "./contactValidation";
import { ContactFormData, ContactFormProps } from "./types";
import { useToast } from "../../../context";
import { sendEmail } from "../../../utils";

type FormFields = keyof ContactFormData;

const ContactForm: FC<ContactFormProps> = ({ darkStyle }) => {
    const { addToast } = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        clearErrors,
    } = useForm<ContactFormData>({
        resolver: yupResolver(contactSchema),
    });

    const handleFieldChange = (field: FormFields) => {
        clearErrors(field);
    };

    const onSubmit = async (data: ContactFormData) => {        
        try {
            addToast({
                message: "Wysyłanie wiadomości",
                type: "loading"
            })

            const message = `
                <strong>Wiadomość:</strong> ${data.message}
                <br>
                <strong>Imię i Nazwisko:</strong> ${data.name}
                <br>
                <strong>E-mail:</strong> ${data.email}
            `;

            const response = await sendEmail({
                userName: data.name,
                userEmail: data.email,
                message: message,
                formType: "kontakt"
            });

            if (!response.success) {
                addToast({
                    message: "Nastąpił problem z wysłaniem wiadomości",
                    type: "error"
                })
                return
            };

            addToast({
                message: "Wiadomość wysłana pomyślnie",
                type: "emailSend"
            })
            reset();
        } catch (err: any) {
            console.log("Błąd wysyłki email:", err)
            addToast({
                message: "Wystąpił błąd przy wysyłaniu wiadomośći",
                type: "error"
            })
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <Input
                darkStyle={darkStyle}
                type="text"
                label="Imię"
                error={errors.name?.message}
                {...register("name")}
                onChange={() => handleFieldChange("name")}
            />

            <Input
                darkStyle={darkStyle}
                type="email"
                label="Email"
                error={errors.email?.message}
                {...register("email")}
                onChange={() => handleFieldChange("email")}
            />

            <Input
                darkStyle={darkStyle}
                type="textarea"
                label="Wiadomość"
                placeholder="Napisz swoją wiadomość..."
                error={errors.message?.message}
                {...register("message")}
                onChange={() => handleFieldChange("message")}
            />

            <Button type="submit" linkTo="" darkStyle disabled={isSubmitting}>Wyślij wiadomość</Button>
        </form>
    );
};

export default ContactForm;
