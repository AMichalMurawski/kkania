import { FC } from "react";
import styles from "./MobileMenu.module.css";
import { Contacts, Navbar } from "../..";
import { useModal, useRoutes } from "../../../context";
import { Button } from "../../../elements";

const MobileMenu: FC = () => {
    const { data: routes } = useRoutes();
    const { modals } = useModal()
    
    return (
        <div className={`${styles.conteiner} ${modals.MenuMobile ? styles.active : null}`}>
            <div className={styles.menuWrapper}>
                <Navbar flexDirection="column" />
                <div className={styles.buttonsWrapper}>
                    <Button linkTo={routes?.order.path || ""} darkStyle >Zapytaj o termin</Button>
                    <Button linkTo={routes?.offers.path || ""} >Sprawdź ofertę</Button>
                </div>
            </div>
            <div className={styles.contactsWrapper}>
                <Contacts darkStyle />
            </div>
        </div>
    );
};

export default MobileMenu;