import * as yup from "yup";

export const contactSchema = yup.object().shape({
    name: yup
        .string()
        .required("Imię jest wymagane")
        .min(2, "Imię musi mieć co najmniej 2 znaki"),
    email: yup
        .string()
        .required("Email jest wymagany")
        .email("Podaj poprawny adres email"),
    message: yup
        .string()
        .required("Wiadomość jest wymagana")
        .min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
});
