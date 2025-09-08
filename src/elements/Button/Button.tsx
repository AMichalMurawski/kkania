import React, { PropsWithChildren } from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./types";
import { useNavigate } from "react-router-dom";


const Button: React.FC<PropsWithChildren<ButtonProps>> = ({ children, type = 'button', linkTo = '', darkStyle, view = 'short' }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (linkTo) {
            navigate(linkTo);
        };
    };

    return (
        <button
            type={type}
            className={`${styles.button} ${darkStyle ? styles.buttonDark : styles.buttonLight} ${view === 'short' ? styles.buttonShort : styles.buttonFull}`}
            onClick={handleClick}
        >{children}</button>
    )
};

export default Button;