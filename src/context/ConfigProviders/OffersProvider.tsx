import { FC, ReactNode } from "react";
import { OfferProps } from "../../utils";
import { createDataContext } from "../DataProvider";

const { Provider: BaseProvider, useData: useBaseData } = createDataContext<OfferProps[]>();

export const OffersProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <BaseProvider jsonFile="/config/offers.json">{children}</BaseProvider>;
};

export const useOffers = () => useBaseData();
