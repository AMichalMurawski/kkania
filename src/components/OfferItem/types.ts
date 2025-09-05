export interface OfferProps {
    name: string;
    title: string;
    description: string;
    price: number;
    details: string[];
}

export interface OfferItemProps {
    offer: OfferProps;
    active?: boolean;
}