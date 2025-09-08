import * as yup from "yup";

export const reservationSchema = yup.object().shape({
    name: yup
        .string()
        .required("Imię i nazwisko są wymagane")
        .min(3, "Wpisz pełne imię i nazwisko"),
    email: yup
        .string()
        .required("Email jest wymagany")
        .email("Podaj poprawny adres email"),
    session: yup
        .string()
        .required("Wybór sesji jest wymagany"),
    date: yup
        .string()
        .required("Data jest wymagana")
        .test("is-future", "Wybierz przyszłą datę", (value) => {
            if (!value) return false;
            return new Date(value) > new Date();
        }),
    info: yup
        .string()
        .required("Data jest wymagana")
        .min(10, "Wpisz przynajmniej 10 znaków")
        .max(250, "Maksymalnie 250 znaków"),
});
