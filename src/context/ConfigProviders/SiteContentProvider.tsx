import React, { ReactNode } from "react";
import { createDataContext } from "../DataProvider";
import { AboutMeData, ContentData, TopData } from "../../utils";

interface SiteContentProps {
    aboutMe: {
        short: AboutMeData[];
        long: AboutMeData[];
    },
    gallery: TopData;
    offers: TopData;
    contact: ContentData;
};

const { Provider: BaseProvider, useData: useBaseData } = createDataContext<SiteContentProps>();

export const SiteContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <BaseProvider jsonFile="/config/siteContent.json">{children}</BaseProvider>;
};

export const useSiteContent = () => useBaseData();
