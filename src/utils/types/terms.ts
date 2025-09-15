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
    siteName: string;
    lastUpdated: string;
    sections: TermsSection[];
    data: {
        email: string;
        phone: string;
        siteName: string;
        companyName: string;
        companyAddress: string;
        companyNip: string;
        siteUrl: string;
        formUrl: string;
        updateDate: string;
    }
}
