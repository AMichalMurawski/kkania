import React from "react";
import styles from "./ButtonBasic.module.css";
import { ButtonBasicProps } from "./types";
import { useNavigate } from "react-router-dom";


const ButtonBasic: React.FC<ButtonBasicProps> = ({ text = '', type = 'button', linkTo = '', style = 'light', view = 'short' }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (linkTo) {
            navigate(linkTo);
        };
    };

    return (
        <button
            type={type}
            className={`${styles.button} ${style === 'light' ? styles.buttonLight : styles.buttonDark} ${view === 'short' ? styles.buttonShort : styles.buttonFull}`}
            onClick={handleClick}
        >{text}</button>
    )
};

export default ButtonBasic;