interface IconProps {
    name: string;
    alt?: string;
}

export interface IconSVGProps extends IconProps {
    size?: string;
    fill?: string;
}

export interface SocialIconProps extends IconProps {
    style?: 'light' | 'dark';
}

export interface LogoIconProps extends Omit<IconProps, 'name'> {}