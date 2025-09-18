import { FC } from "react";
import styles from "./CategoryItem.module.css";
import { Image, LinkTo } from "../../elements";
import { CategoryItemProps } from "./types";
import { useRoutes } from "../../context";
import {decode} from "he";

const CategoryItem: FC<CategoryItemProps> = ({ name, title, session, description, composition, imagesPreview }) => {
    const { data: routes } = useRoutes();

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
                    <div key={i} className={styles.image} style={{ gridColumn:`${positions[i][0]}`, gridRow: `${positions[i][1]}` }}>
                        <Image name={image.name} fileType={image.fileType} alt={image.alt} orientation={image.orientation} />
                    </div>
                ))}
            </div>
            <div className={styles.informationsWrapper}>
                <h3 className={styles.session}>{session}</h3>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.buttonWrapper}>
                    <LinkTo href={routes?.categories.path + "/" + name || ""}>{decode('Obejrzyj galerię&nbsp;&nbsp;&nbsp;&gt;')}</LinkTo>
                </p>
            </div>
        </div>
    );
};

export default CategoryItem;