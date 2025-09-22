import { FC } from "react";
import styles from "./ContactMe.module.css";
import { ContactForm, Contacts } from "../../components";
import { Link } from "../../elements";
import { useRoutes, useSiteContent } from "../../context";

const ContactMe: FC = () => {
    const { data: siteContent } = useSiteContent();
    const { data: routes } = useRoutes();

    return (
        <section className="container">
            <h2 className={styles.sectionTitle}>{siteContent?.contact.title}</h2>
            <div className={styles.sectionWrapper}>
                <div className={styles.content}>
                    {siteContent?.contact.value.map((value, i) => 
                        <p key={i}>{value}</p>
                    )}
                    <Contacts />
                    <p>Jeśli chcesz zarezerwować sesję lub sprawdzić warunki sesji zapraszam do działu <Link href={routes?.offers.path || "/"}>Oferta</Link>.</p>
                </div>
                <div className={styles.form}>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactMe;