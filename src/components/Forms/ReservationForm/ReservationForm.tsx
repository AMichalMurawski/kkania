import React, { useEffect, useState } from "react";
import styles from "./ReservationForm.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "../../../elements";

import { reservationSchema } from "./reservationValidation";
import { ReservationFormData, ReservationFormProps } from "./types";
import { useNavigate } from "react-router-dom";
import { useOffers, useToast } from "../../../context";
import { Toast } from "../../../utils";

type FormFields = keyof ReservationFormData;

const ReservationForm: React.FC<ReservationFormProps> = ({ darkStyle }) => {
    const { data: offers } = useOffers();
    const { addToast } = useToast();
    const navigate = useNavigate();
    const [sessions, setSessions] = useState<{ value: string; label: string }[]>([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
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
        const planFromUrl = currentUrl.searchParams.get("plan") || sessions[0].value;

        setValue("session", planFromUrl);
    }, [sessions, setValue]);

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

    const onSubmit: SubmitHandler<ReservationFormData> = (data) => {
        const toast: Omit<Toast, 'id'> = {
            type: "emailSend",
            message: "Zapytanie o sesję zostało wysłane"
        };
        addToast(toast);
        reset();
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
                onChange={() => {
                    handleSessionChange;
                    handleFieldChange("session")
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

            <Button type="submit" linkTo="" darkStyle>
                Wyślij wiadomość
            </Button>
        </form>
    );
};

export default ReservationForm;
