import React, { PropsWithChildren } from "react";
import styles from "./TopSection.module.css";
import { LinkTo } from "../../elements";
import { TopSectionProps } from "../../utils";
import he from "he";

const Top: React.FC<PropsWithChildren<TopSectionProps>> = ({ title, description, children, link }) => {
    
    return (
        <div className={styles.topWrapper}>
                <div className={styles.content}>
                    <h2>{title}</h2>
                    {description.map((value, i) => 
                        <p key={i}>{value}</p>    
                    )}
                </div>
                {children}
            <LinkTo href={link.href}>{he.decode(link.value)}</LinkTo>
        </div>
    );
};

export default Top;