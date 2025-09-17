import React, { useEffect } from "react";
import styles from "./Toast.module.css";
import { IconSVG } from "../../../elements";
import { useToast } from "../../../context";

const Toast: React.FC = () => {
    const { toasts } = useToast();

    return (
        <div className={styles.toastsList}>
            {toasts.map((toast, index) => {
                let iconName = "";
                let iconFill = "";

                if (toast.type === "emailSend") {
                    iconName = "envelop";
                    iconFill = "green";
                };
                if (toast.type === "wrong") {
                    iconName = "cross";
                    iconFill = "red";
                };
                
                const timeDelay: number = (toast?.timeExist || 3000) - 2000;
                const offset = index * 100;
                
                return (
                    <div
                        key={toast.id}
                        className={styles.toastConteiner}
                        style={{ '--toast-delay': `${timeDelay}ms` } as React.CSSProperties}
                    >
                        <div
                            className={styles.toastWrapper}
                            style={{ '--toast-delay': `${timeDelay}ms` } as React.CSSProperties}
                        >
                            <IconSVG name={iconName} fill={iconFill} size="2em" />
                            <p>{toast.message}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Toast;