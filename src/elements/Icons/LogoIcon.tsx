import { FC } from "react";
import styles from './LogoIcon.module.css';
import { IconSVG } from "../";

const LogoIcon: FC = () => {
    return (
        <div className={styles.logoConteiner}>
            <div className={styles.logo}>
                <IconSVG name='logo-photo' alt="Logo w kształcie aparatu fotograficznego, którego obiektyw tworzy litery k k" />
            </div>
        </div>
    );
};

export default LogoIcon;