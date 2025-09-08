export interface ReservationFormProps {
    style?: 'light' | 'dark';
}

export interface ReservationFormData {
    name: string;
    email: string;
    session: string;
    date: string;
    info: string;
};
