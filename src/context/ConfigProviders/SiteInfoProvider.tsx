import { SiteInfoProps } from "../../utils";
import { createDataContext } from "../DataProvider";

export const { Provider: SiteInfoProvider, useData: useSiteInfo } = createDataContext<SiteInfoProps>();
