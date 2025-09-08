export type ContentItem =
    | { type: "paragraph"; text: string }
    | { type: "list"; items: string[] }

export interface TermsSection {
    heading: string;
    content: ContentItem[];
}

export interface TermsProps {
    title: string;
    lastUpdated: string;
    sections: TermsSection[];
}
