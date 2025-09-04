export interface LinkProps {
    href: string;
    anotherSite?: boolean;
}

export interface LinkToProps extends LinkProps {
    style?: 'light' | 'dark';    
}