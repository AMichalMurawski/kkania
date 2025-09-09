import React, { ReactNode } from "react";
import { GalleryProps } from "../../utils";
import { createDataContext } from "../DataProvider";

const { Provider: BaseProvider, useData: useBaseData } = createDataContext<GalleryProps[]>();

export const GalleriesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <BaseProvider jsonFile="/config/galleries.json">{children}</BaseProvider>;
};

export const useGalleries = () => useBaseData();
