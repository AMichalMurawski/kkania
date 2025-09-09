import { OfferProps } from "../../utils";
import { createDataContext } from "../DataProvider";

export const { Provider: OffersProvider, useData: useOffers } = createDataContext<OfferProps[]>();
