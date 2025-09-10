interface Link {
    href: string;
    value: string;
}

export interface TopSectionProps {
    title: string;
    description: string[];
    link: Link;
}