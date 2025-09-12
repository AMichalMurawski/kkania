import React, { useEffect, useState } from "react";
import styles from "./ReservationForm.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "../../../elements";

import { reservationSchema } from "./reservationValidation";
import { ReservationFormData, ReservationFormProps } from "./types";
import { useNavigate } from "react-router-dom";
import { useOffers } from "../../../context";

const ReservationForm: React.FC<ReservationFormProps> = ({ darkStyle }) => {
    const { data: offers } = useOffers();
    const navigate = useNavigate();
    const [sessions, setSessions] = useState<{ value: string; label: string }[]>([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
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

    const onSubmit: SubmitHandler<ReservationFormData> = (data) => {
        window.alert(`Form data: ${JSON.stringify(data)}`);
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
            />

            <Input
                darkStyle={darkStyle}
                type="email"
                label="Email"
                error={errors.email?.message}
                {...register("email")}
            />

            <Input
                darkStyle={darkStyle}
                type="select"
                label="Sesja"
                options={sessions}
                error={errors.session?.message}
                {...register("session")}
                onChange={handleSessionChange}
            />

            <Input
                darkStyle={darkStyle}
                type="date"
                label="Data"
                error={errors.date?.message}
                {...register("date")}
            />

            <Input
                darkStyle={darkStyle}
                type="textarea"
                label="Informacje o sesji"
                placeholder="Podaj dodatkowe informacje..."
                error={errors.info?.message}
                {...register("info")}
            />

            <Button type="submit" linkTo="" darkStyle>
                Wyślij wiadomość
            </Button>
        </form>
    );
};

export default ReservationForm;
