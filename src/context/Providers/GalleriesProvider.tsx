import { GalleryProps } from "../../utils";
import { createDataContext } from "../DataProvider";

export const { Provider: OffersProvider, useData: useGalleries } = createDataContext<GalleryProps[]>();
