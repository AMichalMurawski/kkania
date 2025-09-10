import React from "react";
import styles from "./Footer.module.css";
import { Link, Logo, SocialIcon } from "../../elements";
import { Contacts } from "../../components";
import { useSiteInfo } from "../../context";

const Footer: React.FC = () => {
    const { data: siteInfo } = useSiteInfo();

    return <footer className={styles.footer}>
        <div className={styles.footerConteiner}>
            <div className={styles.footerContent}>
                <div className={styles.logo}>
                    <Logo darkStyle />
                </div>
                <div className={styles.contacts}>
                    <Contacts darkStyle />
                </div>
                <div className={styles.legal}>
                    <Link href="">Polityka Prywatności</Link>
                    <Link href="">Regulamin</Link>
                    <Link href="">FAQ</Link>
                </div>
                <div className={styles.socialMedia}>
                    {siteInfo?.socialMedia.map(social =>
                        <SocialIcon key={social[0]} name={social[0]} href={social[1]} darkStyle />
                    )}
                </div>
            </div>
            <div className={styles.footerCopyright}>
                <div>
                    {siteInfo?.footerText.map((text, i) => 
                        <p key={i}>{text}</p>
                    )}
                </div>
                <div className={styles.madeBy}>
                    <p>Projekt i realizacja strony</p>
                    <p><a href={siteInfo?.madeBy.url} target='blank' rel='noopener noreferrer'>{siteInfo?.madeBy.name}</a></p>
                </div>
            </div>
        </div>
    </footer>
};

export default Footer;