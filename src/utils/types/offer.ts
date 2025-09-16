export interface ContentProps {
    type: "paragraph" | "list";
    text: string[];
};

export interface OfferProps {
    top?: number;
    name: string;
    title: string;
    description: string[];
    price: number;
    details: ContentProps;
    whyChoose: ContentProps;
}