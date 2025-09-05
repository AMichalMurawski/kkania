interface DetailFullProps {
    heading: string;
    value: string;
}

export interface OfferProps {
    name: string;
    title: string;
    description: string;
    price: number;
    details: DetailFullProps[];
}