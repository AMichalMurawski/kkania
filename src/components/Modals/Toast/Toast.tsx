import { FC, CSSProperties } from "react";
import styles from "./Toast.module.css";
import { IconSVG } from "../../../elements";
import { useToast } from "../../../context";

const Toast: FC = () => {
    const { toasts } = useToast();

    return (
        <div className={styles.toastsList}>
            {toasts.map(toast => {
                let iconName = "";
                let iconFill = "";

                if (toast.type === "emailSend") {
                    iconName = "envelop";
                    iconFill = "green";
                };
                if (toast.type === "error") {
                    iconName = "cross";
                    iconFill = "red";
                };
                if (toast.type === "loading") {
                    iconName = "spinner6";
                    iconFill = "var(--color-secondary)";
                };
                
                const timeDelay: number = (toast?.timeExist || 3000) - 2000;
                
                return (
                    <div
                        key={toast.id}
                        className={styles.toastConteiner}
                        style={{ '--toast-delay': `${timeDelay}ms` } as CSSProperties}
                    >
                        <div
                            className={styles.toastWrapper}
                            style={{ '--toast-delay': `${timeDelay}ms` } as CSSProperties}
                        >
                            <div className={`${styles.iconWrapper} ${toast.type === "loading" ? styles.iconRotate : null}`}>
                                <IconSVG name={iconName} fill={iconFill} />
                            </div>
                            <p>{toast.message}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Toast;