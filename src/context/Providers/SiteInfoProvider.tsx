import { SiteInfoProps } from "../../utils";
import { createDataContext } from "../DataProvider";

export const { Provider: OffersProvider, useData: useSiteInfo } = createDataContext<SiteInfoProps[]>();
