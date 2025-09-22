import { FC, PropsWithChildren } from "react";
import styles from "./TopSection.module.css";
import { LinkTo } from "../../elements";
import { TopSectionProps } from "../../utils";
import { decode } from "he";

const Top: FC<PropsWithChildren<TopSectionProps>> = ({ title, description, children, link, darkStyle }) => {
    
    return (
        <div className={`container ${styles.topContainer}`}>
                <div className={styles.content}>
                    <h2>{title}</h2>
                    {description.map((value, i) => 
                        <p key={i}>{value}</p>    
                    )}
                </div>
                {children}
            <LinkTo href={link.href} darkStyle={darkStyle}>{decode(link.value)}</LinkTo>
        </div>
    );
};

export default Top;