import { FC } from "react";
import styles from './SocialIcon.module.css';
import { IconSVG, Link } from "../";
import { SocialIconProps } from "./types";

const SocialIcon: FC<SocialIconProps> = ({ name, darkStyle, alt = '', href='' }) => {
    return (
        <div className={`${styles.icon} ${darkStyle ? styles.dark : styles.light}`}>
            <Link href={href} anotherSite ariaLabel={name}>
                <div>
                    <IconSVG name={name} size='2em' alt={alt} />
                </div>
            </Link>
        </div>
    );
};

export default SocialIcon;