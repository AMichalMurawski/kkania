import React, { useEffect, useState } from "react";
import styles from "./ReservationForm.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "../../../elements";

import { reservationSchema } from "./reservationValidation";
import { ReservationFormData, ReservationFormProps } from "./types";
import { useLocation, useNavigate } from "react-router-dom";
import { useOffers, useToast } from "../../../context";
import { sendEmail, Toast } from "../../../utils";

type FormFields = keyof ReservationFormData;

const ReservationForm: React.FC<ReservationFormProps> = ({ darkStyle }) => {
    const { data: offers } = useOffers();
    const { addToast } = useToast();
    const navigate = useNavigate();
    const location = useLocation();
    const [sessions, setSessions] = useState<{ value: string; label: string }[]>([]);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setValue,
        clearErrors,
    } = useForm<ReservationFormData>({
        resolver: yupResolver(reservationSchema),
    });

    useEffect(() => {
        const mappedSessions = offers?.map((offer) => ({
            value: offer.name,
            label: offer.title,
        }));
        setSessions(mappedSessions || []);
    }, [offers]);

    useEffect(() => {
        if (!sessions.length) return;

        const currentUrl = new URL(window.location.href);
        const planFromUrl = currentUrl.searchParams.get("plan") || "";

        setValue("session", planFromUrl);
    }, [sessions, setValue, location]);

    const handleSessionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const plan = e.target.value;
        const currentUrl = new URL(window.location.href); 
        currentUrl.searchParams.set("plan", plan);
        const newPath = currentUrl.pathname + currentUrl.search
        navigate(newPath, {replace: true});
    };

    const handleFieldChange = (field: FormFields) => {
        clearErrors(field);
    };

    const onSubmit: SubmitHandler<ReservationFormData> = async (data) => {

        try {
            addToast({
                message: "Wysyłanie wiadomości",
                type: "loading"
            })
        
            const response = await sendEmail({
                userName: data.name,
                userEmail: data.email,
                message: `
                    Zapytanie o rezerwację sesji:
                    data: ${data.date}
                    sesja: ${data.session}
                    wiadomość: ${data.info}
                `,
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
                label="Imię i Nazwisko"
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
                type="select"
                label="Sesja"
                options={sessions}
                error={errors.session?.message}
                {...register("session")}
                onChange={(e) => {
                    handleSessionChange(e);
                    handleFieldChange("session");
                }}
            />

            <Input
                darkStyle={darkStyle}
                type="date"
                label="Data"
                error={errors.date?.message}
                {...register("date")}
                onChange={() => handleFieldChange("date")}
            />

            <Input
                darkStyle={darkStyle}
                type="textarea"
                label="Informacje o sesji"
                placeholder="Podaj dodatkowe informacje..."
                error={errors.info?.message}
                {...register("info")}
                onChange={() => handleFieldChange("info")}
            />

            <Button type="submit" linkTo="" darkStyle disabled={isSubmitting}>
                Wyślij wiadomość
            </Button>
        </form>
    );
};

export default ReservationForm;
