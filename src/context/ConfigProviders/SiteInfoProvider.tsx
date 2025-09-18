import { FC, ReactNode } from "react";
import { SiteInfoProps } from "../../utils";
import { createDataContext } from "../DataProvider";

const { Provider: BaseProvider, useData: useBaseData } = createDataContext<SiteInfoProps>();

export const SiteInfoProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <BaseProvider jsonFile="/config/siteInfo.json">{children}</BaseProvider>;
};

export const useSiteInfo = () => useBaseData();
