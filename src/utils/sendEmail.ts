export type FormType = "kontakt" | "rezerwacja";

export interface SendEmailParams {
  userName: string;
  userEmail: string;
  message: string;
  formType?: FormType;
}

export interface SendEmailResponse {
  success: boolean;
  error?: string;
}

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export async function sendEmail({
  userName,
  userEmail,
  message,
  formType,
}: SendEmailParams): Promise<SendEmailResponse> {
  if (!API_URL || !API_KEY) {
    console.error("Brak konfiguracji API w .env");
    return { success: false, error: "API not configured" };
  }

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
      },
      body: JSON.stringify({
        userName,
        userEmail,
        message,
        formType,
      }),
    });

    return (await res.json()) as SendEmailResponse;
  } catch (err) {
    console.log(err);
    return { success: false, error: "Connection error" };
  }
}
