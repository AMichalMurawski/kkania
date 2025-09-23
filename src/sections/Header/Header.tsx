import { FC, useEffect, useState } from "react";
import styles from "./Header.module.css";
import { Button, Hamburger, Logo } from "../../elements";
import { Navbar } from "../../components";
import { useRoutes } from "../../context";
import { useWindowWidth } from "../../hooks";

const Header: FC = () => {
    const { data: routes } = useRoutes();
    const width = useWindowWidth();
    const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
    const [isAtTop, setIsAtTop] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                setScrollDirection("down");
            } else if (currentScrollY < lastScrollY) {
                setScrollDirection("up");
            }

            setIsAtTop(currentScrollY === 0);

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", updateScroll);

        return () => {
            window.removeEventListener("scroll", updateScroll);
        };
    }, []);

    return <header className={`${styles.header} ${(width < 840 && scrollDirection === "down" && !isAtTop) ? styles.hide : null}`}>
        <div className={`container ${styles.headerContainer}`}>
            <Logo withoutText={width < 1200} homePath/>
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