export type ContentItem =
    | {
        type: "paragraph";
        text: string
    }
    | {
        type: "list";
        items: string[]
    }

export interface TermsSection {
    id: string;
    heading: string;
    content: ContentItem[];
}

export interface TermsProps {
    title: string;
    lastUpdated: string;
    sections: TermsSection[];
    contact: {
        email: string;
        phone: string;
        siteName: string;
        companyName: string;
        companyAddress: string;
        companyNip: string;
        siteUrl: string;
        formUrl: string;
    }
}
