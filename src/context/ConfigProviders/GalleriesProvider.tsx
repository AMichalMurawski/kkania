import { GalleryProps } from "../../utils";
import { createDataContext } from "../DataProvider";

export const { Provider: GalleriesProvider, useData: useGalleries } = createDataContext<GalleryProps[]>();
