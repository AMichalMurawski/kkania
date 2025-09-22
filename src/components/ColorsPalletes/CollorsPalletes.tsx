import { FC } from "react";
import styles from "./ColorsPalletes.module.css";
import { palletes } from "./palletes";

const ColorsPalletes: FC<{
    onExit: () => void;
}> = ({ onExit }) => {

    const handleClick = (pos: number) => {
        const pallete = palletes[pos];
        pallete.forEach(color => {
            document.documentElement.style.setProperty(`--color-${color[0]}`, color[1]);
        });
        onExit();
    }

    return (
        <div className={styles.backdrop}>
            <div className={styles.modal}>
                {palletes.map((pallete, i) =>
                    <div key={`pallete-${i}`} className={styles.pallete} onClick={() => handleClick(i)}>
                        {pallete.map((color, j) =>
                            <div key={`color-${i}-${j}`} className={styles.color}>
                                <div style={{ backgroundColor: color[1] }}></div>
                                <p>{color[0]}</p>
                                <p>{color[1]}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ColorsPalletes;