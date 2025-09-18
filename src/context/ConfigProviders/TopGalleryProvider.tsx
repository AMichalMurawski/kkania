import { FC, ReactNode } from "react";
import { createDataContext } from "../DataProvider";
import { ImageProps } from "../../utils";

const { Provider: BaseProvider, useData: useBaseData } = createDataContext<ImageProps[]>();

export const TopGalleryProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <BaseProvider jsonFile="/config/topGallery.json">{children}</BaseProvider>;
};

export const useTopGallery = () => useBaseData();
