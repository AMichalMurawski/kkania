import React from "react";
import { IconSVGProps } from "./types";

const IconSVG: React.FC<IconSVGProps> = ({ name, size = '100%', fill='inherit', alt='' }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 32 32"
            width={size}
            height={size}
            fill={fill}
            aria-label={alt}
        >
            <use xlinkHref={`/icons/icons.svg#icon-${name}`} />
        </svg>
    );
};

export default IconSVG;