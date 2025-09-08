interface IconProps {
    name: string;
    alt?: string;
}

export interface IconSVGProps extends IconProps {
    size?: string;
    fill?: string;
}

export interface SocialIconProps extends IconProps {
    darkStyle?: boolean;
    href?: string;
}

export interface LogoIconProps extends Omit<IconProps, 'name'> {}