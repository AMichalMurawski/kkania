import React from "react";
import styles from "./ContactMe.module.css";
import { ContactForm, Contacts } from "../../components";
import { Link } from "../../elements";
import { useSiteInfo } from "../../context";

const ContactMe: React.FC = () => {
    const { data: siteInfo } = useSiteInfo();

    return (
        <section className={styles.sectionConteiner}>
            <h2>Napisz do mnie</h2>
            <div className={styles.sectionWrapper}>
                <div className={styles.content}>
                    <p>Jeżeli masz jakiekolwiek pytania napisz do mnie. Postaram się odpowiedzieć w ciągu 24 godzin.<br/>
                    Jeśli masz pilną sprawę jestem dostępna pod telefonem w godzinach {siteInfo?.workingHours.map((work, i) => `${work.days} ${work.hours}` ).join(', ')} (chyba, że aktualnie odbywam sesję).</p>
                    <Contacts />
                    <p>Jeśli chcesz zarezerwować sesję lub sprawdzić warunki sesji zapraszam do działu <Link href="">Oferta</Link>.</p>
                </div>
                <div className={styles.form}>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactMe;