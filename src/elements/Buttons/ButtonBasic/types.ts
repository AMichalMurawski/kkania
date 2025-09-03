export interface ButtonProps {
    text: string;
    type?: 'button' | 'submit';
    linkTo: string;
    style?: 'light' | 'dark';
}

export interface ButtonBasicProps extends ButtonProps {
    view?: 'short' | 'full';
}