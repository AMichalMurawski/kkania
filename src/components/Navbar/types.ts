interface MenuItem {
    label: string;
    url: string;
}

export interface NavbarProps {
    menuList: MenuItem[];
    style?: 'light' | 'dark';
    flexDirection?: 'row' | 'column';
}

