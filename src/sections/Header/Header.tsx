import { FC } from "react";
import styles from "./Header.module.css";
import { Button, Hamburger, Logo } from "../../elements";
import { Navbar } from "../../components";
import { useRoutes } from "../../context";
import { useWindowWidth } from "../../hooks";

const Header: FC = () => {
    const { data: routes } = useRoutes();
    const width = useWindowWidth();

    return <header className={styles.header}>
        <div className={styles.headerConteiner}>
            <Logo withoutText={width < 1200} />
            <div className={styles.navbarWrapper}>
                <Navbar />
            </div>
            <div className={styles.buttonWrapper}>
                <Button linkTo={routes?.order.path || ""}>Zapytaj o termin</Button>
            </div>
            <div className={styles.hamburgerWrapper}>
                <Hamburger />
            </div>
        </div>
    </header>
};

export default Header;