interface MenuItem {
    label: string;
    url: string;
}

export interface NavbarProps {
    menuList: MenuItem[];
    darkStyle?: boolean;
    flexDirection?: 'row' | 'column';
}

