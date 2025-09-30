import { FC, useEffect, useState } from "react";
import styles from "./ReservationForm.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "../../../elements";
import { reservationSchema } from "./reservationValidation";
import { ReservationFormData, ReservationFormProps } from "./types";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useOffers, useToast } from "../../../context";
import { sendEmail } from "../../../utils";

type FormFields = keyof ReservationFormData;

const ReservationForm: FC<ReservationFormProps> = ({ darkStyle }) => {
  const { data: offers } = useOffers();
  const { addToast } = useToast();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [sessions, setSessions] = useState<{ value: string; label: string }[]>(
    []
  );

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

    const planFromUrl = searchParams.get("plan") || "";

    setValue("session", planFromUrl);
  }, [sessions, setValue, searchParams]);

  const handleSessionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const plan = e.target.value;
    searchParams.set("plan", plan);
    setSearchParams(searchParams, { replace: true });
    // const currentUrl = new URL(window.location.href);
    // currentUrl.searchParams.set("plan", plan);
    // const newPath = currentUrl.pathname + currentUrl.search;
    // navigate(newPath, { replace: true });
  };

  const handleFieldChange = (field: FormFields) => {
    clearErrors(field);
  };

  const onSubmit: SubmitHandler<ReservationFormData> = async (data) => {
    try {
      addToast({
        message: "Wysyłanie wiadomości",
        type: "loading",
      });

      const message = `
                <strong>Informacje o sesji:</strong> ${data.info}
                <strong>Imię i nazwisko:</strong> ${data.name}
                <strong>E-mail:</strong> ${data.email}
                <strong>Sesja:</strong> ${data.session}
                <strong>Data:</strong> ${data.date}
            `;

      const response = await sendEmail({
        userName: data.name,
        userEmail: data.email,
        message: message,
        formType: "rezerwacja",
      });

      if (!response.success) {
        addToast({
          message: "Nastąpił problem z wysłaniem wiadomości",
          type: "error",
        });
        return;
      }

      addToast({
        message: "Wiadomość wysłana pomyślnie",
        type: "emailSend",
      });
      reset();
    } catch (err: any) {
      console.log("Błąd wysyłki email:", err);
      addToast({
        message: "Wystąpił błąd przy wysyłaniu wiadomośći",
        type: "error",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Input
        darkStyle={darkStyle}
        type="text"
        label="Imię i Nazwisko:"
        error={errors.name?.message}
        {...register("name")}
        onChange={() => handleFieldChange("name")}
      />

      <Input
        darkStyle={darkStyle}
        type="email"
        label="E-mail:"
        error={errors.email?.message}
        {...register("email")}
        onChange={() => handleFieldChange("email")}
      />

      <Input
        darkStyle={darkStyle}
        type="select"
        label="Sesja:"
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
        label="Data:"
        error={errors.date?.message}
        {...register("date")}
        onChange={() => handleFieldChange("date")}
      />

      <Input
        darkStyle={darkStyle}
        type="textarea"
        label="Informacje o sesji:"
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
