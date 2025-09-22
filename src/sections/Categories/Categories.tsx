import { FC } from "react";
import styles from "./Categories.module.css";
import { CategoryItem } from "../../components";
import { useGalleries } from "../../context";

const Categories: FC = () => {
    const { data: galleries } = useGalleries();

    return (
        <section className="container">
            <div className={styles.categoriesList}>
                {galleries?.map(gallery => 
                    <CategoryItem
                        key={gallery.name}
                        composition={gallery.composition}
                        description={gallery.description}
                        imagesPreview={gallery.imagesPreview}
                        name={gallery.name}
                        session={gallery.session}
                        title={gallery.title}
                    />
                )}
            </div>
        </section>
    );
};

export default Categories;