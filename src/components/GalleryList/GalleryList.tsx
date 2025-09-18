import { FC, useEffect, useMemo, useRef, useState } from "react";
import styles from "./GalleryList.module.css";
import { GalleryListProps } from "./types";
import { Image } from "../../elements";
import { ImageProps } from "../../utils/types/image";
import { useModal } from "../../context";

interface PositionedImage extends ImageProps {
  colStart: number;
  rowStart: number;
  rowSpan: number;
}

const GalleryList: FC<GalleryListProps> = ({images}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [columns, setColumns] = useState(1);
    const { open, setActiveImageIndex } = useModal();

    useEffect(() => {
        const updateColumns = () => {
            const width = window.innerWidth;
            let cols = 1;
            if (width >= 1200) cols = 4;
            else if (width >= 768) cols = 3;
            else if (width >= 480) cols = 2;
            setColumns(cols);
        };

        updateColumns();
        window.addEventListener("resize", updateColumns);
        return () => window.removeEventListener("resize", updateColumns);
    }, [images]);

    const positioned: PositionedImage[] = useMemo(() => {
        const positionedArray: PositionedImage[] = [];
        const occupied: boolean[][] = [];

        const isOccupied = (row: number, col: number) =>
            !!occupied[row]?.[col];

        const occupy = (row: number, col: number) => {
            if (!occupied[row]) occupied[row] = []
            occupied[row][col] = true;
        };

        let col = 0
        let row = 0
    
        for (const img of images) {
            const rowSpan = img.orientation === 'portrait' ? 2 : 1;

            while (true) {
                if (col >= columns) {
                    col = 0;
                    row++;
                    continue;
                };

                const canPlace =
                    !isOccupied(row, col) &&
                    (rowSpan === 1 || !isOccupied(row + 1, col));
            
                if (canPlace) break;

                col++;
            };

            occupy(row, col);
            if (rowSpan === 2) occupy(row + 1, col);

            positionedArray.push({
                ...img,
                colStart: col + 1,
                rowStart: row + 1,
                rowSpan
            });

            col++;
        };

        return positionedArray;
    }, [images, columns]);

    const totalRows = useMemo(() => {
        if (!positioned.length) return 1;
        return Math.max(...positioned.map((p) => p.rowStart + p.rowSpan - 1));
    }, [positioned]);

    const columnGap = columns > 1
        ? `calc(100% / (${columns} * 6 + ${columns} - 1))`
        : `0`;
    const rowGap = totalRows > 1
        ? `calc(100% / (${totalRows} * 4 + ${totalRows} - 1))`
        : `0`;
    
    return (
        <div
            ref={containerRef}
            className={styles.conteiner}
            style={columns > 1 
                ? { rowGap, columnGap }
                : { rowGap: '1.5em' }
            }
        >
            {positioned.map((image, i) => 
                <div
                    key={i}
                    style={columns > 1
                        ? { gridColumn: `${image.colStart} / span 1`, gridRow: `${image.rowStart} / span ${image.rowSpan}` }
                        : { aspectRatio: `${image.orientation === 'landscape' ? '3 / 2' : '2 / 3'}`}
                    }
                    className={styles.imageWrapper}
                    onClick={() => {
                        setActiveImageIndex(i);
                        open('ImageModal');
                    }}
                >
                    <Image
                        name={image.name}
                        fileType={image.fileType}
                        alt={image.alt}
                        orientation={image.orientation} />
                </div>
            )}
        </div>
    );
};

export default GalleryList;