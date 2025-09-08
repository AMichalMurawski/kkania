import React from "react";
import styles from "./ReservationForm.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "../../../elements";

import { reservationSchema } from "./reservationValidation";
import { ReservationFormData, ReservationFormProps } from "./types";
import { sessions } from "./sessionsData";

const ReservationForm: React.FC<ReservationFormProps> = ({ darkStyle }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ReservationFormData>({
        resolver: yupResolver(reservationSchema),
    });

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

            <Button type="submit" linkTo="">
                Zarezerwuj
            </Button>
        </form>
    );
};

export default ReservationForm;
