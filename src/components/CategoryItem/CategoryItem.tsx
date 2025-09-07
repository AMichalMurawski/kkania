import React from "react";
import styles from "./CategoryItem.module.css";
import { Image } from "../../elements";
import { CategoryItemProps } from "./types";

const CategoryItem: React.FC<CategoryItemProps> = ({ name, title, session, description, composition, imagesPreview }) => {
    const compositionImages = (): [string, string][] => {
        const compositions: Record<number, [string, string][]> = {
            1: [['1 / 3', '1 / 3']],
            2: [['1 / 2', '1 / 3'], ['2 / 3', '1 / 3']],
            3: [['1 / 2', '1 / 3'], ['2 / 3', '1 / 2'], ['2 / 3', '2 / 3']],
            4: [['1 / 2', '1 / 2'], ['1 / 2', '2 / 3'], ['2 / 3', '1 / 3']],
            5: [['1 / 2', '1 / 2'], ['1 / 2', '2 / 3'], ['2 / 3', '1 / 2'], ['2 / 3', '2 / 3']],
        };

        return compositions[composition] ?? [];
    };
    
    const positions = compositionImages();
    
    return (
        <div className={styles.conteiner}>
            <div className={styles.images}>
                {imagesPreview.map((image, i) => (
                    <div className={styles.image} style={{ gridColumn:`${positions[i][0]}`, gridRow: `${positions[i][1]}` }}>
                        <Image name={image.name} alt={image.alt} orientation={image.orientation} />
                    </div>
                ))}
            </div>
            <div className={styles.informationsWrapper}>
                <h3 className={styles.name}>{name}</h3>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
};

export default CategoryItem;