import React from "react";
import styles from "./ButtonTransparent.module.css";
import { ButtonProps } from "./types";
import { useNavigate } from "react-router-dom";

const ButtonTransparent: React.FC<ButtonProps> = ({ text = '', type = 'button', linkTo = '', style = 'light' }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (linkTo) {
            navigate(linkTo);
        };
    };

    return (
        <button
            type={type}
            className={`${styles.button} ${style === 'light' ? styles.buttonLight : styles.buttonDark}`}
            onClick={handleClick}
        >{text}</button>
    )
};

export default ButtonTransparent;