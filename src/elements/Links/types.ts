export interface LinkProps {
    href: string;
    anotherSite?: boolean;
    ariaLabel ?: string;
}

export interface LinkToProps extends LinkProps {
    darkStyle?: boolean;    
}